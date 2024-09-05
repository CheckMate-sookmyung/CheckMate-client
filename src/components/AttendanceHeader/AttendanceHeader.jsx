import * as S from './AttendanceHeader.style';
import PropTypes from 'prop-types';
import { FiX } from 'react-icons/fi';

const AttendanceHeader = ({ eventTitle }) => {
  return (
    <S.Container>
      <S.CloseIconAnchor href="/event">
        <FiX color="#000" />
      </S.CloseIconAnchor>
      <S.ContentContainer>
        <S.Title>
          {eventTitle}
          <span>출석체크</span>
        </S.Title>
      </S.ContentContainer>
    </S.Container>
  );
};

AttendanceHeader.propTypes = {
  event: PropTypes.string.isRequired,
  activeStep: PropTypes.number.isRequired,
};

export default AttendanceHeader;
