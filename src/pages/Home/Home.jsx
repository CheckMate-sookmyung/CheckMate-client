import React, { useState } from 'react';
import * as S from './HomeStyle';
import HomeCarousel from './HomeCarousel/HomeCarousel.jsx';
import { Link } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    navigate('/register');
  };

  const handleEventList = (e) => {
    navigate('/currentEvent');
  };

  return (
    <>
      <S.Container>
        <S.SubContainer>
          <S.Contents>
            <S.MainFont>CheckMate</S.MainFont>
            <S.SubFont>
              쉽고 간편한 행사 관리 시스템을 손안에서 이용하세요.
              <br /> 언제 어디서나 행사를 효율적으로 관리할 수 있습니다.
            </S.SubFont>
            <S.ButtonWrapper>
              <Link to="/register">
                <S.BlueButton>행사 등록하러 가기</S.BlueButton>
              </Link>
              <Link to="/event">
                <S.BlueButton>행사 보러 가기</S.BlueButton>
              </Link>
            </S.ButtonWrapper>
          </S.Contents>
          <S.Contents>{/* <HomeCarousel /> */}</S.Contents>
        </S.SubContainer>
        {/* <S.SubContainer>
          <S.Contents style={{ width: '100%', textAlign: 'center' }}>
            <S.MainFont style={{ textAlign: 'center' }}>
              얼마나 많은 사람이 행사를 즐겼나요?
            </S.MainFont>
            <S.SubContainer
              style={{
                justifyContent: 'space-evenly',
                margin: '0 auto',
              }}
            >
              <S.NumberWrapper>
                <S.SubFont>체크메이트의 행사 수</S.SubFont>
                <S.MainNumber>100개</S.MainNumber>
              </S.NumberWrapper>
              <S.NumberWrapper>
                <S.SubFont>체크메이트 총 행사기간</S.SubFont>
                <S.MainNumber>200일</S.MainNumber>
              </S.NumberWrapper>
              <S.NumberWrapper>
                <S.SubFont>체크메이트의 출석 횟수</S.SubFont>
                <S.MainNumber>300번</S.MainNumber>
              </S.NumberWrapper>
            </S.SubContainer>
          </S.Contents>
        </S.SubContainer> */}
      </S.Container>
    </>
  );
};

export default Home;
