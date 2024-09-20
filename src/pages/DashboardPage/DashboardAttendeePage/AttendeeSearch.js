import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Search } from '@/components';

function AttendeeSearch({
  attendees,
  searchQuery,
  setSearchQuery,
  setFilteredAttendees,
}) {
  useEffect(() => {
    const filtered = attendees.filter((attendee) => {
      const searchLower = searchQuery.toLowerCase();
      return (
        attendee.name.toLowerCase().includes(searchLower) ||
        (attendee.number
          ? String(attendee.number).toLowerCase().includes(searchLower)
          : false) ||
        attendee.email.toLowerCase().includes(searchLower) ||
        attendee.phoneNumber.toLowerCase().includes(searchLower)
      );
    });
    setFilteredAttendees(filtered);
  }, [searchQuery, attendees, setFilteredAttendees]);

  return (
    <Search
      onSearch={setSearchQuery}
      placeholder="이름, 학번, 이메일, 전화번호로 검색"
    />
  );
}

AttendeeSearch.propTypes = {
  attendees: PropTypes.array.isRequired,
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
  setFilteredAttendees: PropTypes.func.isRequired,
};

export default AttendeeSearch;
