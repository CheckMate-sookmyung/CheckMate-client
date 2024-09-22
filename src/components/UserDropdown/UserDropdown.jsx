// 유저 정보 클릭 시 나오는 드랍다운으로 재사용 X

import { axiosInstance } from '@/axios';
import * as S from './UserDropdown.style';
import { useNavigate } from 'react-router-dom';

const UserDropdown = () => {
  const nav = useNavigate();

  const handleLogout = async () => {
    try {
      await axiosInstance.get(`/api/v1/logout`);
      sessionStorage.clear();
      alert('로그아웃이 완료되었습니다.');
    } catch (error) {
      console.log(error);
    } finally {
      nav('/');
      window.location.reload();
    }
  };

  return (
    <S.Dropdown>
      <S.DropdownContent>
        <S.DropdownItem onClick={() => handleLogout()}>로그아웃</S.DropdownItem>
        <S.DropdownItem>회원 탈퇴</S.DropdownItem>
      </S.DropdownContent>
    </S.Dropdown>
  );
};

export default UserDropdown;
