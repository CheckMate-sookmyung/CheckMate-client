import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { axiosInstance } from '../../axios';
import { USER_ID } from '../../constants';
import { FaRegCircle, FaXmark, FaPhone } from 'react-icons/fa6';
import { useRecoilValue } from 'recoil';
import { eventIDState } from '../../recoil/atoms/state';
import { BREAKPOINTS } from '../../styles';

// 학생 리스트 아이템 컴포넌트
const StudentListItem = () => {
  const [studentList, setStudentList] = useState([]);
  const EVENT_ID = useRecoilValue(eventIDState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(
          `/api/v1/events/attendanceList/${USER_ID}/${EVENT_ID}`,
        );
        const parsedStudents = response.data[0].attendanceListResponseDtos.map(
          (student) => ({
            name: student.studentName,
            number: student.studentNumber,
            major: student.major,
            attendance: student.attendance ? '출석 완료' : '미출석',
            sign: student.sign,
            phoneNumber: student.phoneNumber,
          }),
        );
        parsedStudents.sort((a, b) => a.name.localeCompare(b.name, 'ko'));
        setStudentList(parsedStudents);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [EVENT_ID]);

  return (
    <DataContent>
      {studentList.map((student, index) => (
        <StudentItem key={index} student={student} />
      ))}
    </DataContent>
  );
};

const StudentItem = ({ student }) => {
  return (
    <StudentListWrapper attendance={student.attendance}>
      <StudentInfoBox>
        <AttendanceIconWrapper>
          {student.attendance === '출석 완료' ? (
            <FaRegCircle
              className="attendance"
              style={{
                color: 'green',
              }}
            />
          ) : (
            <FaXmark className="attendance" style={{ color: 'red' }} />
          )}
        </AttendanceIconWrapper>
        <StudentInfo>
          <StudentName>{student.name}</StudentName>
          <StudentInfoDetail>
            <StudentMajor>{student.major}</StudentMajor>
            <StudentNumber>{student.number}</StudentNumber>
          </StudentInfoDetail>
        </StudentInfo>
        <TelAnchor href={`tel:${student.phoneNumber}`}>
          <FaPhone style={{ color: '#0075FF' }} />
        </TelAnchor>
      </StudentInfoBox>
    </StudentListWrapper>
  );
};

export default StudentListItem;

// 스타일드 컴포넌트들
const DataContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

const StudentListWrapper = styled.div`
  width: calc(50% - 10px);
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    width: 100%;
  }
`;

const StudentInfoBox = styled.div`
  display: flex;
`;

const StudentInfo = styled.div`
  line-height: 1.4;
  padding: 0 6px;
`;

const StudentInfoDetail = styled.div`
  display: flex;
  gap: 6px;
  font-size: 12px;
  color: #636363;
`;

const StudentName = styled.p`
  font-size: 16px;
  margin: 0;
`;

const StudentMajor = styled.p``;

const StudentNumber = styled.p``;

const AttendanceIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 6px;
`;

const TelAnchor = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: auto;
  padding: 6px;
`;
