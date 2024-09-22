import { useEffect, useState } from 'react';
import { PageLayout } from '@/Layout';
import * as S from './DashboardSurveyPage.style';
import { Sidebar, Button, TopNavigation, Input } from '@/components';
import { useRecoilValue } from 'recoil';
import { eventIDState } from '@/recoil/atoms/state';
import { axiosInstance } from '@/axios';
import { getEventDetail } from '@/apis';
import { useQuery } from '@tanstack/react-query';

export default function DashboardSurveyPage() {
  const eventId = useRecoilValue(eventIDState);
  const [surveyUrl, setSurveyUrl] = useState('');
  const [isModified, setIsModified] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const {
    data: eventDetail,
    isPending,
    isError,
  } = useQuery({
    queryKey: ['getEventDetail', eventId],
    queryFn: () => getEventDetail(eventId),
  });

  // 설문조사 링크 가져오기
  useEffect(() => {
    const getSurveyUrl = async () => {
      try {
        const response = await axiosInstance.get(
          `/api/v1/events/survey/${eventId}`,
        );

        if (response.status === 200 && response.data) {
          setSurveyUrl(response.data);
        } else {
          console.error(response);
        }
      } catch (error) {
        console.error('설문 조사 링크를 불러오는 중 오류 발생:', error);
      }
    };

    getSurveyUrl();
  }, [eventId]);

  // 설문조사 링크 수정
  const handleSaveButtonClick = async () => {
    if (!isModified) return;

    setIsSaving(true);

    try {
      const response = await axiosInstance.put(
        `/api/v1/events/survey/${eventId}?surveyUrl=${surveyUrl}`,
      );

      if (response.status === 200) {
        alert('설문 조사 링크가 성공적으로 저장되었습니다!');
        setIsModified(false);
      } else {
        alert('설문 조사 링크 저장에 실패했습니다.');
      }
    } catch (error) {
      console.error('설문 조사 링크 저장 중 오류 발생:', error);
      alert('설문 조사 링크 저장 중 오류가 발생했습니다.');
    } finally {
      setIsSaving(false);
    }
  };

  // 저장하기 버튼
  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setSurveyUrl(newValue);

    if (newValue !== '') {
      setIsModified(true);
    } else {
      setIsModified(false);
    }
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
              label={isSaving ? '저장 중...' : '저장하기'}
              onClick={handleSaveButtonClick}
              disabled={!isModified || isSaving}
              style={{
                backgroundColor: isModified ? '#007bff' : '#ccc',
                cursor: isModified ? 'pointer' : 'not-allowed',
              }}
            />
          </S.ButtonContainer>
        </S.TopContainer>

        <S.ContentContainer>
          <S.Content>
            <S.ContentTitle>WISE 설문 조사 링크 등록</S.ContentTitle>
            <S.ContentDesc>
              <em>행사 종료 1시간 후</em> 참석자들에게 발송 될&nbsp;
              <em>설문조사 링크</em>를 등록해 주세요.
            </S.ContentDesc>
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
