import { createBrowserRouter } from 'react-router-dom';
import { HomePage, ProjectPage } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/projects',
    element: <ProjectPage />,
  },
]);

export default router;
