import { createBrowserRouter } from 'react-router-dom';
import { HomePage, ProjectPage, ProjectPage2, ProjectPage3, } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/projects/1',
    element: <ProjectPage />,
  },
  {
    path: '/projects/2',
    element: <ProjectPage2 />
  },
  {
    path: '/projects/3',
    element: <ProjectPage3 />
  }
]);

export default router;
