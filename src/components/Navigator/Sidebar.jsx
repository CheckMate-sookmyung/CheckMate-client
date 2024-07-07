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

export default function Sidebar() {
  return (
    <S.Sidebar>
      <S.MenuWrapper>
        <S.MenuItem>
          <S.Icon>
            <FaTableList />
          </S.Icon>
          <S.Text>
            <Link to="/event/dashboard">대시보드</Link>
          </S.Text>
        </S.MenuItem>
        <S.MenuItem>
          <S.Icon>
            <FaCircleInfo />
          </S.Icon>
          <S.Text>
            <Link to="/event/dashboard/info"> 행사 기본 정보</Link>
          </S.Text>
        </S.MenuItem>
        <S.MenuItem>
          <S.Icon>
            <FaImages />
          </S.Icon>
          <S.Text>
            <Link to="/event/dashboard/info">행사 상세와 사진</Link>
          </S.Text>
        </S.MenuItem>
      </S.MenuWrapper>
      <S.MenuWrapper>
        <S.MenuItem>
          <S.Icon>
            <FaEnvelope />
          </S.Icon>
          <S.Text>
            <Link to="/event/dashboard/email"> 이메일 예약 발송</Link>
          </S.Text>
        </S.MenuItem>
        <S.MenuItem className="active">
          <S.Icon>
            <FaUsers />
          </S.Icon>
          <S.Text>
            <Link to="/event/dashboard/attendee">참석자 관리</Link>
          </S.Text>
        </S.MenuItem>
      </S.MenuWrapper>

      <S.MenuItem>
        <S.Icon>
          <FaChartPie />
        </S.Icon>
        <S.Text>
          <Link to="/event/dashboard/attendee">통계</Link>
        </S.Text>
      </S.MenuItem>
    </S.Sidebar>
  );
}
