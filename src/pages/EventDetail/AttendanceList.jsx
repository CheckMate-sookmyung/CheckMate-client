import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { axiosInstance } from '../../axios';
import { EVENT_ID, USER_ID } from '../../constants';
import { FaCheck } from 'react-icons/fa6';
import { FaXmark } from 'react-icons/fa6';

// 출석 리스트 컴포넌트
const AttendanceList = () => {
  const [studentList, setStudentList] = useState([]);
  const [totalStudent, setTotalStudent] = useState(0);
  const [attendStudent, setAttendStudent] = useState(0);

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
          }),
        );
        parsedStudents.sort((a, b) => a.name.localeCompare(b.name, 'ko'));
        setTotalStudent(parsedStudents.length);
        setAttendStudent(
          parsedStudents.filter((student) => student.attendance === '출석 완료')
            .length,
        );
        console.log(parsedStudents);
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
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <ListFont>{student.name}</ListFont>
          <div style={{ display: 'flex', gap: '10px' }}>
            <ListFont>{student.major}</ListFont>
            <ListFont>{student.number}</ListFont>
          </div>
        </div>
        <div>
          {/* <StudentSign src={student.sign} alt="" /> */}
          {student.attendance === '출석 완료' ? (
            <FaCheck className="attendance" />
          ) : (
            <FaXmark className="attendance" />
          )}
        </div>
      </div>
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

const ListFont = styled.p`
  font-size: 16px;
  margin: 0;
`;

const StudentSign = styled.img`
  width: 50px;
  height: 30px;
`;

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
