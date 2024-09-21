import * as S from './Table.style';
import {
  FaPhone,
  FaArrowDownShortWide,
  FaArrowUpWideShort,
} from 'react-icons/fa6';
import { BsEye } from 'react-icons/bs';
import { Dropdown } from '@/components';

const AttendeeTable = ({
  attendees,
  editMode,
  sortData,
  handleAttendanceChange,
  sortConfig,
  showStudentInfo,
}) => {
  const SortIcon = ({ columnKey }) => {
    if (sortConfig.key !== columnKey) return null;
    if (sortConfig.direction === 'asc') return <FaArrowUpWideShort />;
    return <FaArrowDownShortWide />;
  };

  // 시간 형식 HH:MM
  const formatAttendTime = (time) => {
    if (!time) return '-';
    const date = new Date(time);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  return (
    <S.TableContainer>
      <S.Table>
        <thead>
          <tr>
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
                <S.TableHeader onClick={() => sortData('year')}>
                  학년
                  <SortIcon columnKey="year" />
                </S.TableHeader>
              </>
            )}
            <S.TableHeader onClick={() => sortData('phoneNumber')}>
              휴대폰 번호
              <SortIcon columnKey="phoneNumber" />
            </S.TableHeader>
            {/* 출석 시간 열 추가 */}
            <S.TableHeader onClick={() => sortData('attendTime')}>
              출석 시간
              <SortIcon columnKey="attendTime" />
            </S.TableHeader>
            {/* <S.TableHeader></S.TableHeader> */}
          </tr>
        </thead>
        <tbody>
          {attendees.map((data, index) => (
            <tr key={index}>
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
              {showStudentInfo && (
                <>
                  <S.TableData>{data.number}</S.TableData>
                  <S.TableData>{data.year}</S.TableData>
                </>
              )}
              <S.TableData>{data.phoneNumber}</S.TableData>
              <S.TableData>{formatAttendTime(data.attendTime)}</S.TableData>
              {/* <S.TableData>
                <BsEye />
              </S.TableData> */}
            </tr>
          ))}
        </tbody>
      </S.Table>
    </S.TableContainer>
  );
};

export default AttendeeTable;
