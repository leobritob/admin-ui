type Props = {
  children: React.ReactNode;
};

export function PageTitle({ children }: Props) {
  return <h1 className="border-b border-gray-200 py-4 mb-6">{children}</h1>;
}
