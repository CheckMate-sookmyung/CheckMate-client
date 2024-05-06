import React, { useState } from 'react';
import * as S from './DateCalendarStyle';
import moment from 'moment/moment';
import 'moment/locale/ko';
import { IoClose } from 'react-icons/io5';

moment.locale('ko');

export default function CustomCalendar(props) {
  const { onClose } = props;
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <S.CalendarContainer>
      <S.CalendarTitle>
        행사 일정 선택
        <S.CloseWrapper>
          <IoClose
            onClick={() => {
              onClose(false);
            }}
          />
        </S.CloseWrapper>
      </S.CalendarTitle>
      <S.StyledCalendar
        onChange={handleDateChange}
        value={selectedDate}
        showNeighboringMonth={false}
        nextLabe={null}
        prevLabe={null}
        next2Label={null}
        prev2Label={null}
        nextAriaLabe={null}
        calendarType={'gregory'}
        maxDate={new Date(2024, 12, 31)}
        minDate={new Date()}
        minDetail="month"
        maxDetail="month"
        formatDay={(locale, date) => moment(date).format('DD')}
        tileClassName={({ date, view }) =>
          view === 'month' && date.getDay() === 0 ? 'sunday' : null
        }
      />
      <S.SelectedButton>{selectedDate.toDateString()}</S.SelectedButton>
    </S.CalendarContainer>
  );
}
