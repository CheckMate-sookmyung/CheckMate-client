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
import { Link } from 'react-router-dom';

const menuItems = [
  { to: '/event/dashboard', icon: <FaTableList />, text: '대시보드' },
  {
    to: '/event/dashboard/info',
    icon: <FaCircleInfo />,
    text: '행사 기본 정보',
  },
  {
    to: '/event/dashboard/info',
    icon: <FaImages />,
    text: '행사 상세와 사진',
  },
  {
    to: '/event/dashboard/email',
    icon: <FaEnvelope />,
    text: '이메일 예약 발송',
  },
  { to: '/event/dashboard/attendee', icon: <FaUsers />, text: '참석자 관리' },
  { to: '/event/dashboard/attendee', icon: <FaChartPie />, text: '통계' },
];

function MenuItem({ to, icon, text, active }) {
  return (
    <S.MenuItem className={active ? 'active' : ''}>
      <S.Icon>{icon}</S.Icon>
      <S.Text>
        <Link to={to}>{text}</Link>
      </S.Text>
    </S.MenuItem>
  );
}

export default function Sidebar() {
  return (
    <S.Sidebar>
      <S.MenuWrapper>
        {menuItems.slice(0, 3).map((item) => (
          <MenuItem key={item.to} {...item} />
        ))}
      </S.MenuWrapper>

      <S.MenuWrapper>
        {menuItems.slice(3, 5).map((item) => (
          <MenuItem key={item.to} {...item} />
        ))}
      </S.MenuWrapper>

      <S.MenuWrapper>
        {menuItems.slice(5).map((item) => (
          <MenuItem key={item.to} {...item} />
        ))}
      </S.MenuWrapper>
    </S.Sidebar>
  );
}
