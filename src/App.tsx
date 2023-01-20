import { Toaster } from 'react-hot-toast';

import { AppRoutes } from './routes';

export function App() {
  return (
    <>
      <Toaster toastOptions={{ duration: 5000 }} />
      <AppRoutes />
    </>
  );
}
