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
        <S.PageMenuWrapper>
          <S.PageMenu>체크메이트 해커톤</S.PageMenu>
        </S.PageMenuWrapper>
      </S.LogoMenuWrapper>
      <S.Profile>프로필</S.Profile>
    </S.Wrapper>
  );
}
