import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { axiosInstance } from '../../axios';
import { USER_ID } from '../../constants';
import { FaRegCircle } from 'react-icons/fa6';
import { FaXmark } from 'react-icons/fa6';
import { FaPhone } from 'react-icons/fa6';
import { useRecoilValue } from 'recoil';
import { eventIDState } from '../../recoil/atoms/state';

// 출석 리스트 컴포넌트
const AttendanceList = () => {
  const [studentList, setStudentList] = useState([]);
  const [totalStudent, setTotalStudent] = useState(0);
  const [attendStudent, setAttendStudent] = useState(0);
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
        setTotalStudent(parsedStudents.length);
        setAttendStudent(
          parsedStudents.filter((student) => student.attendance === '출석 완료')
            .length,
        );
        setStudentList(parsedStudents);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <TotalInfoWrapper>
        <BasicFont>전체 인원</BasicFont>
        <GrayBox>{totalStudent}</GrayBox>
        <BasicFont>참석자 수</BasicFont>
        <GrayBox style={{ color: 'green' }}>{attendStudent}</GrayBox>
        <BasicFont>불참자 수</BasicFont>
        <GrayBox style={{ color: 'red' }}>
          {totalStudent - attendStudent}
        </GrayBox>
      </TotalInfoWrapper>
      <DataContent>
        {studentList.map((student, index) => (
          <StudentListItem key={index} student={student} />
        ))}
      </DataContent>
    </>
  );
};

// 학생 리스트 아이템 컴포넌트
const StudentListItem = ({ student }) => {
  return (
    <StudentListWrapper attendance={student.attendance}>
      <StudentInfoBox>
        <AttendanceIconWrapper>
          {/* <StudentSign src={student.sign} alt="" /> */}
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
          <FaPhone />
        </TelAnchor>
      </StudentInfoBox>
    </StudentListWrapper>
  );
};

export default AttendanceList;

// 스타일드 컴포넌트들
const TotalInfoWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 10px 0px;
`;

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
  /* background-color: ${({ attendance }) =>
    attendance === '출석 완료' ? '#f0fff0' : '#fff0f0'}; */

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const StudentInfoBox = styled.div`
  display: flex;
  /* justify-content: space-between; */
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

const BasicFont = styled.p`
  font-weight: 500;
  font-size: 16px;
`;

const GrayBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 30px;
  border-radius: 20px;
  background-color: #ddd;
`;

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
