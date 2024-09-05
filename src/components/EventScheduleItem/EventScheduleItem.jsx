import { FaAngleRight, FaRegTrashCan, FaCircleInfo } from 'react-icons/fa6';
import * as S from './EventScheduleItem.style';

const EventScheduleItem = ({
  index,
  schedule,
  onDateChange,
  onStartTimeChange,
  onEndTimeChange,
  onDelete,
  onAddSchedule, // 새로운 일정을 추가하는 함수를 props로 받음
  isDeletable,
  isLastItem, // 마지막 항목인지 확인하는 props
}) => {
  return (
    <>
      <S.DateTimeContainer>
        <S.DateTimeWrapper>
          <S.DateTimeInput
            selected={schedule.eventDate}
            onChange={(date) => onDateChange(index, date)}
            dateFormat="MM월 dd일"
            showYearDropdown={false}
            showMonthDropdown={true}
            dropdownMode="select"
          />
          <S.DateTimeInput
            selected={schedule.eventStartTime}
            onChange={(date) => onStartTimeChange(index, date)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={30}
            timeCaption="Time"
            dateFormat="h:mm aa"
          />
          <FaAngleRight />

          <S.DateTimeInput
            selected={schedule.eventEndTime}
            onChange={(date) => onEndTimeChange(index, date)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={30}
            timeCaption="Time"
            dateFormat="h:mm aa"
          />
        </S.DateTimeWrapper>
        <S.InfoDeleteIconWrapper>
          {isDeletable ? (
            <S.DeleteIconWrapper onClick={() => onDelete(index)}>
              <FaRegTrashCan />
            </S.DeleteIconWrapper>
          ) : (
            <S.InfoIconWrapper>
              <FaCircleInfo />
            </S.InfoIconWrapper>
          )}
        </S.InfoDeleteIconWrapper>
      </S.DateTimeContainer>
      {isLastItem && ( // 마지막 항목에서만 추가 버튼을 표시
        <S.AddTimeWrapper>
          <S.AddTimeBtn onClick={onAddSchedule}>
            행사 일정 추가하기
          </S.AddTimeBtn>
        </S.AddTimeWrapper>
      )}
    </>
  );
};

export default EventScheduleItem;
