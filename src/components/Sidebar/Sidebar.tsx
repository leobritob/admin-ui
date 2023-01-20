import classnames from 'classnames';
import { useLocation, useNavigate } from 'react-router-dom';

import { SidebarItem } from './SidebarItem';

type Props = {
  open?: boolean;
};

export function Sidebar({ open = true }: Props) {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <aside
      className={classnames('w-[350px] h-screen bg-white shadow-lg transition-all duration-150', {
        'translate-x-0': open,
        '-translate-x-full': !open,
      })}
    >
      <button
        onClick={() => navigate('/')}
        className="w-full flex items-center justify-center border-b border-white h-20 bg-teal-500"
      >
        <p className="text-white text-2xl font-light">Admin UI</p>
      </button>
      <div className="py-10 flex flex-col items-start justify-start">
        <SidebarItem isActive={location.pathname === '/'} onClick={() => navigate('/')}>
          Dashboard
        </SidebarItem>
        <SidebarItem isActive={location.pathname.startsWith('/users')} onClick={() => navigate('/users')}>
          Users
        </SidebarItem>
      </div>
    </aside>
  );
}
