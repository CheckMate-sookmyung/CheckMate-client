import * as S from './AttendanceConfirmModal.style';
import PropTypes from 'prop-types';
import { AttendanceConfirmIcon } from '../../icons';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const AttendanceConfirmModal = ({ name, onClose }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/attendance/student-id');
      onClose();
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate, onClose]);

  return (
    <S.ModalLayout>
      <AttendanceConfirmIcon />
      <S.Content>
        <strong>{name}</strong>님 출석 완료!
      </S.Content>
    </S.ModalLayout>
  );
};

AttendanceConfirmModal.propTypes = {
  name: PropTypes.string.isRequired,
};

export default AttendanceConfirmModal;
