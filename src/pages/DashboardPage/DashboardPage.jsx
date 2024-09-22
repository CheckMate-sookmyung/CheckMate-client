import * as S from './DashboardPage.style';
import { useState, useEffect } from 'react';
import { PageLayout } from '@/Layout';
import { Button, Sidebar, TopNavigation } from '@/components';
import { eventIDState } from '@/recoil/atoms/state';
import { useRecoilValue } from 'recoil';
import { Link, useNavigate } from 'react-router-dom';
import { deleteEvent, getEventDetail, putEventManager } from '@/apis';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

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

  const eventId = useRecoilValue(eventIDState);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // 행사 정보 불러오기
  const {
    data: eventDetail,
    isPending,
    isError,
  } = useQuery({
    queryKey: ['getEventDetail', eventId],
    queryFn: () => getEventDetail(eventId),
  });

  const { mutate: deleteEventMutate, isPending: isDeleteEventPending } =
    useMutation({
      mutationKey: ['deleteEvent', eventId],
      mutationFn: () => deleteEvent(eventId),
      onSuccess: () => {
        alert('행사가 삭제되었습니다. 목록 페이지로 이동합니다.');
        navigate('/events');
      },
      onError: () => {
        alert('행사 삭제에 실패했습니다. 다시 시도해 주세요.');
      },
    });

  const { mutate: putEventManagerMutate, isPending: isPutEventManagerPending } =
    useMutation({
      mutationKey: ['putEventManager', eventId],
      mutationFn: (body) => putEventManager(eventId, body),
      onSuccess: () => {
        queryClient.invalidateQueries(['getEventDetail']);
        setIsEditing(false);
        alert('연락처가 성공적으로 등록되었습니다.');
      },
      onError: () => {
        alert('연락처 등록에 실패했습니다. 다시 시도해 주세요.');
      },
    });

  const handleEventDeleteButtonClick = () => {
    const isConfirmed = window.confirm('행사를 완전히 삭제하시겠습니까?');

    if (isConfirmed) {
      deleteEventMutate();
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
  const handleAddContactButtonClick = () => {
    const isNameValid = contacts.name.trim() !== '';
    const isPhoneValid = validatePhoneNumber(contacts.phone);
    const isEmailValid = validateEmail(contacts.email);

    setNameError(!isNameValid);
    setPhoneError(!isPhoneValid);
    setEmailError(!isEmailValid);

    if (isEditing && isNameValid && isPhoneValid && isEmailValid) {
      putEventManagerMutate({
        manager: {
          managerName: contacts.name,
          managerPhoneNumber: contacts.phone,
          managerEmail: contacts.email,
        },
      });
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

  useEffect(() => {
    if (eventDetail === undefined) {
      return;
    }

    const now = new Date();
    let completedSessionsCount = 0;

    const schedules = eventDetail.eventSchedules.map((schedule) => {
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

    // const totalAttendance = schedules.reduce((acc, schedule) => {
    //   const attendedCount = schedule.attendanceList.filter(
    //     (attendee) => attendee.attendance,
    //   ).length;
    //   return acc + attendedCount;
    // }, 0);

    // const totalParticipants = schedules[0].attendanceList.length;
    // const averageAttendance = totalParticipants
    //   ? (totalAttendance / schedules.length).toFixed(1)
    //   : 0;

    const parsedEvent = {
      title: eventDetail.eventTitle,
      detail: eventDetail.eventDetail,
      image: eventDetail.eventImage,
      schedules,
      totalSessions: eventDetail.eventSchedules.length,
      // totalParticipants,
      eventType: eventDetail.eventType,
      eventTarget: eventDetail.eventTarget,
    };

    setParsedEvents(parsedEvent);
    setAverageAttendance(averageAttendance);
    setCompletedSessions(completedSessionsCount);

    // 행사 일정 상태
    const firstSchedule = schedules[0];
    const lastSchedule = schedules[schedules.length - 1];

    const firstScheduleStartDateTime = new Date(
      `${firstSchedule.date}T${firstSchedule.startTime}`,
    );
    const lastScheduleEndDateTime = new Date(
      `${lastSchedule.date}T${lastSchedule.endTime}`,
    );

    if (now > lastScheduleEndDateTime) {
      setEventStatus('종료');
    } else if (now < firstScheduleStartDateTime) {
      setEventStatus('예정');
    } else {
      setEventStatus('진행중');
    }

    // 담당자 정보 설정
    setContacts({
      name: eventDetail.managerName || '',
      phone: eventDetail.managerPhoneNumber || '',
      email: eventDetail.managerEmail || '',
    });
  }, [eventDetail]);

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
      {parsedEvents && (
        <S.DashboardPage>
          <S.TopContainer>
            <S.EventTitleWrapper>
              <S.EventTitle>{parsedEvents.title}</S.EventTitle>
              <S.Badge status={eventStatus}>{eventStatus}</S.Badge>
            </S.EventTitleWrapper>
            <S.ButtonContainer>
              <Link to="/events/dashboard/info">
                <Button label={'행사 수정'} />
              </Link>
              <Button
                label="행사 삭제"
                backgroundColor="#F2F2F2"
                textColor="#F92828"
                disabled={isDeleteEventPending}
                onClick={handleEventDeleteButtonClick}
              />
            </S.ButtonContainer>
          </S.TopContainer>

          {/* 행사 정보 */}
          <S.ContentContainer>
            <S.OverviewContainer>
              <S.ContentBox>
                <S.ContentTitleWrapper>
                  <S.ContentTitle>행사 개요</S.ContentTitle>
                </S.ContentTitleWrapper>
                <S.ContentInfoWrapper>
                  <S.EventTypeWrapper>
                    <S.EventType>
                      {getEventTypeLabel(parsedEvents.eventType)}
                    </S.EventType>
                    <S.EventTarget>
                      {getEventTargetLabel(parsedEvents.eventTarget)}
                    </S.EventTarget>
                  </S.EventTypeWrapper>
                  <S.EventDateWrapper>
                    {eventDetail.eventSchedules.map(
                      ({ eventScheduleId, eventDate, startTime, endTime }) => (
                        <S.EventDate key={eventScheduleId}>
                          {`• ${eventDate} (${startTime} - ${endTime})`}
                        </S.EventDate>
                      ),
                    )}
                  </S.EventDateWrapper>
                </S.ContentInfoWrapper>
              </S.ContentBox>

              <S.ContentBox>
                <S.ContentTitleWrapper>
                  <S.ContactTextWrapper>
                    <S.ContentTitle>담당자</S.ContentTitle>
                    <S.ContactDescription>
                      해당 연락처로 참석자 명단이 발송돼요
                    </S.ContactDescription>
                  </S.ContactTextWrapper>
                  <S.AddContactButton
                    type="button"
                    disabled={isPutEventManagerPending}
                    onClick={handleAddContactButtonClick}
                  >
                    {isEditing
                      ? '저장'
                      : contacts.name || contacts.phone || contacts.email
                        ? '수정'
                        : '입력'}
                  </S.AddContactButton>
                </S.ContentTitleWrapper>
                <S.ContentInfoWrapper>
                  {isEditing ? (
                    <>
                      <S.ContactIconInputWrapper>
                        <S.ContactIconWrapper>
                          <S.StyledUserIcon />
                        </S.ContactIconWrapper>
                        <S.ContactInputWrapper>
                          <S.ContactInput
                            type="text"
                            name="name"
                            placeholder="담당자 이름"
                            value={contacts.name}
                            onChange={handleInputChange}
                          />
                          {nameError && (
                            <S.ContactCheck>
                              이름을 입력해 주세요.
                            </S.ContactCheck>
                          )}
                        </S.ContactInputWrapper>
                      </S.ContactIconInputWrapper>

                      <S.ContactIconInputWrapper>
                        <S.ContactIconWrapper>
                          <S.StyledPhoneIcon />
                        </S.ContactIconWrapper>
                        <S.ContactInputWrapper>
                          <S.ContactInput
                            type="text"
                            name="phone"
                            placeholder="핸드폰 번호 ex) 010-1234-5678"
                            value={contacts.phone}
                            onChange={handleInputChange}
                          />
                          {phoneError && (
                            <S.ContactCheck>
                              휴대폰 번호 형식이 올바르지 않습니다.
                            </S.ContactCheck>
                          )}
                        </S.ContactInputWrapper>
                      </S.ContactIconInputWrapper>

                      <S.ContactIconInputWrapper>
                        <S.ContactIconWrapper>
                          <S.StyledEnvelopeIcon />
                        </S.ContactIconWrapper>
                        <S.ContactInputWrapper>
                          <S.ContactInput
                            type="email"
                            name="email"
                            placeholder="이메일 ex) checkmate@sookmyung.ac.kr"
                            value={contacts.email}
                            onChange={handleInputChange}
                          />
                          {emailError && (
                            <S.ContactCheck>
                              이메일 형식이 올바르지 않습니다.
                            </S.ContactCheck>
                          )}
                        </S.ContactInputWrapper>
                      </S.ContactIconInputWrapper>
                    </>
                  ) : (
                    <>
                      <S.ContactIconTextWrapper>
                        <S.ContactIconWrapper>
                          <S.StyledUserIcon />
                        </S.ContactIconWrapper>
                        <S.ContactText>{contacts.name}</S.ContactText>
                      </S.ContactIconTextWrapper>

                      <S.ContactIconTextWrapper>
                        <S.ContactIconWrapper>
                          <S.StyledPhoneIcon />
                        </S.ContactIconWrapper>
                        <S.ContactText>{contacts.phone}</S.ContactText>
                      </S.ContactIconTextWrapper>

                      <S.ContactIconTextWrapper>
                        <S.ContactIconWrapper>
                          <S.StyledEnvelopeIcon />
                        </S.ContactIconWrapper>
                        <S.ContactText>{contacts.email}</S.ContactText>
                      </S.ContactIconTextWrapper>
                    </>
                  )}
                </S.ContentInfoWrapper>
              </S.ContentBox>
            </S.OverviewContainer>

            {/* 행사 커버 이미지 */}
            <S.PosterImageContainer>
              <S.ContentBox>
                <S.ContentTitleWrapper>
                  <S.ContentTitle>행사 커버 이미지</S.ContentTitle>
                </S.ContentTitleWrapper>
                <S.ImageWrapper>
                  <img src={parsedEvents.image} alt="Event Cover" />
                </S.ImageWrapper>
              </S.ContentBox>
            </S.PosterImageContainer>
          </S.ContentContainer>

          {/* 평균 참석 인원, 행사 진행 회차 */}
          <S.ProgressContainer>
            <S.ProgressBox>
              <S.ProgressText>
                <S.ProgressTitle>평균 참석 인원</S.ProgressTitle>
                <S.ProgressDescription>
                  {parsedEvents.totalSessions}회 진행 후 집계된 인원이에요
                </S.ProgressDescription>
              </S.ProgressText>
              <S.ProgressNumber>
                <em>{eventDetail.averageAttendees}</em>
                {` / ${eventDetail.totalAttendees}`}
              </S.ProgressNumber>
            </S.ProgressBox>

            <S.ProgressBox>
              <S.ProgressText>
                <S.ProgressTitle>행사 진행 회차</S.ProgressTitle>
              </S.ProgressText>
              <S.ProgressNumber>
                <em>{completedSessions}</em> / {parsedEvents.totalSessions}
              </S.ProgressNumber>
            </S.ProgressBox>
          </S.ProgressContainer>
        </S.DashboardPage>
      )}
    </PageLayout>
  );
}
