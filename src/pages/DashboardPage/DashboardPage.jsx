import * as S from './DashboardPage.style';
import React, { useState, useEffect } from 'react';
import PageLayout from '../../Layout/PageLayout';
import { FaRotate, FaUsers } from 'react-icons/fa6';
import { Sidebar } from '../../components/Navigator';
import { BlueButton, GrayButton } from '../../components/Button';
import { USER_ID } from '../../constants';
import { eventIDState } from '../../recoil/atoms/state';
import { useRecoilValue } from 'recoil';
import { axiosInstance } from '../../axios';
import { useNavigate } from 'react-router-dom';

export default function DashboardPage() {
  const [parsedEvents, setParsedEvents] = useState(null);
  const [averageAttendance, setAverageAttendance] = useState(0);
  const [completedSessions, setCompletedSessions] = useState(0);
  const [eventStatus, setEventStatus] = useState('');
  const [contacts, setContacts] = useState({ name: '', phone: '', email: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);

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
            eventType: eventData.eventType,
            eventTarget: eventData.eventTarget,
          };

          setParsedEvents(parsedEvent);
          setAverageAttendance(averageAttendance);
          setCompletedSessions(completedSessionsCount);

          // 행사 일정 상태
          const firstSchedule = schedules[0];
          const lastSchedule = schedules[schedules.length - 1];

          const firstScheduleStartDate = new Date(
            `${firstSchedule.date}T00:00:00`,
          );
          const lastScheduleEndDateTime = new Date(
            `${lastSchedule.date}T${lastSchedule.endTime}`,
          );

          if (now > lastScheduleEndDateTime) {
            setEventStatus('종료');
            // await sendAttendanceList();
          } else if (now < firstScheduleStartDate) {
            setEventStatus('예정');
          } else {
            setEventStatus('진행중');
          }

          // 담당자 정보 설정
          setContacts({
            name: eventData.managerName || '',
            phone: eventData.managerPhoneNumber || '',
            email: eventData.managerEmail || '',
          });
        }
      } catch (error) {
        console.error('이벤트 데이터를 가져오는 중 오류:', error);
      }
    };

    fetchData();
  }, [EVENT_ID]);

  // 출석명단 자동 전송
  // const sendAttendanceList = async () => {
  //   try {
  //     const response = await axiosInstance.get(
  //       `/api/v1/attendance/list/sending/${USER_ID}/${EVENT_ID}`,
  //     );
  //     if (response.data.isSuccess) {
  //       console.log('출석 명단이 성공적으로 전송되었습니다.');
  //     } else {
  //       console.error('출석 명단 전송 실패:', response.data.message);
  //     }
  //   } catch (error) {
  //     console.error('출석 명단 전송 중 오류:', error);
  //   }
  // };

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

  // eventType, eventTarget
  const getEventTypeLabel = (type) =>
    type === 'OFFLINE' ? '오프라인' : type === 'ONLINE' ? '온라인' : type;

  const getEventTargetLabel = (target) =>
    target === 'EXTERNAL'
      ? '외부인 (휴대폰번호로 출석체크)'
      : target === 'INTERNAL'
        ? '숙명여자대학교 학생 (학번으로 출석체크)'
        : target;

  // 담당자 연락처 추가 및 입력 필드 생성
  const handleAddContact = async () => {
    const isNameValid = contacts.name.trim() !== '';
    const isPhoneValid = validatePhoneNumber(contacts.phone);
    const isEmailValid = validateEmail(contacts.email);

    setNameError(!isNameValid);
    setPhoneError(!isPhoneValid);
    setEmailError(!isEmailValid);

    if (isEditing && isNameValid && isPhoneValid && isEmailValid) {
      try {
        const response = await axiosInstance.post(
          `/api/v1/events/manager/${USER_ID}/${EVENT_ID}`,
          {
            manager: {
              managerName: contacts.name,
              managerPhoneNumber: contacts.phone,
              managerEmail: contacts.email,
            },
          },
        );

        if (response.status === 200) {
          setIsEditing(false);
          alert('연락처가 성공적으로 등록되었습니다.');
        }
      } catch (error) {
        console.log('연락처 등록 실패: ', error);
        alert('연락처 등록에 실패했습니다. 다시 시도해 주세요.');
      }
    } else {
      setIsEditing(true);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContacts((prevContacts) => ({
      ...prevContacts,
      [name]: value,
    }));

    if (name === 'name') {
      setNameError(value.trim() === '');
    } else if (name === 'phone') {
      setPhoneError(!validatePhoneNumber(value));
    } else if (name === 'email') {
      setEmailError(!validateEmail(value));
    }
  };

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^010-\d{4}-\d{4}$/;
    return phoneRegex.test(phone);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
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
          </S.TopContainer>

          {/* 행사 정보 */}
          <S.ContentContainer>
            <S.OverviewContainer>
              <S.ContentBoxWrapper>
                <S.ContentBoxTitle>행사 개요</S.ContentBoxTitle>
                <S.ContentBox>
                  <S.ContentBoxInfo>
                    <S.ContentBoxSubTitle>이벤트 형식</S.ContentBoxSubTitle>
                    <S.ContentBoxDetail>
                      {`${getEventTypeLabel(parsedEvents.eventType)} | ${getEventTargetLabel(parsedEvents.eventTarget)}`}
                    </S.ContentBoxDetail>
                  </S.ContentBoxInfo>

                  <S.ContentBoxInfo>
                    <S.ContentBoxSubTitle>이벤트 일정</S.ContentBoxSubTitle>
                    {parsedEvents.schedules.map((schedule, index) => (
                      <S.ContentBoxDetail key={index}>
                        {`${schedule.date} (${schedule.startTime} - ${schedule.endTime})`}
                      </S.ContentBoxDetail>
                    ))}
                  </S.ContentBoxInfo>
                </S.ContentBox>
              </S.ContentBoxWrapper>

              <S.ContentBoxWrapper>
                <S.ContentBoxTitle>담당자</S.ContentBoxTitle>
                <S.ContentBox>
                  <S.ContentBoxInfo>
                    <S.ContentBoxSubTitle>담당자 명</S.ContentBoxSubTitle>
                    <S.ContentBoxDetail>김담당 </S.ContentBoxDetail>
                  </S.ContentBoxInfo>

                  <S.ContentBoxInfo>
                    <S.ContentBoxSubTitle>담당자 연락망</S.ContentBoxSubTitle>
                    <S.ContentBoxDetail>연락처 </S.ContentBoxDetail>
                  </S.ContentBoxInfo>
                </S.ContentBox>
              </S.ContentBoxWrapper>
            </S.OverviewContainer>

            {/* 진행 현황 */}
            <S.OverviewContainer>
              <S.ContentBoxWrapper>
                <S.ContentBoxTitle>행사 커버 이미지</S.ContentBoxTitle>
                <S.ContentBox>
                  <S.ContentBoxInfo>
                    <S.ImageWrapper>
                      <img src={parsedEvents.image} alt="Event Cover" />
                    </S.ImageWrapper>
                  </S.ContentBoxInfo>
                </S.ContentBox>
              </S.ContentBoxWrapper>
            </S.OverviewContainer>
          </S.ContentContainer>

          <S.ContentContainer>
            <S.ProgressBox>
              <S.ProgressTitle>평균 참석 인원</S.ProgressTitle>
              <S.ProgressDesc>3회 진행 후 집계된 인원이에요</S.ProgressDesc>
              <S.ProgressNumber>
                <strong>{averageAttendance}</strong>
                {' / '}
                {parsedEvents.totalParticipants}
              </S.ProgressNumber>
            </S.ProgressBox>

            <S.ProgressBox>
              <S.ProgressTitle>행사 진행 회차</S.ProgressTitle>
              <S.ProgressNumber>
                <strong>{completedSessions}</strong>
                {' / '}
                {parsedEvents.totalSessions}
              </S.ProgressNumber>
            </S.ProgressBox>
          </S.ContentContainer>

          <S.ButtonContainer>
            <S.StyledLink to="/event/dashboard/info">
              <BlueButton label={'행사 수정'} />
            </S.StyledLink>
            <GrayButton
              onClick={DeleteEvent}
              label={'행사 삭제'}
              fontColor={'red'}
            />
          </S.ButtonContainer>
        </S.DashboardPage>
      )}
    </PageLayout>
  );
}
