import { ReactNode } from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';

import { CSS, styled } from 'stitches.config';

import { CheckboxIcon } from './CustomCheckbox';

export const CheckboxWrapper = styled(Checkbox.Root, {
  color: 'inherit',
  display: 'flex',
  position: 'relative',
  cursor: 'pointer',
  border: 'none',
  padding: '$5',
  background: '$white100',
  borderRadius: '$2',
  boxShadow: '$0',
  fontFamily: '$body',
  transition: 'transform $1 $ease, box-shadow $1 $ease',
  textAlign: 'unset',
  '@bp1': {
    padding: '$7',
  },
  '@hover': {
    '&:hover': {
      boxShadow: '$1',
      transform: 'translateY(-2px)',
    },
    '&:active': {
      boxShadow: '$0',
      transform: 'translateY(0)',
    },
  },
});

interface BlockCheckboxProps {
  name: string;
  checked: boolean;
  onCheckedChange: (arg0: boolean) => void;
  children: ReactNode;
  css?: CSS;
}

export default function BlockCheckbox(props: BlockCheckboxProps): JSX.Element {
  const { onCheckedChange, checked, name, children, css } = props;

  return (
    <CheckboxWrapper
      onCheckedChange={onCheckedChange}
      name={name}
      checked={checked}
      css={css}
    >
      <CheckboxIcon checked={checked} size={40} />
      {children}
    </CheckboxWrapper>
  );
}
