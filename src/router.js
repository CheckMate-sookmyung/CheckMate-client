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
  DashboardStatisticPage,
  LoadingPage,
  RegisterCompleted,
  DetailStatisticsPage,
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
        path: '/event/dashboard/stats',
        element: <DashboardStatisticPage />,
      },
      {
        path: '/stats',
        element: <TotalStatisticsPage />,
      },
      {
        path: '/stats/detail',
        element: <DetailStatisticsPage />,
      },
      {
        path: '/loading',
        element: <LoadingPage />,
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
