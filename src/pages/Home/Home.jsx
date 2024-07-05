import React, { useState } from 'react';
import * as S from './HomeStyle';
import HomeCarousel from './HomeCarousel/HomeCarousel.jsx';

const Home = () => {
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
              또 블라 블라... 온보딩을 대신한다는 느낌이 홈에 있으면 좋을 듯
            </S.SubFont>
            <S.ButtonWrapper>
              <S.BlueButton>행사 등록하러 가기</S.BlueButton>
              <S.BlueButton>행사 보러 가기</S.BlueButton>
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
              <div>
                <S.SubFont>체크메이트의 행사 수</S.SubFont>
                <S.MainNumber>100개</S.MainNumber>
              </div>
              <div>
                <S.SubFont>체크메이트 총 행사기간</S.SubFont>
                <S.MainNumber>200일</S.MainNumber>
              </div>
              <div>
                <S.SubFont>체크메이트의 출석 횟수</S.SubFont>
                <S.MainNumber>300번</S.MainNumber>
              </div>
            </S.SubContainer>
          </S.Contents>
        </S.SubContainer>
      </S.Container>
    </>
  );
};

export default Home;
