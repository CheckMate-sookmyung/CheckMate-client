import * as S from './Sidebar.style';
import {
  FaTableList,
  FaCircleInfo,
  FaUsers,
  FaChartPie,
  FaEnvelopeCircleCheck,
  FaClipboardList,
} from 'react-icons/fa6';
import { useLocation } from 'react-router-dom';

// 개별 메뉴
const menuItems = [
  {
    to: '/events/dashboard',
    icon: <FaTableList />,
    text: '대시보드',
  },
  {
    to: '/events/dashboard/info',
    icon: <FaCircleInfo />,
    text: '행사 기본 정보',
  },
  {
    to: '/events/dashboard/email',
    icon: <FaEnvelopeCircleCheck />,
    text: '행사 안내 메일',
  },
  {
    to: '/events/dashboard/survey',
    icon: <FaClipboardList />,
    text: '설문조사 안내 메일',
  },
  {
    to: '/events/dashboard/attendee',
    icon: <FaUsers />,
    text: '참석자 관리',
  },
  {
    to: '/events/dashboard/statistic',
    icon: <FaChartPie />,
    text: '통계',
  },
];

function MenuItem({ to, icon, text, isActive }) {
  return (
    <S.StyledLink to={to}>
      <S.MenuItem className={isActive ? 'active' : ''}>
        <S.Icon>{icon}</S.Icon>
        <S.Text>{text}</S.Text>
      </S.MenuItem>
    </S.StyledLink>
  );
}

// 사이드바 전체
export default function Sidebar() {
  const location = useLocation();

  return (
    <S.Sidebar>
      <S.MenuWrapper>
        {menuItems.slice(0, 2).map((item) => (
          <MenuItem
            key={item.to}
            {...item}
            isActive={location.pathname === item.to}
          />
        ))}
      </S.MenuWrapper>

      <S.MenuWrapper>
        {menuItems.slice(2, 4).map((item) => (
          <MenuItem
            key={item.to}
            {...item}
            isActive={location.pathname === item.to}
          />
        ))}
      </S.MenuWrapper>

      <S.MenuWrapper>
        {menuItems.slice(4).map((item) => (
          <MenuItem
            key={item.to}
            {...item}
            isActive={location.pathname === item.to}
          />
        ))}
      </S.MenuWrapper>

      <S.ButtonWrapper>
        <S.AttendanceBtn>
          {/* <S.AttendanceBtn disabled={!isAttendanceButtonActive}> */}
          <S.StyledLink to="/attendance/student-id">
            출석화면으로 이동
          </S.StyledLink>
        </S.AttendanceBtn>
      </S.ButtonWrapper>
    </S.Sidebar>
  );
}
