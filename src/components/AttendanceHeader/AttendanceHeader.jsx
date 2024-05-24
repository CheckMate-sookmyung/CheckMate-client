import * as S from './AttendanceHeader.style';
import Stepper from '../Stepper';
import PropTypes from 'prop-types';
import { FiX } from 'react-icons/fi';

const AttendanceHeader = ({ eventTitle, activeStep }) => {
  return (
    <S.Container>
      <S.CloseIconAnchor href="/currentevent">
        <FiX color="#fff" />
      </S.CloseIconAnchor>
      <S.ContentContainer>
        <S.Title>{`[${eventTitle}] 출석체크`}</S.Title>
        <Stepper
          stepLabelList={['학번 입력', '전자 서명', '출석완료']}
          activeStep={activeStep}
        />
      </S.ContentContainer>
    </S.Container>
  );
};

AttendanceHeader.propTypes = {
  event: PropTypes.string.isRequired,
  activeStep: PropTypes.number.isRequired,
};

export default AttendanceHeader;
