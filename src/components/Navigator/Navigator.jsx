import { useEffect, useState } from 'react';
import * as S from './Navigator.style';
import { useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { eventIDState } from '../../recoil/atoms/state';
import { USER_ID } from '../../constants';
import { axiosInstance } from '../../axios';
import { FaBars, FaCircleUser } from 'react-icons/fa6';
import Sidebar from './Sidebar';
import { BREAKPOINTS } from '../../styles';

export default function Navigator() {
  const location = useLocation();
  const [parsedEvent, setParsedEvent] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const EVENT_ID = useRecoilValue(eventIDState);

  const handleDimClick = () => {
    setIsSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const fetchEventData = async () => {
      if (!EVENT_ID) return;
      try {
        const response = await axiosInstance.get(
          `/api/v1/events/${USER_ID}/${EVENT_ID}`,
        );
        const eventData = response.data;
        if (eventData) {
          setParsedEvent({ title: eventData.eventTitle });
        }
      } catch (error) {
        console.error('Fetch event data failed:', error);
      }
    };

    if (location.pathname.startsWith('/event/dashboard')) {
      fetchEventData();
    }
  }, [location.pathname, EVENT_ID]);

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
    <S.Navigator>
      <S.LogoMenuWrapper>
        <S.Logo to="/">
          <img src="img/CheckMateBlue.svg" alt="CheckMate Logo" />
        </S.Logo>

        <S.MenuContainer>
          <S.Menu to="/register" activeClassName="active">
            행사 등록
          </S.Menu>
          <S.Menu to="/event" activeClassName="active">
            행사 목록
          </S.Menu>
          {location.pathname.startsWith('/event/dashboard') && (
            <S.PageNameWrapper>
              {parsedEvent && <S.PageName>{parsedEvent.title}</S.PageName>}
            </S.PageNameWrapper>
          )}
          <S.Menu to="/stats" activeClassName="active">
            통계
          </S.Menu>
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
    </S.Navigator>
  );
}
