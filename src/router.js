import { createBrowserRouter } from 'react-router-dom';
import {
  AttendanceStudentIdPage,
  AttendanceSignPage,
  DashboardPage,
  DashboardInfo,
  DashboardEmail,
} from './pages';
import Register from './pages/registerPage/register';
import EventList from './pages/EventList/EventList';
import Layout from './Layout/Layout';
import EventDetailPage from './pages/EventDetail/EventDetailPage';
import Home from './pages/Home/Home';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/event',
        element: <EventList />,
      },
      {
        path: '/event/detail',
        element: <EventDetailPage />,
      },
    ],
  },
  {
    path: '/attendance/student-id',
    element: <AttendanceStudentIdPage />,
  },
  {
    path: '/attendance/sign',
    element: <AttendanceSignPage />,
  },
  {
    path: '/event/dashboard',
    element: <DashboardPage />,
  },
  {
    path: '/event/dashboard/info',
    element: <DashboardInfo />,
  },
  {
    path: '/event/dashboard/email',
    element: <DashboardEmail />,
  },
]);

export default router;
