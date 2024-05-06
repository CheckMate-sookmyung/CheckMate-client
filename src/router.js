import { createBrowserRouter } from 'react-router-dom';
import { AttendanceStudentIdPage, AttendanceSignPage } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Home</div>,
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
