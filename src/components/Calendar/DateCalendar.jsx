import React, { useState } from 'react';
import * as S from './DateCalendarStyle';
import { IoClose } from 'react-icons/io5';

export default function DateCalendar({ onClose, onSubmit }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const year = selectedDate.getFullYear();
  const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
  const day = String(selectedDate.getDate()).padStart(2, '0');
  const dayOfWeek = ['일', '월', '화', '수', '목', '금', '토'][
    selectedDate.getDay()
  ];
  const formattedDate = `${year}.${month}.${day}(${dayOfWeek})`;

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const decideDate = () => {
    const formattedDateString = `${year}-${month}-${day}`;
    onClose(formattedDateString);
  };

  const handleClose = () => {
    onClose(false);
  };

  return (
    <S.CalendarContainer>
      <S.CalendarTitle>
        행사 일정 선택
        <S.CloseWrapper>
          <IoClose onClick={handleClose} />
        </S.CloseWrapper>
      </S.CalendarTitle>
      <S.StyledCalendar
        onChange={handleDateChange}
        value={selectedDate}
        showNeighboringMonth={false}
        nextLabel={null}
        prevLabel={null}
        next2Label={null}
        prev2Label={null}
        nextAriaLabe={null}
        calendarType={'gregory'}
        maxDate={new Date(2024, 12, 31)}
        minDate={new Date()}
        minDetail="month"
        maxDetail="month"
        formatDay={(locale, date) => String(date.getDate()).padStart(2, '0')}
        tileClassName={({ date, view }) =>
          view === 'month' && date.getDay() === 0 ? 'sunday' : null
        }
      />
      <S.SelectedButton onClick={decideDate}>
        {formattedDate} 일정 등록
      </S.SelectedButton>
    </S.CalendarContainer>
  );
}
