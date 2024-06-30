import React, { useState } from 'react';
import styled from 'styled-components';
import { IoClose } from 'react-icons/io5';
import { LuClock } from 'react-icons/lu';

const Container = styled.div`
  position: relative;
  display: flex;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const PrimaryInput = styled.input`
  width: 200px;
  height: 56px;
  padding-left: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  font-size: 14px;
`;

const IconContainer = styled.div`
  display: flex;
  position: absolute;
  cursor: pointer;
  font-size: 25px;
  right: 10px;
`;

const ModalContent = styled.div`
  position: fixed;
  background: white;
  border-radius: 8px;
  width: 200px;
  height: 300px;
  margin-top: 56px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1;
  overflow: scroll;
  box-shadow: 0px 0px 20px #e0e0e0;
`;

const ModalHeader = styled.div`
  display: flex;
  text-align: center;
  font-size: 18px;
  align-items: center;
  justify-content: center;
  color: white;
  background: linear-gradient(to right, #0a2c83, #1f5fa9);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const ModalTitle = styled.p`
  font-size: 16px;
  margin: 0;
  padding: 15px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  position: absolute;
  right: 10px;
`;

const TimePickerContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const TimeColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TimeLabel = styled.div`
  margin: 10px 0;
  font-size: 16px;
  font-weight: bold;
`;

const TimeOption = styled.div`
  padding: 10px;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? '#0a2c83' : 'white')};
  color: ${(props) => (props.selected ? 'white' : 'black')};
  border-radius: 4px;
  margin-bottom: 5px;
  width: 50px;
  text-align: center;
  overflow: scroll;
  &:hover {
    background-color: ${(props) => (props.selected ? '#0a2c83' : '#f0f0f0')};
  }
`;

const ButtonWrapper = styled.div`
  padding: 10px;
`;

const ConfirmButton = styled.button`
  background-color: #0a2c83;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid #ccc;
`;

const TimeCalendar = ({ timeLabel, onSaveTime }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedHour, setSelectedHour] = useState('09');
  const [selectedMinute, setSelectedMinute] = useState('00');
  const [time, setTime] = useState('');

  const hours = Array.from({ length: 13 }, (_, i) =>
    String(i + 9).padStart(2, '0'),
  );
  const minutes = ['00', '30'];

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleHourClick = (hour) => {
    setSelectedHour(hour);
  };

  const handleMinuteClick = (minute) => {
    setSelectedMinute(minute);
  };

  const handleSave = () => {
    const selectedTime = `${selectedHour}:${selectedMinute}`;
    setTime(selectedTime);
    onSaveTime(selectedTime);
    handleCloseModal();
  };

  return (
    <Container>
      <InputWrapper>
        <PrimaryInput
          placeholder={time ? time : timeLabel}
          readOnly
          onClick={handleOpenModal}
        />
        <IconContainer onClick={handleOpenModal}>
          <LuClock style={{ fontSize: '18px' }} />
        </IconContainer>
      </InputWrapper>
      {isModalOpen && (
        <ModalContent>
          <ModalHeader>
            <ModalTitle>행사 시간 선택</ModalTitle>
            <CloseButton onClick={handleCloseModal}>
              <IoClose style={{ color: 'white', fontSize: '24px' }} />
            </CloseButton>
          </ModalHeader>
          <TimePickerContainer>
            <TimeColumn>
              <TimeLabel>시간</TimeLabel>
              {hours.map((hour) => (
                <TimeOption
                  key={hour}
                  selected={selectedHour === hour}
                  onClick={() => handleHourClick(hour)}
                >
                  {hour}
                </TimeOption>
              ))}
            </TimeColumn>
            <TimeColumn>
              <TimeLabel>분</TimeLabel>
              {minutes.map((minute) => (
                <TimeOption
                  key={minute}
                  selected={selectedMinute === minute}
                  onClick={() => handleMinuteClick(minute)}
                >
                  {minute}
                </TimeOption>
              ))}
            </TimeColumn>
          </TimePickerContainer>
          <Footer />
          <ButtonWrapper>
            <ConfirmButton onClick={handleSave}>
              {selectedHour}시 {selectedMinute}분 확인
            </ConfirmButton>
          </ButtonWrapper>
        </ModalContent>
      )}
    </Container>
  );
};

export default TimeCalendar;
