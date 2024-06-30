import React, { useState, useEffect } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import styled from 'styled-components';

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  &:focus {
    outline: none;
  }
`;

const PrimaryInput = styled.input`
  width: 250px;
  height: 56px;
  padding: 0 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  &:focus {
    outline: none;
  }
  cursor: pointer;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 600px;
  height: auto;
  transform: translate(0, 55%);
  background-color: white;
  border-radius: 8px;
  z-index: 100;
  box-shadow: 0px 0px 20px #e0e0e0;
`;

const ModalHeader = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  text-align: center;
  font-size: 18px;
  align-items: center;
  justify-content: center;
  color: white;
  background: linear-gradient(to right, #0a2c83, #1f5fa9);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const Title = styled.p`
  margin: 0;
`;

const CloseButton = styled.button`
  display: flex;
  position: absolute;
  cursor: pointer;
  font-size: 25px;
  right: 15px;
`;

const IconContainer = styled.div`
  display: flex;
  position: absolute;
  cursor: pointer;
  font-size: 25px;
  right: 10px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 10px;
`;

const Arrow = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
`;

const MonthYear = styled.div`
  font-size: 1.25rem;
`;

const DaysRow = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
`;

const Day = styled.div`
  width: 40px;
  text-align: center;
  font-weight: bold;
`;

const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Cell = styled.div`
  width: calc(100% / 7);
  text-align: center;
  height: 70px;
  cursor: pointer;
  background: ${(props) => (props.selected ? '#0a2c83' : 'transparent')};
  color: ${(props) =>
    props.disabled ? '#ccc' : props.selected ? 'white' : 'black'};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
  border-radius: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${(props) => (props.disabled ? 'transparent' : '#0a2c83')};
    border-radius: 30px;
    color: white;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;
  border-top: 1px solid #ccc;
`;

const SaveButton = styled.button`
  display: flex;
  width: 570px;
  height: 48px;
  color: white;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, #0a2c83, #1f5fa9);
  cursor: pointer;
  border-radius: 4px;
`;

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
  today.setHours(0, 0, 0, 0); // Reset time to midnight for comparison
  const todayString = today.toISOString().substring(0, 10);

  const handleDateClick = (date) => {
    setSelectedDate(date);
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

  const handleSave = () => {
    const formattedDate = `${selectedDate.getFullYear()}-${String(
      selectedDate.getMonth() + 1,
    ).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}`;
    onSaveDate(formattedDate);
    setShowModal(false);
  };

  const days = getDaysInMonth(currentYear, currentMonth);

  useEffect(() => {
    if (selectedDate) {
      const formattedDate = `${selectedDate.getFullYear()}-${String(
        selectedDate.getMonth() + 1,
      ).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}`;
      document.getElementById('select-date').innerText =
        `${formattedDate} 날짜 선택`;
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
        <Cell key={`prev-${i}`} disabled>
          {daysInPreviousMonth - i}
        </Cell>,
      );
    }

    days.forEach((date) => {
      cells.push(
        <Cell
          key={date}
          disabled={date < today}
          selected={selectedDate && date.getTime() === selectedDate.getTime()}
          onClick={() => handleDateClick(date)}
        >
          {date.getDate()}
        </Cell>,
      );
    });

    const remainingCells = 42 - cells.length;

    for (let i = 1; i <= remainingCells; i++) {
      cells.push(
        <Cell key={`next-${i}`} disabled>
          {i}
        </Cell>,
      );
    }

    return cells;
  };

  return (
    <>
      <InputWrapper onClick={() => setShowModal(true)}>
        <PrimaryInput
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
        <IconContainer>
          <FaRegCalendarAlt style={{ fontSize: '18px' }} />
        </IconContainer>
      </InputWrapper>
      {showModal && (
        <ModalContent>
          <ModalHeader>
            <Title>행사 일정 선택</Title>
            <CloseButton onClick={() => setShowModal(false)}>
              <IoClose style={{ color: 'white' }} />
            </CloseButton>
          </ModalHeader>
          <Header>
            <Arrow onClick={handlePrevMonth}>
              <BiChevronLeft style={{ fontSize: '28px' }} />
            </Arrow>
            <MonthYear>
              {currentYear}년 {currentMonth}월
            </MonthYear>
            <Arrow onClick={handleNextMonth}>
              <BiChevronRight style={{ fontSize: '28px' }} />
            </Arrow>
          </Header>
          <DaysRow>
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <Day key={day}>{day}</Day>
            ))}
          </DaysRow>
          <Body>{renderCalendarCells()}</Body>
          <Footer>
            <SaveButton id="select-date" onClick={handleSave}>
              날짜 선택
            </SaveButton>
          </Footer>
        </ModalContent>
      )}
    </>
  );
};

export default DateCalendar;
