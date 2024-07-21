import * as S from './DashboardPage.style';
import { FaRotate, FaUsers } from 'react-icons/fa6';
import React, { useState, useEffect } from 'react';
import PageLayout from '../../Layout/PageLayout';
import { Sidebar } from '../../components/Navigator';
import { GrayButton90 } from '../../components/Button';
import { eventIDState } from '../../recoil/atoms/state';
import { useRecoilValue } from 'recoil';
import { USER_ID } from '../../constants';
import { axiosInstance } from '../../axios';
import { useNavigate } from 'react-router-dom';

export default function DashboardPage() {
  const [parsedEvents, setParsedEvents] = useState(null);
  const [averageAttendance, setAverageAttendance] = useState(0);
  const [completedSessions, setCompletedSessions] = useState(0);
  const [eventStatus, setEventStatus] = useState('');
  const EVENT_ID = useRecoilValue(eventIDState);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('USER_ID:', USER_ID);
    console.log('EVENT_ID:', EVENT_ID);
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(
          `/api/v1/events/${USER_ID}/${EVENT_ID}`,
        );
        const eventData = response.data;
        if (eventData) {
          const now = new Date();
          let completedSessionsCount = 0;

          const schedules = eventData.eventSchedules.map((schedule) => {
            const scheduleEndDateTime = new Date(
              `${schedule.eventDate}T${schedule.eventEndTime}`,
            );
            if (scheduleEndDateTime < now) {
              completedSessionsCount += 1;
            }
            return {
              date: schedule.eventDate,
              startTime: schedule.eventStartTime,
              endTime: schedule.eventEndTime,
              attendanceList: schedule.attendanceListResponseDtos,
            };
          });

          const totalAttendance = schedules.reduce((acc, schedule) => {
            const attendedCount = schedule.attendanceList.filter(
              (attendee) => attendee.attendance,
            ).length;
            return acc + attendedCount;
          }, 0);

          const totalParticipants = schedules[0].attendanceList.length;
          const averageAttendance = totalParticipants
            ? (totalAttendance / schedules.length).toFixed(1)
            : 0;

          const parsedEvent = {
            title: eventData.eventTitle,
            detail: eventData.eventDetail,
            image: eventData.eventImage,
            schedules,
            totalSessions: eventData.eventSchedules.length,
            totalParticipants,
          };

          setParsedEvents(parsedEvent);
          setAverageAttendance(averageAttendance);
          setCompletedSessions(completedSessionsCount);

          // 행사 일정 상태
          const lastSchedule = schedules[schedules.length - 1];
          const lastScheduleEndDateTime = new Date(
            `${lastSchedule.date}T${lastSchedule.endTime}`,
          );

          if (lastScheduleEndDateTime < now) {
            setEventStatus('종료');
          } else if (new Date(lastSchedule.date) > now) {
            setEventStatus('예정');
          } else {
            setEventStatus('진행중');
          }
        }
      } catch (error) {
        console.error('Error fetching event data:', error);
      }
    };

    fetchData();
  }, [EVENT_ID]);

  // 행사 삭제
  const DeleteEvent = async () => {
    const isConfirmed = window.confirm('행사를 완전히 삭제하시겠습니까?');
    if (!isConfirmed) {
      return;
    }
    try {
      const response = await axiosInstance.delete(
        `api/v1/events/${USER_ID}/${EVENT_ID}`,
      );
      if (response.status === 200) {
        alert('행사가 삭제되었습니다. 목록 페이지로 이동합니다.');
        navigate('/event');
        console.log(response);
      }
    } catch (error) {
      alert('행사 삭제에 실패했습니다. 다시 시도해 주세요.');
      console.log(error);
    }
  };

  return (
    <PageLayout sideBar={<Sidebar />}>
      {parsedEvents && (
        <S.DashboardPage>
          <S.TopContainer>
            <S.EventTitleWrapper>
              <S.EventTitle>{parsedEvents.title}</S.EventTitle>
              <S.Badge status={eventStatus}>{eventStatus}</S.Badge>
            </S.EventTitleWrapper>
            <S.ButtonContainer>
              <S.StyledLink to="/event/dashboard/info">
                <GrayButton90>행사 수정</GrayButton90>
              </S.StyledLink>
              <S.DeleteEventButton onClick={DeleteEvent}>
                행사 삭제
              </S.DeleteEventButton>
            </S.ButtonContainer>
          </S.TopContainer>

          {/* 행사 정보 */}
          <S.ContentContainer>
            <S.OverviewContainer>
              <S.ContentBox>
                <S.ContentTitle>행사 개요</S.ContentTitle>
                <S.ContentInfoWrapper>
                  <S.EventTypeWrapper>
                    <S.EventType>오프라인 행사</S.EventType>
                    <S.EventVenue>캠퍼스 내부</S.EventVenue>
                  </S.EventTypeWrapper>
                  <S.EventDateWrapper>
                    {parsedEvents.schedules.map((schedule, index) => (
                      <S.EventDate key={index}>
                        {`• ${schedule.date} (${schedule.startTime} - ${schedule.endTime})`}
                      </S.EventDate>
                    ))}
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

              <S.ProgressBox>
                <S.IconWrapper>
                  <FaUsers />
                </S.IconWrapper>
                <S.ProgressContentWrapper>
                  <S.ProgressTitle>평균 참석 인원</S.ProgressTitle>
                  <S.ProgressText>
                    {averageAttendance} / {parsedEvents.totalParticipants}
                  </S.ProgressText>
                </S.ProgressContentWrapper>
              </S.ProgressBox>

              <S.ProgressBox>
                <S.IconWrapper>
                  <FaRotate />
                </S.IconWrapper>
                <S.ProgressContentWrapper>
                  <S.ProgressTitle>진행 회차</S.ProgressTitle>
                  <S.ProgressText>
                    {completedSessions} / {parsedEvents.totalSessions}
                  </S.ProgressText>
                </S.ProgressContentWrapper>
              </S.ProgressBox>
            </S.OverviewContainer>

            {/* 진행 현황 */}
            <S.PosterImageContainer>
              <S.ContentBox>
                <S.ContentTitle>행사 커버 이미지</S.ContentTitle>
                <S.ImageWrapper>
                  <img src={parsedEvents.image} alt="Event Cover" />
                </S.ImageWrapper>
              </S.ContentBox>
            </S.PosterImageContainer>
          </S.ContentContainer>
        </S.DashboardPage>
      )}
    </PageLayout>
  );
}
