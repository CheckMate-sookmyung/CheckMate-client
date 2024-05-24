import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { axiosInstance } from '../../axios';
import { EVENT_ID, USER_ID } from '../../constants';

// 출석 리스트 컴포넌트
const AttendanceList = ({ onClose }) => {
  const [studentList, setStudentList] = useState([]);

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
            attendance: student.attendance ? '출석 완료' : '',
            sign: student.sign,
          }),
        );
        setStudentList(parsedStudents);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <ModalBackground>
      <ModalContent>
        <Title>[AI & ML Ops Application (심화과정) 프로젝트] 출석체크</Title>
        <DataContent>
          {studentList.map((student, index) => (
            <StudentListItem key={index} student={student} />
          ))}
        </DataContent>
        <ButtonWrapper>
          <CancelButton onClick={onClose}>닫기</CancelButton>
        </ButtonWrapper>
      </ModalContent>
    </ModalBackground>
  );
};

// 학생 리스트 아이템 컴포넌트
const StudentListItem = ({ student }) => {
  return (
    <StudentListWrapper>
      <FontWrapper>
        <ListFont>{student.name}</ListFont>
        <ListFont>{student.number}</ListFont>
        <ListFont>{student.attendance}</ListFont>
        <StudentSign src={student.sign} alt="" />
      </FontWrapper>
    </StudentListWrapper>
  );
};

// 스타일드 컴포넌트들
const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
`;

const ModalContent = styled.div`
  width: 60%;
  height: 80vh;
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  overflow: auto;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;

const DataContent = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  gap: 20px;
`;

const StudentListWrapper = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
`;

const FontWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const ListFont = styled.p`
  font-size: 16px;
  color: #333;
  margin: 0;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

const CancelButton = styled.button`
  width: 100px;
  height: 36px;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 14px;
  background-color: #0a2c83;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0d47a1;
  }
`;

const StudentSign = styled.img`
  max-width: 70px;
  max-height: 70px;
  object-fit: cover;
  border-radius: 50%;
`;

export default AttendanceList;
