import * as S from './AttendanceHeader.style';
import PropTypes from 'prop-types';
import { FiX } from 'react-icons/fi';

const AttendanceHeader = ({ eventTitle }) => {
  return (
    <S.Container>
      <S.CloseIconAnchor onClick={() => window.history.back()}>
        <FiX color="#000" />
      </S.CloseIconAnchor>
      <S.ContentContainer>
        <S.Title>
          <em>{eventTitle}</em>
          <span>출석체크</span>
        </S.Title>
      </S.ContentContainer>
    </S.Container>
  );
};

AttendanceHeader.propTypes = {
  eventTitle: PropTypes.string.isRequired,
};

export default AttendanceHeader;
