import React, { useEffect, useState } from 'react';
import * as S from './Navigator.style';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { eventIDState } from '../../recoil/atoms/state';
import { USER_ID } from '../../constants';
import { axiosInstance } from '../../axios';

export default function Navigator() {
  const navigate = useNavigate();
  const location = useLocation();
  const [parsedEvent, setParsedEvent] = useState(null);
  const EVENT_ID = useRecoilValue(eventIDState);

  const clickedLogo = () => {
    navigate('/');
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

  return (
    <S.Wrapper>
      <S.LogoMenuWrapper>
        <S.Logo onClick={clickedLogo}>체크메이트</S.Logo>
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
          <S.PageMenuWrapper>
            {parsedEvent && <S.PageMenu>{parsedEvent.title}</S.PageMenu>}
          </S.PageMenuWrapper>
        )}
      </S.LogoMenuWrapper>
      <S.Profile>프로필</S.Profile>
    </S.Wrapper>
  );
}
