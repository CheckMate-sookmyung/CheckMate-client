import * as S from './AttendanceHeader.style';
import PropTypes from 'prop-types';
import { FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const AttendanceHeader = ({ eventTitle }) => {
  return (
    <S.Container>
      <Link to="/events/dashboard/attendee">
        <S.CloseIconAnchor>
          <FiX color="#000" />
        </S.CloseIconAnchor>
      </Link>
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
