import { createBrowserRouter } from 'react-router-dom';
import { AttendanceStudentIdPage, AttendanceSignPage } from './pages';
import Register from './pages/registerPage/register';
import CurrentEvent from './pages/EventList/currentEvent';
import Layout from './Layout/Layout';
import EventDetailPage from './pages/EventDetail/EventDetailPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/currentevent',
        element: <CurrentEvent />,
      },
      {
        path: '/currentevent/eventdetail',
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
]);

export default router;
