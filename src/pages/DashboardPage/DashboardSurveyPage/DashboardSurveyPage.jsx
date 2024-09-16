import { useEffect, useState } from 'react';
import { PageLayout } from '@/Layout';
import * as S from './DashboardSurveyPage.style';
import { Sidebar, Button, TopNavigation, TabMenu } from '@/components';
import { USER_ID } from '@/constants';
import { useRecoilValue } from 'recoil';
import { eventIDState } from '@/recoil/atoms/state';
import Switch from 'react-switch';
import { useQuery } from '@tanstack/react-query';
import { getEventDetail } from '@/apis';

const DEFAULT_MESSAGE_CONTENT = (
  title,
  date,
  time,
  detail,
  imageUrl,
) => `안녕하세요, [기관명]입니다.

${title}을 진행합니다.

- 일시: ${date} ${time}
- 내용: ${detail}

${imageUrl ? `<img src="${imageUrl}" alt="Event Image" />` : ''}

기타 궁금한 사항이 있으시면 언제든지 문의해주시기 바랍니다.

감사합니다.`;

const SessionDateTab = ({
  tab,
  activeTab,
  setActiveTab,
  date,
  sessions,
  eventDetail,
  updateMessageContent,
  sessionAttendees,
  setAttendees,
}) => {
  return (
    <TabMenu
      key={tab}
      label={`${tab}회 (${date})`}
      active={activeTab === tab}
      onClick={() => {
        setActiveTab(tab);
        setAttendees(sessionAttendees[tab] || []);

        const selectedSession = sessions.find((session) => session.tab === tab);

        updateMessageContent(
          selectedSession,
          eventDetail.eventTitle,
          eventDetail.eventDetail,
          eventDetail.eventImage,
        );
      }}
    />
  );
};

export default function DashboardSurveyPage() {
  const [activeTab, setActiveTab] = useState(1);
  const [attendees, setAttendees] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [sessionAttendees, setSessionAttendees] = useState({});
  const [messageContent, setMessageContent] = useState('');
  const eventId = useRecoilValue(eventIDState);
  const [messageReminder, setMessageReminder] = useState(true);

  const {
    data: eventDetail,
    isPending,
    isError,
  } = useQuery({
    queryKey: ['getEventDetail', eventId],
    queryFn: () => getEventDetail(USER_ID, eventId),
  });

  useEffect(() => {
    if (eventDetail === undefined) {
      return;
    }

    const parsedSessions = eventDetail.eventSchedules.map(
      (schedule, index) => ({
        tab: index + 1,
        date: `${schedule.eventDate.substring(5, 7)}/${schedule.eventDate.substring(8, 10)}`,
        time: schedule.eventStartTime,
        attendanceList: schedule.attendanceListResponseDtos || [],
      }),
    );

    setSessions(parsedSessions);

    if (parsedSessions.length > 0) {
      updateMessageContent(
        parsedSessions[0],
        eventDetail.eventTitle,
        eventDetail.eventDetail,
        eventDetail.eventImage,
      );
      setAttendees(parsedSessions[0].attendanceList);
    }
  }, [eventDetail]);

  const handleToggleChange = (checked) => {
    setMessageReminder(checked);
  };

  const updateMessageContent = (session, title, detail, imageUrl) => {
    const updatedContent = DEFAULT_MESSAGE_CONTENT(
      title,
      session.date,
      session.time,
      detail,
      imageUrl,
    );
    setMessageContent(updatedContent);
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
          <S.Title>이메일 예약 발송</S.Title>
          <S.ButtonContainer>
            <Button label={'저장하기'} />
          </S.ButtonContainer>
        </S.TopContainer>

        <S.TabContainer>
          {sessions.map((session) => (
            <SessionDateTab
              key={session.tab}
              tab={session.tab}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              date={session.date}
              sessions={sessions}
              eventDetail={eventDetail}
              updateMessageContent={updateMessageContent}
              sessionAttendees={sessionAttendees}
              setAttendees={setAttendees}
            />
          ))}
        </S.TabContainer>

        <S.ContentContainer>
          <S.ToggleWrapper>
            <S.Content>
              <S.ContentTitle>1시간 전 이메일 발송 여부</S.ContentTitle>
              <S.ContentDesc>
                이벤트 시작 1시간 전에 이메일을 발송합니다.
              </S.ContentDesc>
            </S.Content>
            <Switch
              onChange={handleToggleChange}
              checked={messageReminder}
              offColor="#888"
              onColor="#0075FF"
              checkedIcon={false}
              uncheckedIcon={false}
            />
          </S.ToggleWrapper>

          {messageReminder && (
            <S.Content>
              <S.ContentTitle>내용</S.ContentTitle>
              <S.ContentDesc>발송될 이메일 본문 내용입니다.</S.ContentDesc>
              <S.ContentInput
                value={messageContent}
                onChange={(e) => setMessageContent(e.target.value)}
              />
            </S.Content>
          )}
        </S.ContentContainer>
      </S.DashboardSurveyPage>
    </PageLayout>
  );
}
