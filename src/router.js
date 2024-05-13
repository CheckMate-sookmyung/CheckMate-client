import { createBrowserRouter } from 'react-router-dom';
import { AttendanceStudentIdPage, AttendanceSignPage } from './pages';
import Register from './pages/registerPage/register';
import CurrentEvent from './pages/EventList/currentEvent';
import EventDetail from './pages/EventDetail/eventDetail';
import Layout from './Layout/Layout';

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
        path: '/eventDetail',
        element: <EventDetail />,
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
