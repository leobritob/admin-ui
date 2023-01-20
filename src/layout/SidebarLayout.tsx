import classnames from 'classnames';
import { useState } from 'react';

import { Footer, Nav, Sidebar } from '~/components';

type Props = {
  children: React.ReactNode;
};

export function SidebarLayout({ children }: Props) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <>
      <div
        className={classnames('w-full grid transition-all duration-150 overflow-y-hidden', {
          'grid-cols-[350px,1fr]': isSidebarOpen,
          'grid-cols-[0px,1fr]': !isSidebarOpen,
        })}
      >
        <Sidebar open={isSidebarOpen} />
        <section className="w-full h-screen max-h-screen overflow-y-hidden">
          <Nav toggleSidebarButton={() => setIsSidebarOpen((prev) => !prev)} />
          <div className="px-10 pt-10 pb-40 w-full h-full overflow-y-auto">
            {children}
            <Footer />
          </div>
        </section>
      </div>
    </>
  );
}
