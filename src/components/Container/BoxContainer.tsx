type Props = {
  children: React.ReactNode;
};

export function BoxContainer({ children }: Props) {
  return <div className="w-full bg-white p-8 rounded-md shadow-lg">{children}</div>;
}
