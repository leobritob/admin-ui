import { IoMenuOutline } from 'react-icons/io5';

import { IconButton } from '~/components';

type Props = {
  toggleSidebarButton: VoidFunction;
};

export function Nav({ toggleSidebarButton }: Props) {
  return (
    <nav className="w-full h-20 px-8 bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-start border-b border-white shadow-lg">
      <div className="w-full">
        <IconButton onClick={toggleSidebarButton} Icon={<IoMenuOutline fontSize="32px" color="#fff" />} />
      </div>
    </nav>
  );
}
