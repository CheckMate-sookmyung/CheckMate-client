import { useState, useEffect } from 'react';
import { PageLayout } from '@/Layout';
import * as S from './DashboardEmailPage.style';
import { Sidebar, Button, TopNavigation, Textarea } from '@/components';
import { useRecoilValue } from 'recoil';
import { eventDetail, eventIDState } from '@/recoil/atoms/state';
import { axiosInstance } from '@/axios';

export default function DashboardEmailPage() {
  const eventId = useRecoilValue(eventIDState) || eventDetail.id;
  const [surveyUrl, setSurveyUrl] = useState('');
  const [isModified, setIsModified] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [emailContent, setEmailContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEmailContent = async () => {
      try {
        const response = await axiosInstance.get(
          `/api/v1/events/mail/content/${eventId}`,
        );
        if (response.status === 200) {
          setEmailContent(response.data.content);
        }
      } catch (error) {
        console.error('이메일 내용 불러오기 실패:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEmailContent();
  }, [eventId]);

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setSurveyUrl(newValue);
    if (newValue !== '') {
      setIsModified(true);
    } else {
      setIsModified(false);
    }
  };

  // 저장하기 버튼
  const handleSaveButtonClick = async () => {
    if (!isModified) return;

    setIsSaving(true);

    try {
      const response = await axiosInstance.put(
        `/api/v1/events/mail/content/{mailId}`,
      );

      if (response.status === 200) {
        alert('이메일 내용이 성공적으로 저장되었습니다!');
        setIsModified(false);
      } else {
        alert('이메일 내용 저장에 실패했습니다.');
      }
    } catch (error) {
      console.error('이메일 내용 저장 중 오류 발생:', error);
      alert('이메일 내용 저장 중 오류가 발생했습니다.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <PageLayout
      topNavigation={<TopNavigation eventTitle={eventDetail.eventTitle} />}
      sideBar={<Sidebar />}
    >
      <S.DashboardEmailPage>
        <S.TopContainer>
          <S.Title>리마인드 메일 발송</S.Title>
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
            <S.ContentTitle>리마인드 메일 내용 수정</S.ContentTitle>
            <S.ContentDesc>
              <em>행사 시작 24시간 전</em>에 참석자들에게 발송 될&nbsp;
              <em>행사 안내 메일 내용</em>을 수정해 주세요.
            </S.ContentDesc>
          </S.Content>

          {isLoading ? (
            <p>로딩 중...</p>
          ) : (
            <Textarea
              placeholder="행사 안내 메일 내용을 작성해 주세요."
              value={emailContent}
              onChange={(e) => setEmailContent(e.target.value)}
              height="300px"
            />
          )}
        </S.ContentContainer>
      </S.DashboardEmailPage>
    </PageLayout>
  );
}
