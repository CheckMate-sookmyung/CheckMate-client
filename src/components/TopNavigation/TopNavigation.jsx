import { useEffect, useState } from 'react';
import * as S from './TopNavigation.style';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaCircleUser } from 'react-icons/fa6';
import { Sidebar, SlimButton } from '@/components';
import { BREAKPOINTS } from '@/styles';
import { axiosInstance } from '@/axios';

export default function TopNavigation({ eventTitle } = {}) {
  const name = sessionStorage.getItem('name');
  const USER_ID = sessionStorage.getItem('id');
  const nav = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const token = sessionStorage.getItem('accessToken');

    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleDimClick = () => {
    setIsSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleResizeOrScroll = () => {
      if (window.innerWidth > BREAKPOINTS[0] || window.scrollY > 0) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResizeOrScroll);
    window.addEventListener('scroll', handleResizeOrScroll);

    // 초기 사이드바 상태 설정
    handleResizeOrScroll();

    return () => {
      window.removeEventListener('resize', handleResizeOrScroll);
      window.removeEventListener('scroll', handleResizeOrScroll);
    };
  }, []);

  const handleLoginClick = () => {
    window.location.href = `${process.env.REACT_APP_GOOGLE_OAUTH_BASE_URL}/o/oauth2/auth?client_id=${process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_CLIENT_BASE_URL}/loading&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile`;
  };

  const handleLogout = async () => {
    try {
      await axiosInstance.get(
        `/api/v1/logout?memberId=${USER_ID}&authority=MEMBER&member=true`,
      );
      alert('로그아웃이 완료되었습니다.');
    } catch (error) {
      console.log(error);
    } finally {
      nav('/');
    }
  };

  return (
    <S.TopNavigation>
      <S.LogoMenuWrapper>
        <S.Logo to="/">
          <img src="/img/logo-blue.svg" alt="CheckMate Logo" />
        </S.Logo>

        {/* 메뉴 */}
        <S.MenuContainer>
          <S.Menu to="/register" activeClassName="active">
            행사 등록
          </S.Menu>
          <S.Menu to="/event" activeClassName="active">
            행사 목록
          </S.Menu>
          <S.Menu to="/stats" activeClassName="active">
            통계
          </S.Menu>

          {location.pathname.startsWith('/event/dashboard') && (
            <S.PageNameWrapper>
              {eventTitle !== undefined && (
                <S.PageName>{eventTitle}</S.PageName>
              )}
            </S.PageNameWrapper>
          )}
        </S.MenuContainer>
      </S.LogoMenuWrapper>
      <S.ProfileMenuWrapper>
        {isLoggedIn ? (
          <b onClick={() => handleLogout()}>{name}</b>
        ) : (
          <SlimButton label={'로그인'} onClick={handleLoginClick} />
        )}
        <S.MenuIconWrapper>
          <FaBars onClick={toggleSidebar} />
        </S.MenuIconWrapper>
      </S.ProfileMenuWrapper>

      <S.Sidebar isOpen={isSidebarOpen}>
        <Sidebar />
      </S.Sidebar>
      {isSidebarOpen && <S.Dim onClick={handleDimClick} />}
    </S.TopNavigation>
  );
}
