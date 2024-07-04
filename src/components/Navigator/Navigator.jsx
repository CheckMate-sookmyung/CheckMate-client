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
      <S.NavWrapper>
        <S.LogoMenuWrapper>
          <S.Logo onClick={clickedLogo}>체크메이트</S.Logo>
          <S.MenuContainer>
            <S.Menu>체크메이트 해커톤</S.Menu>
            <S.Menu>|</S.Menu>
            <S.Menu>
              <S.StyledNavLink to="/register" activeClassName="active">
                행사 등록
              </S.StyledNavLink>
            </S.Menu>
            <S.Menu>
              <S.StyledNavLink to="/currentevent" activeClassName="active">
                행사 목록
              </S.StyledNavLink>
            </S.Menu>
          </S.MenuContainer>
        </S.LogoMenuWrapper>
        <S.Profile>프로필 이미지</S.Profile>
      </S.NavWrapper>
    </S.Wrapper>
  );
}
