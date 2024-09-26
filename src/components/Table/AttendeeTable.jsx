import * as S from './Table.style';
import {
  FaPhone,
  FaArrowDownShortWide,
  FaArrowUpWideShort,
} from 'react-icons/fa6';
import { Dropdown } from '@/components';
import { format } from 'date-fns';
import { useState, useEffect } from 'react';

const AttendeeTable = ({
  attendees,
  editMode,
  deleteMode,
  sortData,
  handleAttendanceChange,
  handleSelectAttendee,
  sortConfig,
  showStudentInfo,
  onSelectedAttendeesChange,
}) => {
  const [selectedAttendees, setSelectedAttendees] = useState([]);

  // 전체 선택/해제 핸들러
  const handleSelectAll = (isSelected) => {
    if (isSelected) {
      setSelectedAttendees(attendees.map((attendee) => attendee.id));
      handleSelectAttendee(
        attendees.map((attendee) => attendee.id),
        true,
      );
    } else {
      setSelectedAttendees([]);
      handleSelectAttendee([], false);
    }
  };

  // 개별 선택 핸들러
  const handleSelect = (id, isSelected) => {
    if (isSelected) {
      setSelectedAttendees((prevSelected) => [...prevSelected, id]);
      handleSelectAttendee(id, true);
    } else {
      setSelectedAttendees((prevSelected) =>
        prevSelected.filter((attendeeId) => attendeeId !== id),
      );
      handleSelectAttendee(id, false);
    }
  };

  useEffect(() => {
    onSelectedAttendeesChange(selectedAttendees);
  }, [selectedAttendees]);

  const SortIcon = ({ columnKey }) => {
    if (sortConfig.key !== columnKey) return null;
    if (sortConfig.direction === 'asc') return <FaArrowUpWideShort />;
    return <FaArrowDownShortWide />;
  };

  return (
    <S.TableContainer>
      <S.Table>
        <thead>
          <tr>
            {deleteMode && (
              <S.TableHeader>
                <input
                  type="checkbox"
                  onChange={(e) => handleSelectAll(e.target.checked)}
                  checked={
                    selectedAttendees.length === attendees.length &&
                    attendees.length > 0
                  }
                />
              </S.TableHeader>
            )}
            <S.TableHeader>전화</S.TableHeader>
            <S.TableHeader onClick={() => sortData('attendance')}>
              출석
              <SortIcon columnKey="attendance" />
            </S.TableHeader>
            <S.TableHeader onClick={() => sortData('name')}>
              이름
              <SortIcon columnKey="name" />
            </S.TableHeader>
            <S.TableHeader onClick={() => sortData('major')}>
              소속
              <SortIcon columnKey="major" />
            </S.TableHeader>
            {showStudentInfo && (
              <>
                <S.TableHeader onClick={() => sortData('number')}>
                  학번
                  <SortIcon columnKey="number" />
                </S.TableHeader>
              </>
            )}
            <S.TableHeader onClick={() => sortData('attendTime')}>
              출석 시간
              <SortIcon columnKey="attendTime" />
            </S.TableHeader>
          </tr>
        </thead>

        <tbody>
          {attendees.map((data, index) => (
            <tr key={data.id}>
              {deleteMode && (
                <S.TableData>
                  <input
                    type="checkbox"
                    onChange={(e) => handleSelect(data.id, e.target.checked)}
                    checked={selectedAttendees.includes(data.id)}
                  />
                </S.TableData>
              )}
              <S.TableData>
                <S.TelAnchor href={`tel:${data.phoneNumber}`}>
                  <FaPhone style={{ color: '#0075FF' }} />
                </S.TelAnchor>
              </S.TableData>
              <S.TableData attendance={data.attendance ? '출석' : '결석'}>
                {editMode ? (
                  <Dropdown
                    items={['출석', '결석']}
                    defaultItem={data.attendance ? '출석' : '결석'}
                    onSelect={(value) => handleAttendanceChange(index, value)}
                  />
                ) : data.attendance ? (
                  '출석'
                ) : (
                  '결석'
                )}
              </S.TableData>
              <S.TableData>{data.name}</S.TableData>
              <S.TableData>{data.major}</S.TableData>
              {showStudentInfo && <S.TableData>{data.number}</S.TableData>}
              <S.TableData>
                {data.attendTime === null
                  ? '-'
                  : format(new Date(data.attendTime), 'HH:mm')}
              </S.TableData>
            </tr>
          ))}
        </tbody>
      </S.Table>
    </S.TableContainer>
  );
};

export default AttendeeTable;
