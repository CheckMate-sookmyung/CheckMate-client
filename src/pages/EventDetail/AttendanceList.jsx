import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { axiosInstance } from '../../axios';
import { EVENT_ID, USER_ID } from '../../constants';

const AttendanceList = ({ onClose }) => {
  const [studentList, setStudentList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(
          `/api/v1/events/attendanceList/${USER_ID}/${EVENT_ID}`,
        );
        const parsedStudents = response.data[1].attendanceListResponseDtos.map(
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
        <Title>[AI & ML Ops Foundation (입문과정)] 출석체크</Title>
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

const StudentListItem = ({ student }) => {
  return (
    <StudentListWrapper>
      <FontWrapper>
        <ListFont>{student.name}</ListFont>
        <ListFont>{student.number}</ListFont>
        <ListFont>{student.attendance}</ListFont>
        <SignWrapper>
          <StudentSign src={student.sign} alt="" />
        </SignWrapper>
      </FontWrapper>
    </StudentListWrapper>
  );
};

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
  justify-content: center;
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  overflow: auto;
`;

const DataContent = styled.div`
  margin-top: 40px;
  columns: 2;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;

const StudentListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  background-color: #f9f9f9;
`;

const FontWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const ListFont = styled.p`
  font-size: 16px;
  color: #333;
  margin: 0;
  flex: 1;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

const StudentSign = styled.img`
  max-width: 70px;
  max-height: 70px;
  object-fit: cover;
  border-radius: 50%;
`;

const SignWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
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
`;

export default AttendanceList;
