import classnames from 'classnames';

import { Fragment, useState } from 'react';

type Props = {
  tabs: { label: string; Component: React.ReactNode }[];
};

export function Tabs({ tabs }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className="mb-4">
      <div className="w-full flex flex-row items-start justify-start gap-2">
        {tabs.map((tab, index) => (
          <Fragment key={index}>
            <button
              onClick={() => setSelectedIndex(index)}
              className={classnames('p-4 rounded-tl-md rounded-tr-md cursor-pointer transition-all duration-150', {
                'bg-teal-500 text-white': selectedIndex === index,
                'bg-white text-black hover:bg-teal-500 hover:text-white': selectedIndex !== index,
              })}
            >
              {tab.label}
            </button>
          </Fragment>
        ))}
      </div>
      <div className="w-full border-t border-teal-500">
        {selectedIndex >= 0 && (
          <div className="w-full border-t border-teal-500 p-4">{tabs[selectedIndex].Component}</div>
        )}
      </div>
    </div>
  );
}
