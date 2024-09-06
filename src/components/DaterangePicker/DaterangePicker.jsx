import React, { useState } from 'react';
import * as S from './DaterangePicker.style';

const DaterangePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleDateChange = (date, type) => {
    if (type === 'start') {
      setStartDate(date);
    } else if (type === 'end') {
      setEndDate(date);
    }
  };

  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.Label>행사 기간</S.Label>
          <S.StyledDatePicker
            onSelect={(date) => handleDateChange(date, 'start')}
            selected={startDate}
            dateFormat="yyyy-MM-dd"
            placeholderText={startDate}
          />
          <S.TildeIcon />
          <S.StyledDatePicker
            onSelect={(date) => handleDateChange(date, 'end')}
            selected={endDate}
            dateFormat="yyyy-MM-dd"
            placeholderText={endDate}
          />
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default DaterangePicker;
