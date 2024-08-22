import { createBrowserRouter } from 'react-router-dom';
import {
  AttendanceStudentIdPage,
  AttendanceSignPage,
  DashboardPage,
  DashboardInfoPage,
  DashboardEmailPage,
  DashboardAttendeePage,
  Home,
  RegisterPage,
  EventListPage,
} from './pages';
import Layout from './Layout/Layout';

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
        element: <RegisterPage />,
      },
      {
        path: '/event',
        element: <EventListPage />,
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
