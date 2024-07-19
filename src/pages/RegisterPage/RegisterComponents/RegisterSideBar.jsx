import React from 'react';
import * as S from './RegisterSideBarStyle';
import { useRecoilValue } from 'recoil';
import {
  eventScheduleList,
  eventTitle,
  eventType,
  offlineStatus,
  RegisterStep,
} from '../../../recoil/atoms/state';

const RegisterSidebar = () => {
  const step = useRecoilValue(RegisterStep);
  const title = useRecoilValue(eventTitle);
  const schedules = useRecoilValue(eventScheduleList);
  const status =
    useRecoilValue(offlineStatus) === 'OFFLINE'
      ? '오프라인 행사'
      : '온라인 행사';
  const type =
    useRecoilValue(eventType) === 'INTERNAL' ? '교내 행사' : '교외 행사';

  const formatSchedule = (schedule) => {
    const date = new Date(schedule.eventDate);
    const month = date.getMonth() + 1; // 월은 0부터 시작하므로 1을 더해야 합니다.
    const day = date.getDate();
    const formattedDate = `${month}월 ${day}일`;

    // 시간 형식을 "HH:mm" 형식으로 맞추기
    const formatTime = (timeString) => {
      const [hour, minute] = timeString.split(':');
      return `${hour.padStart(2, '0')}:${minute.padStart(2, '0')}`;
    };

    const startTime = formatTime(schedule.eventStartTime);
    const endTime = formatTime(schedule.eventEndTime);

    return `${formattedDate} ${startTime} ~ ${endTime}`;
  };

  const menuItems = [
    {
      title: '선택된 이벤트유형',
      subtitles: [`${status}`, `${type}`],
      contents: [],
    },
    {
      title: '선택된 이벤트개요',
      subtitles: ['제목', '날짜'],
      contents: [
        `${title}`,
        schedules.map((event, index) => (
          <p key={index}>{formatSchedule(event)}</p>
        )),
      ],
    },
  ];

  const MenuItem = ({ title, subtitles, contents, isActive }) => {
    return (
      <S.MenuItemContainer>
        <S.Title isActive={isActive}>{title}</S.Title>
        <S.Divider />
        {subtitles.map((subtitle, index) => (
          <div key={index}>
            <S.Subtitle>{subtitle}</S.Subtitle>
            {contents && contents[index] && (
              <S.Content>{contents[index]}</S.Content>
            )}
          </div>
        ))}
      </S.MenuItemContainer>
    );
  };

  return (
    <S.SidebarContainer>
      {menuItems.map((item, index) => (
        <MenuItem
          key={index}
          title={item.title}
          subtitles={item.subtitles}
          contents={item.contents}
          isActive={step === 1 ? index === 0 : index === 1}
        />
      ))}
    </S.SidebarContainer>
  );
};

export default RegisterSidebar;
