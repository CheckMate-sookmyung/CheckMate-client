import * as S from './AttendanceHeader.style';
import { CloseIcon } from '../../icons';
import Stepper from '../Stepper';

const AttendanceHeader = ({ event }) => {
  return (
    <S.Container>
      <S.CloseIconContainer>
        <CloseIcon />
      </S.CloseIconContainer>
      <S.ContentContainer>
        <S.Title>{`[${event}] 출석체크`}</S.Title>
        <Stepper stepLabelList={['QR코드', '학번 입력', '전자 서명']} />
      </S.ContentContainer>
    </S.Container>
  );
};

export default AttendanceHeader;
