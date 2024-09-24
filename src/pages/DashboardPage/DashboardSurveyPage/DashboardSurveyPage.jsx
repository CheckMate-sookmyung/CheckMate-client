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
  const [mailId, setMailId] = useState(null);
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

  // 설문조사 링크와 mailId 조회
  useEffect(() => {
    const getSurveyUrlAndMailId = async () => {
      try {
        const response = await axiosInstance.get(
          `/api/v1/mail/send/${eventId}`,
          {
            params: {
              mailType: 'SURVEY',
            },
          },
        );

        if (response.status === 200 && response.data) {
          setSurveyUrl(response.data.surveyUrl);
          setMailId(response.data.mailId);
        } else {
          console.error(response);
        }
      } catch (error) {
        console.error('설문 조사 링크를 불러오는 중 오류 발생:', error);
      }
    };

    getSurveyUrlAndMailId();
  }, [eventId]);

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

  // 설문조사 링크 수정
  const handleSaveButtonClick = async () => {
    if (!isModified) return;

    if (!mailId) {
      alert('메일 ID를 불러오지 못했습니다.');
      return;
    }

    setIsSaving(true);

    try {
      const response = await axiosInstance.put(`/api/v1/mail/${mailId}`, {
        mailType: 'SURVEY',
        surveyUrl,
      });

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
