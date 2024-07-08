import React, { useState } from 'react';
import * as S from './HomeStyle';
import HomeCarousel from './HomeCarousel/HomeCarousel.jsx';
import { useNavigate } from 'react-router-dom';

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
            <S.MainFont>
              내 손 안의
              <br />
              간편한 행사
              <br />
              관리 도우미
            </S.MainFont>
            <S.SubFont>
              당신의 손 안에서 행사의 시작부터 끝을 관리해보세요.
              <br />
              체크메이트는 출석, 관리, 통계까지 <br />
              모든 것을 해결할 수 있도록 모든 것을 제공합니다.
            </S.SubFont>
            <S.ButtonWrapper>
              <S.BlueButton onClick={handleRegister}>
                행사 등록하러 가기
              </S.BlueButton>
              <S.BlueButton onClick={handleEventList}>
                행사 보러 가기
              </S.BlueButton>
            </S.ButtonWrapper>
          </S.Contents>
          <S.Contents>{/* <HomeCarousel /> */}</S.Contents>
        </S.SubContainer>
        <S.SubContainer>
          <S.Contents style={{ width: '100%', textAlign: 'center' }}>
            <S.MainFont style={{ textAlign: 'center' }}>
              얼마나 많은 사람이 행사를 즐겼나요?
            </S.MainFont>
            <S.SubContainer
              style={{
                justifyContent: 'space-evenly',
                margin: '5rem auto',
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
        </S.SubContainer>
      </S.Container>
    </>
  );
};

export default Home;
