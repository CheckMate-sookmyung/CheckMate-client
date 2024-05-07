import { createBrowserRouter } from 'react-router-dom';
import { AttendanceStudentIdPage, AttendanceSignPage } from './pages';
import Register from './pages/registerPage/register';
import CurrentEvent from './pages/EventList/currentEvent';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Home</div>,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/currentevent',
    element: <CurrentEvent />,
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
