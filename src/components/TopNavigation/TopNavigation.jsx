import { useEffect, useState } from 'react';
import * as S from './TopNavigation.style';
import { useLocation } from 'react-router-dom';
import { FaBars, FaCircleUser } from 'react-icons/fa6';
import { Sidebar, SlimButton } from '@/components';
import { BREAKPOINTS } from '@/styles';

export default function TopNavigation({ eventTitle } = {}) {
  const name = localStorage.getItem('name');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');

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
    window.location.href = `https://accounts.google.com/o/oauth2/auth?client_id=967351541140-dha99rue5c6dtu5kgugegrp31jj89tcg.apps.googleusercontent.com&redirect_uri=http://localhost:3000/loading&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile`;
  };

  return (
    <S.TopNavigation>
      <S.LogoMenuWrapper>
        <S.Logo to="/">
          <img src="/img/CheckMateBlue.svg" alt="CheckMate Logo" />
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
          {/* 세부 통계 페이지는 추후 통째로 삭제 */}
          <S.Menu to="/stats/detail" activeClassName="active">
            세부 통계(임시)
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
          <b>{name}</b>
        ) : (
          <SlimButton label={'로그인 / 회원가입'} onClick={handleLoginClick} />
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
