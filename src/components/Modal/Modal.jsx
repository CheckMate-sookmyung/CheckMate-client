import PropTypes from 'prop-types';
import * as S from './Modal.style';
import { useNavigate } from 'react-router-dom';
import Portal from '../Portal/Portal';

const Modal = ({ isOpen, onClose, attendees }) => {
  const navigate = useNavigate();

  const handlePersonClick = (studentInfo) => {
    onClose();
    navigate('/attendance/sign', {
      state: { studentInfo },
    });
  };

  const handleCancelButtonClick = () => {
    onClose();
    navigate('/attendance/student-id');
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Portal portalKey="modal-layout">
      <S.ModalLayout>
        <S.Title>출석 체크 할 사람을 선택해주세요.</S.Title>
        <S.ContentContainer>
          {attendees.map((attendee, index) => (
            <S.Content key={index} onClick={() => handlePersonClick(attendee)}>
              <S.ContentTitle>{attendee.studentName}</S.ContentTitle>
              <S.ContentDescription>{attendee.major}</S.ContentDescription>
            </S.Content>
          ))}
        </S.ContentContainer>
        <S.ButtonContainer>
          <S.CancelButton onClick={handleCancelButtonClick}>
            이전으로
          </S.CancelButton>
        </S.ButtonContainer>
      </S.ModalLayout>
    </Portal>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  attendees: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      major: PropTypes.string.isRequired,
      studentId: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Modal;
