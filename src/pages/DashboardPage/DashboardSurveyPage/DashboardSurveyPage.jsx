import { useState } from 'react';
import { PageLayout } from '@/Layout';
import * as S from './DashboardSurveyPage.style';
import { Sidebar, Button, TopNavigation, Input } from '@/components';
import { useRecoilValue } from 'recoil';
import { eventDetail, eventIDState } from '@/recoil/atoms/state';
import { axiosInstance } from '@/axios';

export default function DashboardSurveyPage() {
  const eventId = useRecoilValue(eventIDState) || eventDetail.id;
  const [surveyUrl, setSurveyUrl] = useState('');
  const [isModified, setIsModified] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setSurveyUrl(newValue);

    if (newValue !== '') {
      setIsModified(true);
    } else {
      setIsModified(false);
    }
  };

  const handleSaveButtonClick = async () => {
    if (!isModified) return;

    setIsSaving(true);

    try {
      const response = await axiosInstance.put(
        `/api/v1/events/survey/${eventId}`,
        {
          surveyUrl: surveyUrl,
        },
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

  return (
    <PageLayout
      topNavigation={<TopNavigation eventTitle={eventDetail.eventTitle} />}
      sideBar={<Sidebar />}
    >
      <S.DashboardSurveyPage>
        <S.TopContainer>
          <S.Title>설문 조사 링크 발송</S.Title>
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
              <em>설문조사 링크</em>를 등록해 주세요. <br /> 링크가 등록되지
              않으면, 행사 등록 시 입력한 WISE 링크가 대신 발송됩니다.
            </S.ContentDesc>
          </S.Content>
          <Input
            placeholder="https://wise.sookmyung.ac.kr/ko/module/eco/@poll/write/4625/0"
            value={surveyUrl}
            onChange={handleInputChange}
          />
        </S.ContentContainer>
      </S.DashboardSurveyPage>
    </PageLayout>
  );
}
