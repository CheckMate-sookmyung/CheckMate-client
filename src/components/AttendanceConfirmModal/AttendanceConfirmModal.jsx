import * as S from './AttendanceConfirmModal.style';
import PropTypes from 'prop-types';
import { AttendanceConfirmIcon } from '../../icons';
import { useNavigate } from 'react-router-dom';

const name = '조영서';

const AttendanceConfirmModal = ({ onClose }) => {
  const navigate = useNavigate();

  const handleConfirmButtonClick = () => {
    navigate('/attendance/student-id');

    onClose();
  };

  return (
    <S.ModalLayout>
      <AttendanceConfirmIcon />
      <S.Content>
        <strong>{name}</strong>님 출석 완료!
      </S.Content>
      <S.ConfirmButton onClick={handleConfirmButtonClick}>확인</S.ConfirmButton>
    </S.ModalLayout>
  );
};

AttendanceConfirmModal.propTypes = {
  name: PropTypes.string.isRequired,
};

export default AttendanceConfirmModal;
