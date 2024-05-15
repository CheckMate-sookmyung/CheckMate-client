import PropTypes from 'prop-types';
import * as S from './Modal.style';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Portal from '../Portal/Portal';

const Modal = ({ name, major, studentId, isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleCompletedButtonClick = async () => {
    onClose();
    navigate('/attendance/sign');
  };

  const handleCancelButtonClick = async () => {
    onClose();
    navigate('/attendance/student-id');
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Portal portalKey="modal-layout">
      <S.ModalLayout>
        <S.Title>
          <strong>{name}</strong>님이 맞으십니까?
        </S.Title>
        <S.ContentContainer>
          <S.Content>
            <S.ContentTitle>학과</S.ContentTitle>
            <S.ContentDescription>{major}</S.ContentDescription>
          </S.Content>
          <S.Content>
            <S.ContentTitle>학번</S.ContentTitle>
            <S.ContentDescription>{studentId}</S.ContentDescription>
          </S.Content>
        </S.ContentContainer>
        <S.ButtonContainer>
          <S.CancelButton onClick={handleCancelButtonClick}>
            아니요
          </S.CancelButton>
          <S.CompletedButton onClick={handleCompletedButtonClick}>
            서명하러 하기
          </S.CompletedButton>
        </S.ButtonContainer>
      </S.ModalLayout>
    </Portal>
  );
};

Modal.propTypes = {
  name: PropTypes.string.isRequired,
  major: PropTypes.string.isRequired,
  studentId: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
