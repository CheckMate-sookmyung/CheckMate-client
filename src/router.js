import { createBrowserRouter } from 'react-router-dom';
import {
  AttendanceStudentIdPage,
  AttendanceSignPage,
  DashboardPage,
  DashboardInfoPage,
  DashboardEmailPage,
  DashboardAttendeePage,
} from './pages';
import Register from './pages/RegisterPage/RegisterPage';
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
      {
        path: '/event/dashboard',
        element: <DashboardPage />,
      },
      {
        path: '/event/dashboard/info',
        element: <DashboardInfoPage />,
      },
      {
        path: '/event/dashboard/email',
        element: <DashboardEmailPage />,
      },
      {
        path: '/event/dashboard/attendee',
        element: <DashboardAttendeePage />,
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
]);

export default router;
