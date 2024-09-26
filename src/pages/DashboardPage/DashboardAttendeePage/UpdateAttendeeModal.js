import React, { useState } from 'react';
import { Modal, Input, Button } from '@/components';
import * as S from './DashboardAttendeePage.style';

export default function AttendeeModal({
  isOpen,
  onClose,
  onAdd,
  newAttendee,
  onInputChange,
  eventTarget,
}) {
  const [selectedFile, setSelectedFile] = useState(null);

  if (!isOpen) return null;

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    onInputChange({ target: { name: 'attachment', value: file } });
  };

  return (
    <Modal onClose={onClose}>
      <S.ModalTitle>참석자 추가</S.ModalTitle>
      <S.ModalInputWrapper>
        <Input
          name="name"
          placeholder="이름"
          value={newAttendee.name}
          onChange={onInputChange}
        />
        <Input
          name="major"
          placeholder="소속"
          value={newAttendee.major}
          onChange={onInputChange}
        />
        {/* INTERNAL 행사인 경우에만 표시 */}
        {eventTarget === 'INTERNAL' && (
          <Input
            name="studentNumber"
            placeholder="학번"
            value={newAttendee.studentNumber}
            onChange={onInputChange}
          />
        )}
        <Input
          name="phoneNumber"
          placeholder="휴대폰 번호 ex) 010-1234-5678"
          value={newAttendee.phoneNumber}
          onChange={onInputChange}
        />

        {/* ONLINE인 행사인 경우에만 표시 */}
        {eventTarget === 'ONLINE' && (
          <S.FileUploadWrapper>
            <S.FileLabel htmlFor="file-upload">
              {selectedFile ? selectedFile.name : '파일 선택'}
            </S.FileLabel>
            <input
              id="file-upload"
              type="file"
              name="attachment"
              accept=".pdf,.doc,.docx,.png,.jpg"
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
          </S.FileUploadWrapper>
        )}
      </S.ModalInputWrapper>
      <S.ModalButtonWrapper>
        <Button
          onClick={onClose}
          backgroundColor="#F2F2F2"
          textColor="#000"
          label="닫기"
        />
        <Button onClick={onAdd} label="추가하기" />
      </S.ModalButtonWrapper>
    </Modal>
  );
}
