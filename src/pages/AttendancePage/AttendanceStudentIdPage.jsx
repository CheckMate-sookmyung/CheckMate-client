import React, { useEffect, useState } from 'react';
import * as S from './AttendanceStudentIdPage.style';
import { AttendanceHeader } from '../../components';
import { USER_ID } from '../../constants';
import { useSessionStorages } from '../../hooks';
import { axiosInstance } from '../../axios';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { eventIDState } from '../../recoil/atoms/state';

const AttendanceStudentIdPage = () => {
  const navigate = useNavigate();
  const [enteredDials, setEnteredDials] = useState([]);
  const [attendanceCheck, setAttendanceCheck] = useState();
  const [eventTitle, setEventTitle] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [isAlreadyCompleted, setIsAlreadyCompleted] = useState(false);
  const [isNoMatch, setIsNoMatch] = useState(false);
  const EVENT_ID = useRecoilValue(eventIDState);

  const { setSessionStorage } = useSessionStorages();

  const studentId = Array.from({ length: 7 }, (_, index) => index + 1);
  const dialList = Array.from({ length: 9 }, (_, index) => index + 1);

  const isSevenDigits = enteredDials.length === 7;
  const isConfirmEnabled = isSevenDigits;

  const getAttendanceCheck = async (params) => {
    const { data } = await axiosInstance.get(
      `/api/v1/attendance/check/${USER_ID}/${EVENT_ID}`,
      {
        params: {
          studentNumber: params.studentNumber,
          eventDate: params.eventDate,
        },
      },
    );
    return data;
  };

  const handleDialClick = async (dial) => {
    if (dial === '<') {
      setEnteredDials(enteredDials.slice(0, -1));
    } else if (dial === '서명하러 가기' && isConfirmEnabled) {
      try {
        const data = await getAttendanceCheck({
          studentNumber: Number(enteredDials.join('')),
          eventDate,
        });

        if (!data) {
          setIsNoMatch(true);
          alert('일치하는 학번이 없습니다');
        } else if (data.isAlreadyCompleted) {
          setIsAlreadyCompleted(true);
          alert('이미 출석을 완료하였습니다');
        } else {
          const parsedStudent = {
            name: data.studentName,
            number: data.studentNumber,
            major: data.major,
          };

          setAttendanceCheck(data);
          setSessionStorage('attendance', JSON.stringify(data));
          navigate('/attendance/sign', {
            state: { studentInfo: parsedStudent },
          });
        }
      } catch (error) {
        setEnteredDials([]);
        if (error.response && error.response.status === 404) {
          alert('일치하는 학번이 없습니다');
        } else {
          alert('API 에러 발생');
        }
      }
    } else {
      if (enteredDials.length < 7 && dial !== '서명하러 가기') {
        setEnteredDials([...enteredDials, dial]);
      }
    }
  };

  useEffect(() => {
    console.log('USER_ID:', USER_ID);
    console.log('EVENT_ID:', EVENT_ID);
    const fetchEventDetails = async () => {
      try {
        const response = await axiosInstance.get(
          `/api/v1/events/${USER_ID}/${EVENT_ID}`,
        );
        setEventTitle(response.data.eventTitle);
        setEventDate(response.data.eventSchedules[0].eventDate); // 첫 번째 스케줄의 날짜를 가져옴
      } catch (error) {
        console.error('이벤트 정보를 가져오는 중 에러 발생:', error);
      }
    };

    fetchEventDetails();
  }, [EVENT_ID, USER_ID]);

  return (
    <S.Container>
      <AttendanceHeader eventTitle={eventTitle} />
      <S.Title>학번을 입력해주세요.</S.Title>
      <S.StudentIdContainer>
        {studentId.map((index) => (
          <S.StudentId key={index}>{enteredDials[index - 1] || ''}</S.StudentId>
        ))}
      </S.StudentIdContainer>
      <S.DialList>
        {dialList.map((dial, index) => (
          <S.Dial key={index} onClick={() => handleDialClick(dial)}>
            {dial}
          </S.Dial>
        ))}

        <S.Dial key="backspace" onClick={() => handleDialClick('<')}>
          {'←'}
        </S.Dial>
        <S.Dial key="zero" onClick={() => handleDialClick('0')}>
          {'0'}
        </S.Dial>
        <S.GoToSignBtn
          key="confirm"
          onClick={() => handleDialClick('서명하러 가기')}
          isSevenDigits={isSevenDigits}
          disabled={!isConfirmEnabled}
        >
          {'서명하러 가기'}
        </S.GoToSignBtn>
      </S.DialList>
    </S.Container>
  );
};

export default AttendanceStudentIdPage;
