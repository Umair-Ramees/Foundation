import { useEffect, useRef, memo, Dispatch, SetStateAction } from 'react';
import { useKeyPress } from 'react-use';

import Box from 'components/base/Box';
import Input from 'components/base/Input';
import SearchBarIcon from './search-result/SearchBarIcon';

import SearchIcon from 'assets/icons/search-icon.svg';
import CloseIcon from 'assets/icons/close-icon.svg';

import { PageColorMode } from 'types/page';

interface SearchBarInputProps {
  onChange: Dispatch<SetStateAction<string>>;
  setIsFocused: Dispatch<SetStateAction<boolean>>;
  placeholder: string;
  isFocused: boolean;
  colorMode: PageColorMode;
  searchOpen: boolean;
  searchTerm: string;
}

export default memo(SearchBarInput);

function SearchBarInput(props: SearchBarInputProps): JSX.Element {
  const {
    onChange,
    setIsFocused,
    placeholder,
    isFocused,
    colorMode,
    searchOpen,
    searchTerm,
  } = props;

  const focusRef = useRef<HTMLInputElement>(null);

  const focusInput = () => focusRef?.current?.focus();

  useEffect(() => {
    if (searchOpen) {
      focusInput();
    }
  }, [searchOpen]);

  const isEscapePressed = useKeyPress('Escape');

  useEffect(() => {
    if (isEscapePressed) {
      focusRef?.current?.blur();
      setIsFocused(false);
    }
  }, [isEscapePressed, setIsFocused]);

  const onKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      setIsFocused(false);
    }
  };

  const iconMode = colorMode === PageColorMode.dark ? 'white' : 'black';

  return (
    <Box css={{ position: 'relative', zIndex: 999 }}>
      <SearchBarIcon
        css={{ left: 20, pointerEvents: 'none' }}
        color={iconMode}
        data-active={isFocused}
      >
        <SearchIcon width={18} height={18} style={{ display: 'block' }} />
      </SearchBarIcon>
      <Input
        css={{
          border: 'none',
          width: '100%',
          paddingLeft: '$8',
        }}
        data-active={isFocused}
        size="large"
        color={colorMode === PageColorMode.dark ? 'translucent' : 'white'}
        value={searchTerm}
        onChange={(ev) => onChange(ev.target.value)}
        onFocus={() => setIsFocused(true)}
        placeholder={placeholder}
        title={placeholder}
        ref={focusRef}
      />
      {isFocused && (
        <SearchBarIcon
          role="button"
          tabIndex={0}
          color={iconMode}
          css={{ right: 20 }}
          focused={true}
          onKeyPress={(e: React.KeyboardEvent) => onKeyPress(e)}
          onClick={() => setIsFocused(false)}
        >
          <CloseIcon width={14} height={14} style={{ display: 'block' }} />
        </SearchBarIcon>
      )}
    </Box>
  );
}
