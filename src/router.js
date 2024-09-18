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
  TotalStatisticsPage,
  DashboardStatisticPage,
  LoadingPage,
  RegisterCompleted,
} from './pages';
import Layout from './Layout/Layout';
import { DashboardEmailPage } from './pages/DashboardPage';
import DashboardSurveyPage from './pages/DashboardPage/DashboardSurveyPage/DashboardSurveyPage';

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
        path: '/events',
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
        path: '/event/dashboard/email',
        element: <DashboardEmailPage />,
      },
      {
        path: '/event/dashboard/survey',
        element: <DashboardSurveyPage />,
      },
      {
        path: '/event/dashboard/attendee',
        element: <DashboardAttendeePage />,
      },
      {
        path: '/event/dashboard/statistic',
        element: <DashboardStatisticPage />,
      },
      {
        path: '/statistic',
        element: <TotalStatisticsPage />,
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
