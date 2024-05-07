import * as S from './AttendanceCompletedModal.style';

const AttendanceCompletedModal = () => {
  return (
    <S.ModalLayout>
      <S.Content>이미 출석이 완료되었습니다.</S.Content>
      <S.ConfirmButton>확인</S.ConfirmButton>
    </S.ModalLayout>
  );
};

export default AttendanceCompletedModal;
