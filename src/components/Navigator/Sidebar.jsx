import React from 'react';
import * as S from './Sidebar.style';
import {
  FaTableList,
  FaCircleInfo,
  FaImages,
  FaEnvelope,
  FaUsers,
  FaChartPie,
} from 'react-icons/fa6';
import { useLocation } from 'react-router-dom';

const menuItems = [
  { to: '/event/dashboard', icon: <FaTableList />, text: '대시보드' },
  {
    to: '/event/dashboard/info',
    icon: <FaCircleInfo />,
    text: '행사 기본 정보',
  },
  {
    to: '#',
    icon: <FaImages />,
    text: '행사 상세와 사진X',
  },
  {
    to: '/event/dashboard/email',
    icon: <FaEnvelope />,
    text: '이메일 예약 발송',
  },
  { to: '#', icon: <FaUsers />, text: '참석자 관리X' },
  {
    to: '/event/dashboard/attendee',
    icon: <FaChartPie />,
    text: '통계 (오픈예정)',
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

export default function Sidebar() {
  const location = useLocation();

  return (
    <S.Sidebar>
      <S.MenuWrapper>
        {menuItems.slice(0, 3).map((item) => (
          <MenuItem
            key={item.to}
            {...item}
            isActive={location.pathname === item.to}
          />
        ))}
      </S.MenuWrapper>

      <S.MenuWrapper>
        {menuItems.slice(3, 5).map((item) => (
          <MenuItem
            key={item.to}
            {...item}
            isActive={location.pathname === item.to}
          />
        ))}
      </S.MenuWrapper>

      <S.MenuWrapper>
        {menuItems.slice(5).map((item) => (
          <MenuItem
            key={item.to}
            {...item}
            isActive={location.pathname === item.to}
          />
        ))}
      </S.MenuWrapper>

      <S.ButtonWrapper>
        <S.AttendanceBtn>
          <S.StyledLink to="/attendance/student-id">
            출석화면으로 이동
          </S.StyledLink>
        </S.AttendanceBtn>
      </S.ButtonWrapper>
    </S.Sidebar>
  );
}
