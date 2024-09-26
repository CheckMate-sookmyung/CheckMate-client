import { useEffect, useState } from 'react';
import { PageLayout } from '@/Layout';
import * as S from './DashboardEmailPage.style';
import { Sidebar, Button, TopNavigation, Textarea, Input } from '@/components';
import { useRecoilValue } from 'recoil';
import { eventIDState } from '@/recoil/atoms/state';
import { axiosInstance } from '@/axios';
import { getEventDetail, getMail, postMail, putMail } from '@/apis';
import { useQuery, useMutation } from '@tanstack/react-query';

export default function DashboardEmailPage() {
  const eventId = useRecoilValue(eventIDState);
  const [isModified, setIsModified] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [emailTitle, setEmailTitle] = useState('');
  const [emailContent, setEmailContent] = useState('');
  const [attachUrl, setAttachUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  // const [isSendEnabled, setIsSendEnabled] = useState(true);

  // 이벤트 상세 정보 가져오기
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
        mailType: 'REMIND',
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

  useEffect(() => {
    if (mail === undefined) {
      return;
    }

    const { mailTitle, mailContent, attachUrl } = mail;

    setEmailContent(mailContent);
    setEmailTitle(mailTitle);
    setAttachUrl(attachUrl);
  }, [mail]);

  // 리마인드 메일 내용 조회
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
          setAttachUrl(response.data.attachUrl);
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

  // 필드 변화 감지 및 isModified 상태 업데이트
  useEffect(() => {
    const initialEmailContent = eventDetail?.mailContent || '';
    const initialEmailTitle = eventDetail?.mailTitle || '';
    const initialAttachUrl = eventDetail?.attachUrl || '';

    const isContentModified =
      // isSendEnabled !== eventDetail?.isSendEnabled ||
      emailTitle !== initialEmailTitle ||
      emailContent !== initialEmailContent ||
      attachUrl !== initialAttachUrl;

    setIsModified(isContentModified);
  }, [emailTitle, emailContent, attachUrl, eventDetail]);

  const handleTitleChange = (e) => {
    setEmailTitle(e.target.value);
  };

  const handleTextareaChange = (e) => {
    setEmailContent(e.target.value);
  };

  const handleAttachUrlChange = (e) => {
    setAttachUrl(e.target.value);
  };

  const handleSaveButtonClick = async () => {
    if (isMailError) {
      postMailMutate(
        {
          mailType: 'REMIND',
          attachUrl,
        },
        {
          onSuccess: () => {
            alert('이메일 내용이 성공적으로 저장되었습니다!');
          },
          onError: () => {
            alert('이메일 내용 저장 중 오류가 발생했습니다.');
          },
        },
      );

      return;
    }

    putMailMutate(
      {
        mailType: 'REMIND',
        mailTitle: emailTitle,
        mailContent: emailContent,
        attachUrl,
      },
      {
        onSuccess: () => {
          alert('이메일 내용이 성공적으로 수정되었습니다!');
        },
        onError: () => {
          alert('이메일 내용 수정 중 오류가 발생했습니다.');
        },
      },
    );
  };

  if (isPending || isMailPending) {
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
          <S.Title>행사 사전 안내 메일 발송</S.Title>
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
            <S.ContentTitleCheckBoxWrapper>
              <S.ContentTitle>발송 여부</S.ContentTitle>
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
            <S.ContentTitle>행사 안내 링크</S.ContentTitle>
            <Input
              placeholder="행사 안내 링크를 입력해 주세요."
              value={attachUrl}
              onChange={handleAttachUrlChange}
            />
          </S.Content>
          {!isMailError && (
            <>
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
            </>
          )}
        </S.ContentContainer>
      </S.DashboardEmailPage>
    </PageLayout>
  );
}
