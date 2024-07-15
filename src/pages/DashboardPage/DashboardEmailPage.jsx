import React, { useEffect, useState } from 'react';
import PageLayout from '../../Layout/PageLayout';
import { BlueButton90, TabButton90 } from '../../components/Button';
import * as S from './DashboardEmailPage.style';
import { Sidebar } from '../../components/Navigator';
import { USER_ID } from '../../constants';
import { axiosInstance } from '../../axios';
import { useRecoilValue } from 'recoil';
import { eventIDState } from '../../recoil/atoms/state';
import Switch from 'react-switch';

const DEFAULT_EMAIL_CONTENT = `안녕하세요, [기관명]입니다.

[행사명]을 진행합니다.

- 일시: YYYY-MM-DD HH:MM
- 내용: 이메일 본문 내용

기타 궁금한 사항이 있으시면 언제든지 문의해주시기 바랍니다.

감사합니다.`;

export default function DashboardEmailPage() {
  const [activeTab, setActiveTab] = useState(1);
  const [attendees, setAttendees] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [sessionAttendees, setSessionAttendees] = useState({});
  const EVENT_ID = useRecoilValue(eventIDState);
  const [emailReminder, setEmailReminder] = useState(false);

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const response = await axiosInstance.get(
          `/api/v1/events/${USER_ID}/${EVENT_ID}`,
        );
        const parsedSessions = response.data.eventSchedules.map(
          (schedule, index) => ({
            tab: index + 1,
            date: schedule.eventDate,
            attendanceList: schedule.attendanceListResponseDtos,
          }),
        );
        setSessions(parsedSessions);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSessions();
  }, [EVENT_ID, USER_ID]);

  const SessionDateTab = ({ tab, activeTab, setActiveTab, date }) => {
    return (
      <TabButton90
        key={tab}
        active={activeTab === tab}
        onClick={() => {
          setActiveTab(tab);
          setAttendees(sessionAttendees[tab]);
        }}
      >
        {tab}회 ({date})
      </TabButton90>
    );
  };

  const handleToggleChange = (checked) => {
    setEmailReminder(checked);
  };

  return (
    <PageLayout sideBar={<Sidebar />}>
      <S.DashboardEmail>
        <S.TopContainer>
          <S.Title>이메일 예약 발송</S.Title>
          <S.ButtonContainer>
            <BlueButton90>저장하기</BlueButton90>
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
              checked={emailReminder}
              offColor="#888"
              onColor="#0075FF"
              checkedIcon={false}
              uncheckedIcon={false}
            />
          </S.ToggleWrapper>

          {emailReminder && (
            <S.Content>
              <S.ContentTitle>내용</S.ContentTitle>
              <S.ContentDesc>발송될 이메일 본문 내용입니다.</S.ContentDesc>
              <S.ContentInput defaultValue={DEFAULT_EMAIL_CONTENT} />
            </S.Content>
          )}
        </S.ContentContainer>
      </S.DashboardEmail>
    </PageLayout>
  );
}
