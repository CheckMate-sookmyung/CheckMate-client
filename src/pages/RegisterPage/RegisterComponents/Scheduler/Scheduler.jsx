import React from 'react';
import * as S from './Scheduler.style';
import { FaRegTrashAlt } from 'react-icons/fa';
import { PiTildeBold } from 'react-icons/pi';
const EventScheduleList = ({
  eventSchedules,
  handleScheduleChange,
  handleAddSchedule,
  handleDeleteSchedule,
}) => {
  return (
    <>
      <S.Content>
        <S.FlexWrapper>
          <S.Category>행사 날짜 선택</S.Category>
          <S.Category>행사 시작 시간 선택</S.Category>
          <S.Category>행사 종료 시간 선택</S.Category>
        </S.FlexWrapper>

        {eventSchedules.map((schedule, index) => (
          <S.DateTimeContainer key={index}>
            <S.DateTimeWrapper>
              <S.DateTimeInput
                selected={schedule.eventDate}
                onChange={(date) =>
                  handleScheduleChange(index, 'eventDate', date)
                }
                dateFormat="MM월 dd일"
                showYearDropdown={false}
                showMonthDropdown={false}
                dropdownMode="select"
              />

              <S.DateTimeInput
                selected={schedule.eventStartTime}
                onChange={(date) =>
                  handleScheduleChange(index, 'eventStartTime', date)
                }
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={30}
                timeCaption="Time"
                dateFormat="h:mm aa"
              />
              <PiTildeBold style={{ fontSize: '22px', color: '#5495F6' }} />
              <S.DateTimeInput
                selected={schedule.eventEndTime}
                onChange={(date) =>
                  handleScheduleChange(index, 'eventEndTime', date)
                }
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={30}
                timeCaption="Time"
                dateFormat="h:mm aa"
              />
            </S.DateTimeWrapper>
            <S.InfoDeleteIconWrapper>
              {index === 0 ? (
                <S.DeleteIconWrapper>
                  <FaRegTrashAlt
                    style={{
                      fontSize: '22px',
                      visibility: 'hidden',
                      cursor: 'default',
                    }}
                  />
                </S.DeleteIconWrapper>
              ) : (
                <S.DeleteIconWrapper
                  onClick={() => handleDeleteSchedule(index)}
                >
                  <FaRegTrashAlt
                    style={{ fontSize: '22px', color: '#5495F6' }}
                  />
                </S.DeleteIconWrapper>
              )}
            </S.InfoDeleteIconWrapper>
          </S.DateTimeContainer>
        ))}
        <S.AddTimeWrapper>
          <S.FlexWrapper
            style={{
              justifyContent: 'end',
            }}
          >
            <S.AddTimeBtn onClick={handleAddSchedule}>
              행사 일정 추가하기
            </S.AddTimeBtn>
          </S.FlexWrapper>
        </S.AddTimeWrapper>
      </S.Content>
    </>
  );
};

export default EventScheduleList;
