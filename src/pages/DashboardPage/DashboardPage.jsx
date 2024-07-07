import * as S from './DashboardPage.style';
import { FaRotate, FaUsers } from 'react-icons/fa6';
import React, { useState, useEffect } from 'react';
import PageLayout from '../../Layout/PageLayout';
import { Sidebar } from '../../components/Navigator';

export default function DashboardPage() {
  const [copyMessage, setCopyMessage] = useState('');

  useEffect(() => {
    if (copyMessage) {
      const timer = setTimeout(() => {
        setCopyMessage('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [copyMessage]);

  const handleCopy = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopyMessage('링크가 복사되었습니다!');
      })
      .catch((err) => {
        setCopyMessage('복사에 실패했습니다. 다시 시도해주세요.');
        console.error('복사 실패:', err);
      });
  };

  return (
    <PageLayout sideBar={<Sidebar />}>
      <S.DashboardPage>
        {copyMessage && <S.CopyMessage>{copyMessage}</S.CopyMessage>}{' '}
        <S.TopContainer>
          <S.EventTitle>체크메이트 해커톤</S.EventTitle>
          <S.ButtonContainer>
            <S.StyledLink to="/event/dashboard/info">
              <S.EditBtn>행사 수정</S.EditBtn>
            </S.StyledLink>
            <S.DeleteBtn>행사 삭제</S.DeleteBtn>
          </S.ButtonContainer>
        </S.TopContainer>
        {/* 행사 정보 */}
        <S.ContentContainer>
          <S.OverviewContainer>
            <S.ContentBox>
              <S.ContentTitle>QR 코드</S.ContentTitle>
              <S.QrCode>
                <img
                  src="https://www.google.com/url?sa=i&url=http%3A%2F%2Ft3.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcSh-wrQu254qFaRcoYktJ5QmUhmuUedlbeMaQeaozAVD4lh4ICsGdBNubZ8UlMvWjKC&psig=AOvVaw3Zwwv5QaquDAu22BSpbs0n&ust=1720330468548000&source=images&cd=vfe&opi=89978449&ved=0CAkQjRxqFwoTCMijksXYkYcDFQAAAAAdAAAAABAE"
                  alt=""
                />
              </S.QrCode>
            </S.ContentBox>

            <S.OverviewWrapper>
              <S.ContentBox>
                <S.ContentTitle>행사 개요</S.ContentTitle>
                <S.ContentInfoWrapper>
                  <S.EventTypeWrapper>
                    <S.EventType>오프라인 행사</S.EventType>
                    <S.EventVenue>캠퍼스 내부</S.EventVenue>
                  </S.EventTypeWrapper>
                  <S.EventDateWrapper>
                    <S.EventDate>7월 11일 오전 10:00</S.EventDate>
                  </S.EventDateWrapper>
                </S.ContentInfoWrapper>
              </S.ContentBox>
              <S.ContentBox>
                <S.ContentTitle>담당자</S.ContentTitle>
                <S.ContentInfoWrapper>
                  <S.ContentText>010-1234-5678</S.ContentText>
                  <S.ContentText>checkmate@sookmyung.ac.kr</S.ContentText>
                </S.ContentInfoWrapper>
              </S.ContentBox>
              <S.ContentBox>
                <S.ContentTitle>설문조사 링크</S.ContentTitle>
                <S.ContentTextWrapper>
                  <S.ContentText>naver.com</S.ContentText>
                  <S.CopyBtn onClick={() => handleCopy('naver.com')}>
                    복사하기
                  </S.CopyBtn>
                </S.ContentTextWrapper>
              </S.ContentBox>
            </S.OverviewWrapper>
          </S.OverviewContainer>

          {/* 진행 현황 */}
          <S.ProgressContainer>
            <S.ProgressBox>
              <S.ProgressIcon>
                <FaUsers />
              </S.ProgressIcon>
              <S.ProgressContentWrapper>
                <S.ProgressTitle>전체 참석률</S.ProgressTitle>
                <S.ProgressText>0 / 30</S.ProgressText>
              </S.ProgressContentWrapper>
            </S.ProgressBox>

            <S.ProgressBox>
              <S.ProgressIcon>
                <FaRotate />
              </S.ProgressIcon>
              <S.ProgressContentWrapper>
                <S.ProgressTitle>진행 회차</S.ProgressTitle>
                <S.ProgressText>0 / 3</S.ProgressText>
              </S.ProgressContentWrapper>
            </S.ProgressBox>
          </S.ProgressContainer>
        </S.ContentContainer>
      </S.DashboardPage>{' '}
    </PageLayout>
  );
}
