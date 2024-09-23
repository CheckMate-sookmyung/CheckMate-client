import { useEffect, useState } from 'react';
import { PageLayout } from '@/Layout';
import * as S from './DashboardEmailPage.style';
import { Sidebar, Button, TopNavigation, Textarea, Input } from '@/components';
import { useRecoilValue } from 'recoil';
import { eventIDState } from '@/recoil/atoms/state';
import { axiosInstance } from '@/axios';
import { getEventDetail } from '@/apis';
import { useQuery } from '@tanstack/react-query';

export default function DashboardEmailPage() {
  const eventId = useRecoilValue(eventIDState);
  const [isModified, setIsModified] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [emailTitle, setEmailTitle] = useState('');
  const [emailContent, setEmailContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSendEnabled, setIsSendEnabled] = useState(true);

  const {
    data: eventDetail,
    isPending,
    isError,
  } = useQuery({
    queryKey: ['getEventDetail', eventId],
    queryFn: () => getEventDetail(eventId),
  });

  useEffect(() => {
    const getEmailContent = async () => {
      try {
        const response = await axiosInstance.get(`/api/v1/mail/${eventId}`, {
          params: {
            mailType: 'REMIND',
          },
        });
        if (response.status === 200) {
          setEmailContent(response.data.mailContent);
          setEmailTitle(response.data.mailTitle);
          console.log(response);
        }
      } catch (error) {
        console.error('이메일 내용 불러오기 실패:', error);
      } finally {
        setIsLoading(false);
      }
    };

    getEmailContent();
  }, [eventId]);

  const handleTitleChange = (e) => {
    const newEmailTitle = e.target.value;
    setEmailTitle(newEmailTitle);
    setIsModified(newEmailTitle !== '' || emailContent !== '');
  };

  const handleTextareaChange = (e) => {
    const newEmailContent = e.target.value;
    setEmailContent(newEmailContent);
    setIsModified(newEmailContent !== '' || emailTitle !== '');
  };

  const handleSaveButtonClick = async () => {
    if (!isModified) return;

    setIsSaving(true);

    try {
      const response = await axiosInstance.put(
        `/api/v1/events/mail/content/${eventId}`,
        {
          mailTitle: emailTitle,
          mailContent: emailContent,
          isSendEnabled, // 발송 여부 전달
        },
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
            <S.ContentTitleCheckBoxWrapper>
              <S.ContentTitle>발송 여부</S.ContentTitle>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={isSendEnabled}
                  onChange={(e) => setIsSendEnabled(e.target.checked)}
                />
              </label>
            </S.ContentTitleCheckBoxWrapper>
            <S.ContentDesc>
              <em>행사 시작 24시간 전</em>에 참석자들에게 발송 될&nbsp;
              <em>행사 안내 메일 내용</em>을 수정해 주세요.
              <br />
              행사 담당자에게도 참석자들에게 발송된 메일과 <em>동일한 내용</em>
              의 메일이 발송됩니다.
            </S.ContentDesc>
          </S.Content>

          <S.Content>
            <S.ContentTitle>행사 안내 메일 링크</S.ContentTitle>
            <Input
              placeholder="행사 안내 링크를 입력해 주세요."
              // value={emailTitle}
              // onChange={handleTitleChange}
            />
          </S.Content>
          <S.Content>
            <S.ContentTitle>메일 제목</S.ContentTitle>
            <Input
              placeholder="행사 안내 메일 제목을 작성해 주세요."
              value={emailTitle}
              onChange={handleTitleChange}
            />
          </S.Content>

          <S.Content>
            <S.ContentTitle>메일 내용</S.ContentTitle>

            {isLoading ? (
              <p>로딩 중...</p>
            ) : (
              <Textarea
                placeholder="행사 안내 메일 내용을 작성해 주세요."
                value={emailContent}
                onChange={handleTextareaChange}
                height="300px"
              />
            )}
          </S.Content>
        </S.ContentContainer>
      </S.DashboardEmailPage>
    </PageLayout>
  );
}
