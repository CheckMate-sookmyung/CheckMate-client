import { useEffect, useState } from 'react';
import * as S from './TopNavigation.style';
import { useLocation } from 'react-router-dom';
import { FaBars, FaCircleUser } from 'react-icons/fa6';
import { Sidebar } from '@/components';
import { BREAKPOINTS } from '@/styles';

export default function TopNavigation({ eventTitle } = {}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const location = useLocation();

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
        <S.ProfileIconWrapper>
          <FaCircleUser />
        </S.ProfileIconWrapper>
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
