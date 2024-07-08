import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { LuClock } from 'react-icons/lu';
import * as S from './TimeCalendarStyle';

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
    <S.Container>
      <S.InputWrapper>
        <S.PrimaryInput
          placeholder={time ? time : timeLabel}
          readOnly
          onClick={handleOpenModal}
        />
        <S.IconContainer onClick={handleOpenModal}>
          <LuClock style={{ fontSize: '18px' }} />
        </S.IconContainer>
      </S.InputWrapper>
      {isModalOpen && (
        <S.ModalContent>
          <S.ModalHeader>
            <S.ModalTitle>행사 시간 선택</S.ModalTitle>
            <S.CloseButton onClick={handleCloseModal}>
              <IoClose style={{ color: 'white', fontSize: '24px' }} />
            </S.CloseButton>
          </S.ModalHeader>
          <S.TimePickerContainer>
            <S.TimeColumn>
              <S.TimeLabel>시간</S.TimeLabel>
              {hours.map((hour) => (
                <S.TimeOption
                  key={hour}
                  selected={selectedHour === hour}
                  onClick={() => handleHourClick(hour)}
                >
                  {hour}
                </S.TimeOption>
              ))}
            </S.TimeColumn>
            <S.TimeColumn>
              <S.TimeLabel>분</S.TimeLabel>
              {minutes.map((minute) => (
                <S.TimeOption
                  key={minute}
                  selected={selectedMinute === minute}
                  onClick={() => handleMinuteClick(minute)}
                >
                  {minute}
                </S.TimeOption>
              ))}
            </S.TimeColumn>
          </S.TimePickerContainer>
          <S.Footer />
          <S.ButtonWrapper>
            <S.ConfirmButton onClick={handleSave}>
              {selectedHour}시 {selectedMinute}분 확인
            </S.ConfirmButton>
          </S.ButtonWrapper>
        </S.ModalContent>
      )}
    </S.Container>
  );
};

export default TimeCalendar;
