import { useEffect, useState } from 'react';
import * as S from './Sidebar.style';
import {
  FaTableList,
  FaCircleInfo,
  FaEnvelopeCircleCheck,
  FaUsers,
  FaChartPie,
} from 'react-icons/fa6';
import { USER_ID } from '@/constants';
import { useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { eventIDState } from '@/recoil/atoms/state';
import { axiosInstance } from '@/axios';

// 개별 메뉴
const menuItems = [
  { to: '/event/dashboard', icon: <FaTableList />, text: '대시보드' },
  {
    to: '/event/dashboard/info',
    icon: <FaCircleInfo />,
    text: '행사 기본 정보',
  },
  {
    to: '/event/dashboard/email',
    icon: <FaEnvelopeCircleCheck />,
    text: '카카오톡 예약 발송',
  },
  { to: '/event/dashboard/attendee', icon: <FaUsers />, text: '참석자 관리' },
  {
    to: '#',
    icon: <FaChartPie />,
    text: '통계 (오픈예정)',
  },
];

function MenuItem({ to, icon, text, isActive }) {
  return (
    <S.StyledLink to={to}>
      <S.MenuItem className={isActive ? 'active' : ''}>
        <S.Icon>{icon}</S.Icon>
        <S.Text>{text}</S.Text>
      </S.MenuItem>
    </S.StyledLink>
  );
}

// 사이드바 전체
export default function Sidebar() {
  const [parsedEvents, setParsedEvents] = useState(null);
  const [isAttendanceButtonActive, setIsAttendanceButtonActive] =
    useState(false);
  const location = useLocation();
  const EVENT_ID = useRecoilValue(eventIDState);

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

          const schedules = eventData.eventSchedules.map((schedule) => ({
            date: schedule.eventDate,
            startTime: schedule.eventStartTime,
            endTime: schedule.eventEndTime,
            attendanceList: schedule.attendanceListResponseDtos,
          }));

          const firstSchedule = schedules[0];
          const lastSchedule = schedules[schedules.length - 1];

          const firstScheduleStartDateTime = new Date(
            `${firstSchedule.date}T${firstSchedule.startTime}`,
          );
          const lastScheduleEndDateTime = new Date(
            `${lastSchedule.date}T${lastSchedule.endTime}`,
          );

          // 현재 시간이 행사 기간 내에 있는지 확인
          if (
            now >= firstScheduleStartDateTime &&
            now <= lastScheduleEndDateTime
          ) {
            setIsAttendanceButtonActive(true);
          } else {
            setIsAttendanceButtonActive(false);
          }

          const parsedEvent = {
            title: eventData.eventTitle,
            detail: eventData.eventDetail,
            image: eventData.eventImage,
            schedules,
            totalSessions: eventData.eventSchedules.length,
            totalParticipants: schedules[0].attendanceList.length,
            eventType: eventData.eventType,
            eventTarget: eventData.eventTarget,
          };

          setParsedEvents(parsedEvent);
        }
      } catch (error) {
        console.error('이벤트 데이터를 가져오는 중 오류:', error);
      }
    };

    fetchData();
  }, [EVENT_ID]);

  return (
    <S.Sidebar>
      <S.MenuWrapper>
        {menuItems.slice(0, 2).map((item) => (
          <MenuItem
            key={item.to}
            {...item}
            isActive={location.pathname === item.to}
          />
        ))}
      </S.MenuWrapper>

      <S.MenuWrapper>
        {menuItems.slice(2, 4).map((item) => (
          <MenuItem
            key={item.to}
            {...item}
            isActive={location.pathname === item.to}
          />
        ))}
      </S.MenuWrapper>

      <S.MenuWrapper>
        {menuItems.slice(4).map((item) => (
          <MenuItem
            key={item.to}
            {...item}
            isActive={location.pathname === item.to}
          />
        ))}
      </S.MenuWrapper>

      <S.ButtonWrapper>
        <S.AttendanceBtn>
          {/* <S.AttendanceBtn disabled={!isAttendanceButtonActive}> */}
          <S.StyledLink to="/attendance/student-id">
            출석화면으로 이동
          </S.StyledLink>
        </S.AttendanceBtn>
      </S.ButtonWrapper>
    </S.Sidebar>
  );
}
