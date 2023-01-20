import { useState } from 'react';
import { IoArrowUpOutline, IoArrowDownOutline } from 'react-icons/io5';

type Props = {
  title: string;
  children: React.ReactNode;
};

export function Collapse({ title, children }: Props) {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="border border-gray-100 rounded-md">
      <button
        onClick={() => setIsVisible((prev) => !prev)}
        className="w-full cursor-pointer flex items-center justify-between border-b border-gray-100 p-4 bg-gray-50 "
      >
        <p className="text-gray-800">{title}</p>
        {isVisible ? (
          <IoArrowUpOutline fontSize="22px" color="#000" />
        ) : (
          <IoArrowDownOutline fontSize="22px" color="#000" />
        )}
      </button>
      {isVisible && <div className="p-4">{children}</div>}
    </div>
  );
}
