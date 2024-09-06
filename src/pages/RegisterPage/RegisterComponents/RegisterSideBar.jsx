import React from 'react';
import * as S from './RegisterSideBarStyle';
import { useRecoilValue } from 'recoil';
import {
  eventScheduleList,
  eventTitle,
  eventTypeState,
  eventTargetState,
  RegisterStep,
} from '@/recoil/atoms/state';

const RegisterSidebar = () => {
  const step = useRecoilValue(RegisterStep);
  const title = useRecoilValue(eventTitle);
  const schedules = useRecoilValue(eventScheduleList);
  const status =
    useRecoilValue(eventTypeState) === 'OFFLINE'
      ? '오프라인 행사'
      : '온라인 행사';
  const type =
    useRecoilValue(eventTargetState) === 'INTERNAL' ? '교내 행사' : '교외 행사';

  const formatSchedule = (schedule) => {
    const date = new Date(schedule.eventDate);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const formattedDate = `${month}월 ${String(day).padStart(2, '0')}일`;

    const formatTime = (time) => {
      if (time instanceof Date) {
        return time.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        });
      }

      if (typeof time === 'string') {
        const [hour, minute] = time.split(':');
        return `${hour.padStart(2, '0')}:${minute.padStart(2, '0')}`;
      }

      return 'Invalid Time';
    };

    const startTime = formatTime(schedule.eventStartTime);
    const endTime = formatTime(schedule.eventEndTime);

    return `${formattedDate} ${startTime} ~ ${endTime}`;
  };

  const menuItems = [
    {
      title: '선택된 행사 유형',
      subtitles: ['진행 방식', '행사 유형'],
      contents: [`${status}`, `${type}`],
    },
    {
      title: '선택된 행사 개요',
      subtitles: ['제목', '기간'],
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
        {/* <S.Divider /> */}
        <S.ContentWrapper>
          {subtitles.map((subtitle, index) => (
            <S.Content key={index}>
              <S.Subtitle>{subtitle}</S.Subtitle>
              {contents && contents[index] && (
                <S.SubtitleContent>{contents[index]}</S.SubtitleContent>
              )}
            </S.Content>
          ))}
        </S.ContentWrapper>
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
