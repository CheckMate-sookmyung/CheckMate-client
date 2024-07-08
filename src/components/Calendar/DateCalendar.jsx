import React, { useState, useEffect } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import * as S from './DateCalendarStyle';

const getDaysInMonth = (year, month) => {
  return new Array(31)
    .fill('')
    .map((_, i) => new Date(year, month - 1, i + 1))
    .filter((date) => date.getMonth() === month - 1);
};

const DateCalendar = ({ onSaveDate }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const handleDateClick = (date) => {
    setSelectedDate(date);
    const formattedDate = `${date.getFullYear()}-${String(
      date.getMonth() + 1,
    ).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    onSaveDate(formattedDate);
    setShowModal(false);
  };

  const handlePrevMonth = () => {
    setCurrentMonth((prev) => (prev === 1 ? 12 : prev - 1));
    if (currentMonth === 1) {
      setCurrentYear((prev) => prev - 1);
    }
  };

  const handleNextMonth = () => {
    setCurrentMonth((prev) => (prev === 12 ? 1 : prev + 1));
    if (currentMonth === 12) {
      setCurrentYear((prev) => prev + 1);
    }
  };

  const days = getDaysInMonth(currentYear, currentMonth);

  useEffect(() => {
    if (selectedDate) {
      const formattedDate = `${selectedDate.getFullYear()}-${String(
        selectedDate.getMonth() + 1,
      ).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}`;
    }
  }, [selectedDate]);

  const renderCalendarCells = () => {
    const firstDayOfMonth = new Date(currentYear, currentMonth - 1, 1).getDay();
    const daysInPreviousMonth = new Date(
      currentYear,
      currentMonth - 1,
      0,
    ).getDate();

    let cells = [];

    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      cells.push(
        <S.Cell key={`prev-${i}`} disabled>
          {daysInPreviousMonth - i}
        </S.Cell>,
      );
    }

    days.forEach((date) => {
      cells.push(
        <S.Cell
          key={date}
          disabled={date < today}
          selected={selectedDate && date.getTime() === selectedDate.getTime()}
          onClick={() => handleDateClick(date)}
        >
          {date.getDate()}
        </S.Cell>,
      );
    });

    const remainingCells = 42 - cells.length;

    for (let i = 1; i <= remainingCells; i++) {
      cells.push(
        <S.Cell key={`next-${i}`} disabled>
          {i}
        </S.Cell>,
      );
    }

    return cells;
  };

  return (
    <>
      <S.InputWrapper onClick={() => setShowModal(true)}>
        <S.PrimaryInput
          value={
            selectedDate
              ? `${selectedDate.getFullYear()}-${String(
                  selectedDate.getMonth() + 1,
                ).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(
                  2,
                  '0',
                )}`
              : ''
          }
          placeholder={selectedDate ? selectedDate : '행사 날짜 선택'}
          readOnly
        />
        <S.IconContainer>
          <FaRegCalendarAlt style={{ fontSize: '18px' }} />
        </S.IconContainer>
      </S.InputWrapper>
      {showModal && (
        <S.ModalContent>
          <S.ModalHeader>
            <S.Title>행사 일정 선택</S.Title>
            <S.CloseButton onClick={() => setShowModal(false)}>
              <IoClose style={{ color: 'white' }} />
            </S.CloseButton>
          </S.ModalHeader>
          <S.Header>
            <S.Arrow onClick={handlePrevMonth}>
              <BiChevronLeft style={{ fontSize: '28px' }} />
            </S.Arrow>
            <S.MonthYear>
              {currentYear}년 {currentMonth}월
            </S.MonthYear>
            <S.Arrow onClick={handleNextMonth}>
              <BiChevronRight style={{ fontSize: '28px' }} />
            </S.Arrow>
          </S.Header>
          <S.DaysRow>
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <S.Day key={day}>{day}</S.Day>
            ))}
          </S.DaysRow>
          <S.Body>{renderCalendarCells()}</S.Body>
        </S.ModalContent>
      )}
    </>
  );
};

export default DateCalendar;
