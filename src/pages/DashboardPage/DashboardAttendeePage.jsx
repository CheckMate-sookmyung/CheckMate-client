import * as S from './DashboardAttendeePage.style';
import { PageLayout } from '@/Layout';
import { useState, useEffect } from 'react';
import { FaMagnifyingGlass, FaPaperclip, FaRegEnvelope } from 'react-icons/fa6';
import { axiosInstance } from '@/axios';
import { USER_ID } from '@/constants';
import { useRecoilValue } from 'recoil';
import { eventIDState } from '@/recoil/atoms/state';
import { Button, Sidebar, AttendeeTable, TopNavigation } from '@/components';

export default function DashboardAttendeePage() {
  const [eventTitle, setEventTitle] = useState('');
  const [activeTab, setActiveTab] = useState(1);
  const [editMode, setEditMode] = useState(false);
  const [attendees, setAttendees] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [sortConfig, setSortConfig] = useState({
    key: 'name',
    direction: 'asc',
  });
  const [sessionAttendees, setSessionAttendees] = useState({});
  const EVENT_ID = useRecoilValue(eventIDState);

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const response = await axiosInstance.get(
          `/api/v1/events/${USER_ID}/${EVENT_ID}`,
        );
        const eventData = response.data;

        setEventTitle(eventData.eventTitle);

        const parsedSessions = eventData.eventSchedules.map(
          (schedule, index) => ({
            tab: index + 1,
            date: `${schedule.eventDate.substring(5, 7)}/${schedule.eventDate.substring(8, 10)}`,
            attendanceList: schedule.attendanceListResponseDtos.sort((a, b) =>
              a.studentName.localeCompare(b.studentName),
            ),
          }),
        );
        setSessions(parsedSessions);

        const attendeesData = {};
        parsedSessions.forEach((session) => {
          attendeesData[session.tab] = session.attendanceList.map(
            (student) => ({
              id: student.id,
              major: student.major,
              name: student.studentName,
              number: student.studentNumber,
              year: student.year || '-',
              phoneNumber: student.phoneNumber || '-',
              email: student.email || '-',
              attendance: student.attendance,
            }),
          );
        });
        setSessionAttendees(attendeesData);

        if (parsedSessions.length > 0) {
          const initialAttendees = attendeesData[1];
          setAttendees(initialAttendees);
          setSessionAttendees((prev) => ({
            ...prev,
            [1]: initialAttendees,
          }));
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchSessions();
  }, [EVENT_ID, USER_ID]);

  const handleAttendanceChange = (index, value) => {
    const updatedAttendees = [...attendees];
    updatedAttendees[index].attendance = value === '출석';
    setAttendees(updatedAttendees);

    setSessionAttendees((prev) => ({
      ...prev,
      [activeTab]: updatedAttendees,
    }));
  };

  // 출석 여부 수정
  const handleEditModeToggle = async () => {
    if (editMode) {
      try {
        const attendanceList = attendees.map((attendee) => ({
          studentInfoId: attendee.id,
          attendance: attendee.attendance,
        }));

        await axiosInstance.put(
          `/api/v1/attendance/list/${USER_ID}/${EVENT_ID}`,
          {
            attendanceList,
          },
        );
        alert('출석 정보가 성공적으로 업데이트되었습니다.');
      } catch (error) {
        console.error(error);
        alert('출석 정보 업데이트에 실패했습니다.');
      }
    }
    setEditMode((prevEditMode) => !prevEditMode);
  };

  // 데이터 정렬
  const sortData = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });

    const sortedData = [...attendees].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
      return 0;
    });
    setAttendees(sortedData);

    setSessionAttendees((prev) => ({
      ...prev,
      [activeTab]: sortedData,
    }));
  };

  const handleSendEmail = async () => {
    const isConfirmed = window.confirm(
      '출석 명단을 이메일로 전송하시겠습니까?\n확인 버튼을 누르면 즉시 전송됩니다.',
    );
    if (!isConfirmed) {
      return;
    }
    try {
      const response = await axiosInstance.get(
        `api/v1/attendance/list/${USER_ID}/${EVENT_ID}`,
      );
      if (response.status === 200) {
        alert('전송이 완료됐습니다.');
        console.log(response);
      }
    } catch (error) {
      alert('전송에 실패했습니다.');
      console.log(error);
    }
  };

  const handleDownload = async () => {
    try {
      const response = await axiosInstance.get(
        `/api/v1/events/attendanceList/${USER_ID}/${EVENT_ID}`,
        { responseType: 'blob' },
      );

      const contentType = response.headers['content-type'];
      const blob = new Blob([response.data], { type: contentType });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${eventTitle}_참석자명단.pdf`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('출석 명단 다운로드 중 오류 발생:', error);
      alert('출석 명단 다운로드에 실패했습니다. 다시 시도해 주세요.');
    }
  };

  return (
    <PageLayout
      topNavigation={<TopNavigation eventTitle={eventTitle} />}
      sideBar={<Sidebar />}
    >
      <S.DashboardAttendee>
        <S.TopContainer>
          <S.Title>참석자 관리</S.Title>
          <S.ButtonContainer>
            <S.DownBtn onClick={handleSendEmail}>
              <FaRegEnvelope /> 출석 명단 메일로 전송
            </S.DownBtn>
            <S.DownBtn onClick={handleDownload}>
              <FaPaperclip />
              출석 명단 다운로드
            </S.DownBtn>
          </S.ButtonContainer>
        </S.TopContainer>

        <S.TabEditWrapper>
          <S.TabContainer>
            {sessions.map((session) => (
              <Button
                key={session.tab}
                label={`${session.tab}회 (${session.date})`}
                active={activeTab === session.tab}
                backgroundColor={
                  activeTab === session.tab ? '#2f7cef' : '#F2F2F2'
                }
                textColor={activeTab === session.tab ? '#fff' : '#323232'}
                onClick={() => {
                  setActiveTab(session.tab);
                  const sortedAttendees = [
                    ...sessionAttendees[session.tab],
                  ].sort((a, b) => a.name.localeCompare(b.name));
                  setAttendees(sortedAttendees);
                }}
              />
            ))}
          </S.TabContainer>
          <S.EditMode onClick={handleEditModeToggle} active={editMode}>
            {editMode ? '저장하기' : '출석 여부 수정하기'}
          </S.EditMode>
        </S.TabEditWrapper>

        <S.SearchRageContainer>
          <S.RateWrapper>
            <S.RateTitle>참석률</S.RateTitle>
            <S.Attendee>
              {attendees.filter((attendee) => attendee.attendance).length} /{' '}
              {attendees.length}
            </S.Attendee>
          </S.RateWrapper>
          <S.SearchBoxWrapper>
            <FaMagnifyingGlass />
            <S.SearchBox placeholder="이름, 학번, 이메일, 전화번호로 검색" />
          </S.SearchBoxWrapper>
        </S.SearchRageContainer>

        <AttendeeTable
          attendees={attendees}
          editMode={editMode}
          sortData={sortData}
          handleAttendanceChange={handleAttendanceChange}
          sortConfig={sortConfig}
        />
      </S.DashboardAttendee>
    </PageLayout>
  );
}
