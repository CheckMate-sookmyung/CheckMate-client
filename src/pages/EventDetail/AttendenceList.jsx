import styled from 'styled-components';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { axiosInstance } from '../../axios';

const USER_ID = 500;
const EVENT_ID = 1102;

const AttendanceList = ({ onClose }) => {
  const [studentList, setStudentList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(
          `/api/v1/event/list/${USER_ID}/${EVENT_ID}`,
          {
            header: {
              'ngrok-skip-browser-warning': '69420',
            },
          },
        );
        console.log('response: ', response.data);

        const parsedStudents = response.data[0].attendanceListResponseDtos.map(
          (student) => ({
            name: student.studentName,
            number: student.studentNumber,
            major: student.major,
            attendance: student.attendance ? '출석 완료' : '출석 미완료',
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
      <Fontwrapper>
        <ListFont>{student.name}</ListFont>
        <ListFont>{student.number}</ListFont>
        <ListFont>{student.attendance}</ListFont>
      </Fontwrapper>
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
  height: auto;
  justify-content: center;
  background-color: white;
  border-radius: 20px;
  padding: 20px;
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
  margin-bottom: 10px;
`;

const Fontwrapper = styled.div`
  display: flex;
  gap: 30px;
`;

const ListFont = styled.p`
  font-size: 18px;
  margin: 5px 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const CancelButton = styled.button`
  width: 120px;
  height: 36px;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 16px;
  background-color: #1f5fa9;
  cursor: pointer;

  &:hover {
    background-color: #144281;
  }
`;

export default AttendanceList;
