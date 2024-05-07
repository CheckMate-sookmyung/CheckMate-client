import * as S from './AttendanceConfirmModal.style';
import PropTypes from 'prop-types';
import { AttendanceConfirmIcon } from '../../icons';

const name = '조영서';

const AttendanceConfirmModal = () => {
  return (
    <S.ModalLayout>
      <AttendanceConfirmIcon />
      <S.Content>
        <strong>{name}</strong>님 출석 완료!
      </S.Content>
      <S.ConfirmButton>확인</S.ConfirmButton>
    </S.ModalLayout>
  );
};

AttendanceConfirmModal.propTypes = {
  name: PropTypes.string.isRequired,
};

export default AttendanceConfirmModal;
