import { useState } from 'react';
import { PageLayout } from '@/Layout';
import * as S from './DashboardSurveyPage.style';
import { Sidebar, Button, TopNavigation, Input } from '@/components';
import { useRecoilValue } from 'recoil';
import { eventIDState } from '@/recoil/atoms/state';
import { axiosInstance } from '@/axios';
import { getEventDetail, getMail, postMail, putMail } from '@/apis';
import { useQuery, useMutation } from '@tanstack/react-query';

export default function DashboardSurveyPage() {
  const eventId = useRecoilValue(eventIDState);
  const [surveyUrl, setSurveyUrl] = useState('');

  const {
    data: eventDetail,
    isPending,
    isError,
  } = useQuery({
    queryKey: ['getEventDetail', eventId],
    queryFn: () => getEventDetail(eventId),
  });

  const {
    data: mail,
    isPending: isMailPending,
    isError: isMailError,
  } = useQuery({
    queryKey: ['getMail', eventId],
    retry: 0,
    queryFn: () =>
      getMail(eventId, {
        mailType: 'SURVEY',
      }),
  });

  const { mutate: postMailMutate, isLoading: isPostMailLoading } = useMutation({
    mutationKey: ['postMail', eventId],
    mutationFn: (body) => postMail(eventId, body),
  });

  const { mutate: putMailMutate, isLoading: isPutMailLoading } = useMutation({
    mutationKey: ['putMail', mail],
    mutationFn: (body) => putMail(mail.mailId, body),
  });

  // 저장하기 버튼
  const handleInputChange = (e) => {
    setSurveyUrl(e.target.value);
  };

  // 설문조사 링크 수정
  const handleSaveButtonClick = async () => {
    if (isMailError) {
      postMailMutate(
        {
          mailType: 'SURVEY',
          attachUrl: surveyUrl,
        },
        {
          onSuccess: () => {
            alert('설문 조사 링크가 성공적으로 저장되었습니다!');
          },
          onError: () => {
            alert('설문 조사 링크 저장 중 오류가 발생했습니다.');
          },
        },
      );

      return;
    }

    putMailMutate(
      {
        mailType: 'SURVEY',
        attachUrl: surveyUrl,
      },
      {
        onSuccess: () => {
          alert('설문 조사 링크가 성공적으로 수정되었습니다!');
        },
        onError: () => {
          alert('설문 조사 링크 수정 중 오류가 발생했습니다.');
        },
      },
    );
  };

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return null;
  }

  return (
    <PageLayout
      topNavigation={<TopNavigation eventTitle={eventDetail.eventTitle} />}
      sideBar={<Sidebar />}
    >
      <S.DashboardSurveyPage>
        <S.TopContainer>
          <S.Title>WISE 설문 조사 링크 발송</S.Title>
          <S.ButtonContainer>
            <Button
              label={
                isPostMailLoading || isPutMailLoading
                  ? '저장 중...'
                  : '저장하기'
              }
              disabled={isPostMailLoading || isPutMailLoading}
              style={{
                backgroundColor:
                  isPostMailLoading || isPutMailLoading ? '#ccc' : '#007bff',
                cursor:
                  isPostMailLoading || isPutMailLoading
                    ? 'not-allowed'
                    : 'pointer',
              }}
              onClick={handleSaveButtonClick}
            />
          </S.ButtonContainer>
        </S.TopContainer>

        <S.ContentContainer>
          <S.Content>
            <S.ContentTitle>안내</S.ContentTitle>
            <S.ContentDesc>
              <em>행사 종료 1시간 후</em> 참석자들에게 발송 될&nbsp;
              <em>설문조사 링크</em> 발송 문구를 작성해주세요.
            </S.ContentDesc>
          </S.Content>
          <S.Content>
            <S.ContentTitle>WISE 설문 조사 링크 등록</S.ContentTitle>
            <Input
              placeholder="https://wise.sookmyung.ac.kr/ko/module/eco/@poll/write/4625/0"
              value={surveyUrl}
              onChange={handleInputChange}
            />
          </S.Content>
        </S.ContentContainer>
      </S.DashboardSurveyPage>
    </PageLayout>
  );
}
