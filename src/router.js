import { createBrowserRouter } from 'react-router-dom';
import {
  AttendanceStudentIdPage,
  AttendanceSignPage,
  DashboardPage,
  DashboardInfoPage,
  DashboardAttendeePage,
  Home,
  RegisterPage,
  EventCardListPage,
  DashboardMessagePage,
  TotalStatisticsPage,
} from './pages';
import Layout from './Layout/Layout';
import RegisterCompleted from './pages/RegisterPage/PageComponents/RegisterCompleted';

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
        path: '/register/completed',
        element: <RegisterCompleted />,
      },
      {
        path: '/event',
        element: <EventCardListPage />,
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
        path: '/event/dashboard/message',
        element: <DashboardMessagePage />,
      },
      {
        path: '/event/dashboard/attendee',
        element: <DashboardAttendeePage />,
      },
      {
        path: '/stats',
        element: <TotalStatisticsPage />,
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
