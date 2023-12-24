import { createBrowserRouter } from 'react-router-dom';
import { HomePage, ProjectPage, ProjectPage2, ProjectPage3, ProjectPage4, ProjectPage5, 
  ProjectPage6, ProjectPage7, ProjectPage8, ProjectPage9, ProjectPage10,
  ProjectPage11, ProjectPage12, ProjectPage13, ProjectPage14, ProjectPage15} from './pages';

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
  },
  {
    path: '/projects/4',
    element: <ProjectPage4 />
  },
  {
    path: '/projects/5',
    element: <ProjectPage5 />
  },
  {
    path: '/projects/6',
    element: <ProjectPage6 />
  },
  {
    path: '/projects/7',
    element: <ProjectPage7 />
  },
  {
    path: '/projects/8',
    element: <ProjectPage8 />
  },
  {
    path: '/projects/9',
    element: <ProjectPage9 />
  },
  {
    path: '/projects/10',
    element: <ProjectPage10 />
  },
  {
    path: '/projects/11',
    element: <ProjectPage11 />
  },
  {
    path: '/projects/12',
    element: <ProjectPage12 />
  },
  {
    path: '/projects/13',
    element: <ProjectPage13 />
  },
  {
    path: '/projects/14',
    element: <ProjectPage14 />
  },
  {
    path: '/projects/15',
    element: <ProjectPage15 />
  },
]);

export default router;
