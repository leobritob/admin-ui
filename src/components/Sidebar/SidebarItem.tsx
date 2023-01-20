import classNames from 'classnames';

type Props = {
  children: React.ReactNode;
  isActive?: boolean;
  onClick: VoidFunction;
};

export function SidebarItem({ children, isActive = false, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={classNames(
        'w-full py-4 px-10 flex items-center justify-start gap-2 transition-all duration-150',
        {
          'bg-teal-600 hover:bg-teal-500 text-white hover:text-white': isActive,
          'bg-white hover:bg-teal-500 hover:text-white': !isActive,
        }
      )}
    >
      {children}
    </button>
  );
}
