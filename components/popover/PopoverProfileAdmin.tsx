import { useAccount } from 'wagmi';

import useUserByPublicKey from 'hooks/queries/hasura/users/use-user-by-public-key';
import useModal from 'hooks/use-modal';

import NotAllowedIcon from 'assets/icons/not-allowed.svg';
import AdminShield from 'assets/icons/admin-shield.svg';

import PopoverMenu from './PopoverMenu';
import PopoverMeatball from './PopoverMeatball';

import { PopoverMenuOption } from './types';
import { ModalKey } from 'types/modal';

interface CreateMenuItemsProps {
  isAdmin: boolean;
  setCurrentModal: (value: ModalKey) => void;
}

const createMenuItems = ({
  isAdmin,
  setCurrentModal,
}: CreateMenuItemsProps): PopoverMenuOption[] => {
  let options: PopoverMenuOption[] = [
    {
      icon: <NotAllowedIcon />,
      children: <span style={{ color: '#F93A3A' }}>Report</span>,
      onClick: () => {
        return setCurrentModal(ModalKey.REPORT);
      },
    },
  ];

  if (isAdmin) {
    options = [
      {
        icon: <AdminShield />,
        children: 'Admin Tools',
        onClick: () => {
          return setCurrentModal(ModalKey.ADMIN_TOOLS);
        },
      },
      ...options,
    ];
  }

  return options;
};

export default function PopoverProfileAdmin() {
  const { setCurrentModal } = useModal();

  const [{ data: user }] = useAccount();

  const { data: currentUserData } = useUserByPublicKey(
    { publicKey: user?.address },
    { refetchOnWindowFocus: false }
  );

  const currentUserIsAdmin = currentUserData?.user?.isAdmin;

  const options = createMenuItems({
    isAdmin: currentUserIsAdmin,
    setCurrentModal,
  });

  return (
    <PopoverMeatball appearance="minimal">
      <PopoverMenu options={options} />
    </PopoverMeatball>
  );
}
