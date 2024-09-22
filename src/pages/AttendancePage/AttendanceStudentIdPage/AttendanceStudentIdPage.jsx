import { useEffect, useState } from 'react';
import * as S from './AttendanceStudentIdPage.style';
import { AttendanceHeader, Modal } from '@/components';
import { useSessionStorages } from '@/hooks';
import { axiosInstance } from '@/axios';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { eventIDState } from '@/recoil/atoms/state';
import { format } from 'date-fns';

const AttendanceStudentIdPage = () => {
  const navigate = useNavigate();
  const [enteredDials, setEnteredDials] = useState([]);
  const [attendanceCheck, setAttendanceCheck] = useState();
  const [eventTitle, setEventTitle] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [isAlreadyCompleted, setIsAlreadyCompleted] = useState(false);
  const [isNoMatch, setIsNoMatch] = useState(false);
  const [eventTarget, setEventTarget] = useState('INTERNAL');
  const [attendees, setAttendees] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const EVENT_ID = useRecoilValue(eventIDState);

  const { setSessionStorage } = useSessionStorages();

  const studentId = Array.from({ length: 7 }, (_, index) => index + 1);
  const phoneId = Array.from({ length: 4 }, (_, index) => index + 1);
  const dialList = Array.from({ length: 9 }, (_, index) => index + 1);

  const isSevenDigits =
    eventTarget === 'INTERNAL'
      ? enteredDials.length === 7
      : enteredDials.length === 4;
  const isConfirmEnabled = isSevenDigits;

  const getAttendanceCheck = async (params) => {
    const url =
      eventTarget === 'INTERNAL'
        ? `/api/v1/attendance/check/studentNumber/${EVENT_ID}`
        : `/api/v1/attendance/check/phoneNumber/${EVENT_ID}`;

    console.log('API 호출 URL:', url);
    console.log('API 호출 파라미터:', {
      [eventTarget === 'INTERNAL' ? 'studentNumber' : 'phoneNumber']:
        params.number,
      eventDate: params.eventDate,
    });

    const { data } = await axiosInstance.get(url, {
      params: {
        [eventTarget === 'INTERNAL' ? 'studentNumber' : 'phoneNumber']:
          params.number,
        eventDate: params.eventDate,
      },
    });
    return data;
  };

  const handleDialClick = async (dial) => {
    if (dial === '<') {
      setEnteredDials(enteredDials.slice(0, -1));
    } else if (dial === '서명하러 가기' && isConfirmEnabled) {
      try {
        const numberString = enteredDials.join('');
        const data = await getAttendanceCheck({
          number: numberString,
          eventDate: format(new Date(), 'yyyy-MM-dd'),
        });

        if (!data || (Array.isArray(data) && data.length === 0)) {
          setIsNoMatch(true);
          alert('일치하는 정보가 없습니다');
        } else if (data.isAlreadyCompleted) {
          setIsAlreadyCompleted(true);
          alert('이미 출석을 완료하였습니다');
        } else if (Array.isArray(data) && data.length > 1) {
          // 동일한 휴대폰 번호 뒷 4자리를 가진 사람이 여러 명인 경우
          setAttendees(data);
          setIsModalOpen(true);
        } else {
          const parsedStudent = {
            studentName: data.attendeeName,
            studentNumber: data.studentNumber,
            studentInfoId: data.attendeeId,
            major: data.attendeeAffiliation,
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
          alert('일치하는 정보가 없습니다');
        } else {
          console.error('API 에러 발생:', error.response || error);
          alert('API 에러 발생');
        }
      }
    } else {
      if (
        enteredDials.length < (eventTarget === 'INTERNAL' ? 7 : 4) &&
        dial !== '서명하러 가기'
      ) {
        setEnteredDials([...enteredDials, dial]);
      }
    }
  };

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await axiosInstance.get(`/api/v1/events/${EVENT_ID}`);
        const eventData = response.data;
        setEventTitle(eventData.eventTitle);
        setEventTarget(eventData.eventTarget);

        const now = new Date();
        const today = now.toISOString().split('T')[0];
        const todaySchedule = eventData.eventSchedules.find(
          (schedule) => schedule.eventDate === today,
        );

        if (todaySchedule) {
          setEventDate(todaySchedule.eventDate);
          console.log('출석 체크가 처리되는 날짜:', todaySchedule.eventDate);
        } else {
          setEventDate('');
          console.log('오늘 날짜에 해당하는 일정이 없습니다.');
        }
      } catch (error) {
        console.error('이벤트 정보를 가져오는 중 에러 발생:', error);
      }
    };

    fetchEventDetails();
  }, [EVENT_ID]);

  return (
    <S.AttendanceStudentIdPage>
      <AttendanceHeader eventTitle={eventTitle} />

      <S.ContentContainer>
        <S.Title>
          {eventTarget === 'INTERNAL' ? (
            <>
              <span>학번 7자리</span>를 입력해 주세요.
            </>
          ) : (
            <>
              <span>휴대폰 번호 뒤 4자리</span>를 입력해 주세요.
            </>
          )}
        </S.Title>

        <S.StudentIdContainer>
          {(eventTarget === 'INTERNAL' ? studentId : phoneId).map((index) => (
            <S.StudentId key={index}>
              {enteredDials[index - 1] || ''}
            </S.StudentId>
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
        {isModalOpen && (
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            attendees={attendees}
          />
        )}
      </S.ContentContainer>
    </S.AttendanceStudentIdPage>
  );
};

export default AttendanceStudentIdPage;
