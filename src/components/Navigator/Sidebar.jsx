import React from 'react';
import {
  FaTableList,
  FaCircleInfo,
  FaImages,
  FaEnvelope,
  FaUsers,
} from 'react-icons/fa6';

import * as S from './Sidebar.style';

export default function Sidebar() {
  return (
    <S.Sidebar>
      <S.MenuItem>
        <S.Icon>
          <FaTableList />
        </S.Icon>
        <S.Text>대시보드</S.Text>
      </S.MenuItem>
      <S.MenuItem>
        <S.Icon>
          <FaCircleInfo />
        </S.Icon>
        <S.Text>행사 기본 정보</S.Text>
      </S.MenuItem>
      <S.MenuItem>
        <S.Icon>
          <FaImages />
        </S.Icon>
        <S.Text>행사 상세와 사진</S.Text>
      </S.MenuItem>

      <S.MenuItem>
        <S.Icon>
          <FaEnvelope />
        </S.Icon>
        <S.Text>이메일 예약 발송</S.Text>
      </S.MenuItem>
      <S.MenuItem className="active">
        <S.Icon>
          <FaUsers />
        </S.Icon>
        <S.Text>참석자 관리</S.Text>
      </S.MenuItem>
    </S.Sidebar>
  );
}
