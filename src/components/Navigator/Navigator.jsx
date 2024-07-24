import React, { useEffect, useState } from 'react';
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
    console.log('USER_ID:', USER_ID);
    console.log('EVENT_ID:', EVENT_ID);
    const fetchEventData = async () => {
      if (!EVENT_ID) return;
      try {
        const response = await axiosInstance.get(
          `/api/v1/events/${USER_ID}/${EVENT_ID}`,
        );
        const eventData = response.data;
        if (eventData) {
          const parsedEvent = {
            title: eventData.eventTitle,
          };
          setParsedEvent(parsedEvent);
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
    const handleResize = () => {
      if (window.innerWidth > BREAKPOINTS[0]) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <S.Navigator>
        <S.LogoMenuWrapper>
          <S.Logo to="/">체크메이트</S.Logo>
          <S.MenuContainer>
            <S.Menu>
              <S.StyledNavLink to="/register" activeClassName="active">
                행사 등록
              </S.StyledNavLink>
            </S.Menu>
            <S.Menu>
              <S.StyledNavLink to="/event" activeClassName="active">
                행사 목록
              </S.StyledNavLink>
            </S.Menu>
          </S.MenuContainer>
          {location.pathname.startsWith('/event/dashboard') && (
            <S.PageNameWrapper>
              {parsedEvent && <S.PageName>{parsedEvent.title}</S.PageName>}
            </S.PageNameWrapper>
          )}
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
    </>
  );
}
