import React from 'react';
import * as S from './Navigator.style';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Navigator() {
  const navigate = useNavigate();
  const location = useLocation();

  const clickedLogo = () => {
    navigate('/');
  };

  return (
    <S.Background>
      <S.NavWrapper>
        <S.MainMenu onClick={clickedLogo}>체크메이트</S.MainMenu>
        <S.NavCenter>
          <S.MenuContainer>
            <S.Bluedot isVisible={location.pathname.startsWith('/register')} />
            <S.StyledNavLink to="/register" activeClassName="active">
              행사 등록
            </S.StyledNavLink>
          </S.MenuContainer>
          <S.MenuContainer>
            <S.Bluedot
              isVisible={location.pathname.startsWith('/currentevent')}
            />
            <S.StyledNavLink to="/currentevent" activeClassName="active">
              진행중인 행사
            </S.StyledNavLink>
          </S.MenuContainer>
          <S.MenuContainer>
            <S.Bluedot
              isVisible={location.pathname.startsWith('/finishevent')}
            />
            <S.StyledNavLink to="/finishevent" activeClassName="active">
              지난 행사
            </S.StyledNavLink>
          </S.MenuContainer>
        </S.NavCenter>
        <S.LogButton>로그아웃</S.LogButton>
      </S.NavWrapper>
    </S.Background>
  );
}
