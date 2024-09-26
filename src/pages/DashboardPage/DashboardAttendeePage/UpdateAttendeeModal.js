import { useState } from 'react';
import { Modal, Input, Button } from '@/components';
import * as S from './DashboardAttendeePage.style';
import { postAttendance } from '@/apis';
import { useMutation } from '@tanstack/react-query';

export default function UpdateAttendeeModal({
  isOpen,
  eventId,
  eventScheduleId,
  eventTarget,
  onSuccess,
  onError,
  onClose,
}) {
  const [attendeeName, setAttendeeName] = useState('');
  const [attendeeStudentNumber, setAttendeeStudentNumber] = useState(null);
  const [attendeeAffiliation, setAttendeeAffiliation] = useState('');
  const [attendeePhoneNumber, setAttendeePhoneNumber] = useState('');
  const [attendeeEmail, setAttendeeEmail] = useState('');

  const { mutate: postAttendanceMutate, isLoading: isPostAttendanceLoading } =
    useMutation({
      mutationKey: ['postAttendance'],
      mutationFn: (body) => postAttendance(eventId, eventScheduleId, body),
      onSuccess: () => {
        alert('추가 성공');

        if (onSuccess !== undefined) {
          onSuccess();
        }
      },
      onError: () => {
        alert('추가 실패');

        if (onError !== undefined) {
          onError();
        }
      },
    });

  const handleAttendeeNameInputChange = (e) => {
    setAttendeeName(e.target.value);
  };

  const handleAttendeeStudentNumberInputChange = (e) => {
    setAttendeeStudentNumber(e.target.value);
  };

  const handleAttendeeAffiliationInputChange = (e) => {
    setAttendeeAffiliation(e.target.value);
  };

  const handleAttendeePhoneNumberInputChange = (e) => {
    setAttendeePhoneNumber(e.target.value);
  };

  const handleAttendeeEmailInputChange = (e) => {
    setAttendeeEmail(e.target.value);
  };

  const handleAddButtonClick = () => {
    postAttendanceMutate([
      {
        attendeeName,
        attendeeStudentNumber,
        attendeeAffiliation,
        attendeePhoneNumber,
        attendeeEmail,
      },
    ]);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Modal onClose={onClose}>
      <S.ModalTitle>참석자 추가</S.ModalTitle>
      <S.ModalInputWrapper>
        <Input
          name="name"
          placeholder="이름"
          value={attendeeName}
          onChange={handleAttendeeNameInputChange}
        />
        <Input
          name="major"
          placeholder="소속"
          value={attendeeAffiliation}
          onChange={handleAttendeeAffiliationInputChange}
        />
        {/* INTERNAL 행사인 경우에만 표시 */}
        {eventTarget === 'INTERNAL' && (
          <Input
            name="studentNumber"
            placeholder="학번"
            value={attendeeStudentNumber}
            onChange={handleAttendeeStudentNumberInputChange}
          />
        )}
        <Input
          name="phoneNumber"
          placeholder="휴대폰 번호 ex) 010-1234-5678"
          value={attendeePhoneNumber}
          onChange={handleAttendeePhoneNumberInputChange}
        />
        <Input
          name="email"
          placeholder="이메일 ex) checkmate@gmail.com"
          value={attendeeEmail}
          onChange={handleAttendeeEmailInputChange}
        />
      </S.ModalInputWrapper>
      <S.ModalButtonWrapper>
        <Button
          onClick={onClose}
          backgroundColor="#F2F2F2"
          textColor="#000"
          label="닫기"
        />
        <Button
          disabled={isPostAttendanceLoading}
          onClick={handleAddButtonClick}
          label="추가하기"
        />
      </S.ModalButtonWrapper>
    </Modal>
  );
}
