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
import PrivateRoute from './services/privateRoute/PrivateRoute';

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
        element: <PrivateRoute component={RegisterPage} />,
      },
      {
        path: '/register/completed',
        element: <RegisterCompleted />,
      },
      {
        path: '/events',
        element: <PrivateRoute component={EventCardListPage} />,
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
        element: <PrivateRoute component={TotalStatisticsPage} />,
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
