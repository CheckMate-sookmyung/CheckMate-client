import * as S from './DashboardAttendeePage.style';
import { PageLayout } from '@/Layout';
import { useState, useEffect } from 'react';
import { FaPaperclip, FaRegEnvelope } from 'react-icons/fa6';
import { axiosInstance } from '@/axios';
import { useRecoilValue } from 'recoil';
import { eventIDState } from '@/recoil/atoms/state';
import {
  Sidebar,
  AttendeeTable,
  TopNavigation,
  TabMenu,
  SlimButton,
  Search,
} from '@/components';
import {
  getAttendanceList,
  getEventDetail,
  updateAttendanceList,
} from '@/apis';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export default function DashboardAttendeePage() {
  const [eventTitle, setEventTitle] = useState('');
  const [eventTarget, setEventTarget] = useState('INTERNAL');
  const [activeTab, setActiveTab] = useState(1);
  const [editMode, setEditMode] = useState(false);
  const [attendees, setAttendees] = useState([]);
  const [filteredAttendees, setFilteredAttendees] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sessions, setSessions] = useState([]);
  const [sortConfig, setSortConfig] = useState({
    key: 'name',
    direction: 'asc',
  });
  const [sessionAttendees, setSessionAttendees] = useState({});
  const eventId = useRecoilValue(eventIDState);

  const queryClient = useQueryClient();

  const {
    data: eventDetail,
    isPending,
    isError,
  } = useQuery({
    queryKey: ['getEventDetail', eventId],
    queryFn: () => getEventDetail(eventId),
  });

  const {
    data: attendanceList,
    isPending: isAttendanceListPending,
    isError: isAttendanceListError,
  } = useQuery({
    queryKey: ['getAttendanceList', eventId],
    queryFn: () => getAttendanceList(eventId),
  });

  const {
    mutate: updateAttendanceListMutate,
    isPending: isUpdateAttendanceListPending,
  } = useMutation({
    mutationKey: ['updateAttendanceList', eventId],
    mutationFn: (body) => updateAttendanceList(eventId, body),
    onSuccess: () => {
      queryClient.invalidateQueries(['getEventDetail']);
      alert('출석 정보가 성공적으로 업데이트되었습니다.');
    },
    onError: () => {
      alert('출석 정보 업데이트에 실패했습니다.');
    },
  });

  useEffect(() => {
    if (eventDetail === undefined) {
      return;
    }

    setEventTitle(eventDetail.eventTitle);
    setEventTarget(eventDetail.eventTarget);

    const parsedSessions = eventDetail.eventSchedules.map(
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
      attendeesData[session.tab] = session.attendanceList.map((student) => ({
        id: student.id,
        major: student.major,
        name: student.studentName,
        number: student.studentNumber,
        year: student.year || '-',
        phoneNumber: student.phoneNumber || '-',
        email: student.email || '-',
        attendance: student.attendance,
      }));
    });
    setSessionAttendees(attendeesData);

    if (parsedSessions.length > 0) {
      const initialAttendees = attendeesData[1];
      setAttendees(initialAttendees);
      setFilteredAttendees(initialAttendees); // 초기 필터된 참석자 리스트 설정
      setSessionAttendees((prev) => ({
        ...prev,
        [1]: initialAttendees,
      }));
    }
  }, [eventDetail]);

  // 참석자 검색
  useEffect(() => {
    const filtered = attendees.filter((attendee) => {
      const searchLower = searchQuery.toLowerCase();
      return (
        attendee.name.toLowerCase().includes(searchLower) ||
        (attendee.number
          ? String(attendee.number).toLowerCase().includes(searchLower)
          : false) ||
        attendee.email.toLowerCase().includes(searchLower) ||
        attendee.phoneNumber.toLowerCase().includes(searchLower)
      );
    });
    setFilteredAttendees(filtered);
  }, [searchQuery, attendees]);

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
      updateAttendanceListMutate({
        attendanceList: attendees.map(({ id, attendance }) => ({
          studentInfoId: id,
          attendance: attendance,
        })),
      });
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

    if (isConfirmed) {
      return;
    }
  };

  const handleDownload = async () => {
    try {
      const response = await axiosInstance.get(
        `/api/v1/events/attendance/list/${eventId}`,
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

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return null;
  }

  return (
    <PageLayout
      topNavigation={<TopNavigation eventTitle={eventTitle} />}
      sideBar={<Sidebar />}
    >
      <S.DashboardAttendee>
        <S.TopContainer>
          <S.Title>참석자 관리</S.Title>
          <S.ButtonContainer>
            <SlimButton
              onClick={handleSendEmail}
              label={
                <>
                  <FaRegEnvelope /> 출석 명단 메일로 전송
                </>
              }
            />
            <SlimButton
              onClick={handleDownload}
              label={
                <>
                  <FaPaperclip /> 출석 명단 다운로드
                </>
              }
            />
          </S.ButtonContainer>
        </S.TopContainer>

        <S.TabEditWrapper>
          <S.TabContainer>
            {sessions.map((session) => (
              <TabMenu
                key={session.tab}
                label={`${session.tab}회 (${session.date})`}
                active={activeTab === session.tab}
                onClick={() => {
                  setActiveTab(session.tab);
                  const sortedAttendees = [
                    ...sessionAttendees[session.tab],
                  ].sort((a, b) => a.name.localeCompare(b.name));
                  setAttendees(sortedAttendees);
                  setFilteredAttendees(sortedAttendees); // 필터된 리스트도 업데이트
                }}
              />
            ))}
          </S.TabContainer>
          <S.EditMode
            type="button"
            disabled={isUpdateAttendanceListPending}
            active={editMode}
            onClick={handleEditModeToggle}
          >
            {editMode ? '저장하기' : '출석 여부 수정하기'}
          </S.EditMode>
        </S.TabEditWrapper>

        <S.SearchRateContainer>
          <S.RateWrapper>
            <S.RateTitle>참석률</S.RateTitle>
            <S.Attendee>
              {attendees.filter((attendee) => attendee.attendance).length} /{' '}
              {attendees.length}
            </S.Attendee>
          </S.RateWrapper>
          <Search
            onSearch={setSearchQuery}
            placeholder="이름, 학번, 이메일, 전화번호로 검색"
          />
        </S.SearchRateContainer>

        <AttendeeTable
          attendees={filteredAttendees} // 필터된 참석자 리스트를 전달
          editMode={editMode}
          sortData={sortData}
          handleAttendanceChange={handleAttendanceChange}
          sortConfig={sortConfig}
          showStudentInfo={eventTarget === 'INTERNAL'}
        />
      </S.DashboardAttendee>
    </PageLayout>
  );
}
