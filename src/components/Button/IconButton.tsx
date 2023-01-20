type Props = {
  Icon: JSX.Element;
  onClick?: VoidFunction;
};

export function IconButton({ Icon, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer px-3 py-2 rounded-md ring-0 hover:ring-2 ring-black/20 transition-all duration-150"
    >
      {Icon}
    </button>
  );
}
