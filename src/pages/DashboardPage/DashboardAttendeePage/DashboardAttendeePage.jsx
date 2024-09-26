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
} from '@/components';
import {
  getAttendanceList,
  getEventDetail,
  updateAttendanceList,
} from '@/apis';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import AttendeeSearch from './AttendeeSearch';
import UpdateAttendeeModal from './UpdateAttendeeModal';

export default function DashboardAttendeePage() {
  const [eventTitle, setEventTitle] = useState('');
  const [eventTarget, setEventTarget] = useState('INTERNAL');
  const [activeTab, setActiveTab] = useState(1);
  const [editMode, setEditMode] = useState(false);
  const [deleteMode, setDeleteMode] = useState(false);
  const [attendees, setAttendees] = useState([]);
  const [filteredAttendees, setFilteredAttendees] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sessions, setSessions] = useState([]);
  const [sortConfig, setSortConfig] = useState({
    key: 'name',
    direction: 'asc',
  });
  const [sessionAttendees, setSessionAttendees] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newAttendee, setNewAttendee] = useState({
    name: '',
    major: '',
    studentNumber: '',
    phoneNumber: '',
  });
  const [selectedAttendees, setSelectedAttendees] = useState([]);
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

  const handleModalToggle = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAttendee((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddAttendee = async () => {
    try {
      const response = await axiosInstance.put(
        `/api/v1/events/attendee/${eventId}`,
        {
          attendees: [
            {
              name: newAttendee.name,
              major: newAttendee.major,
              studentNumber:
                eventTarget === 'INTERNAL' ? newAttendee.studentNumber : '',
              phoneNumber: newAttendee.phoneNumber,
            },
          ],
        },
      );

      if (response.status === 200) {
        alert('참석자가 성공적으로 추가되었습니다.');
        setIsModalOpen(false);
        setNewAttendee({
          name: '',
          major: '',
          studentNumber: '',
          phoneNumber: '',
        });
        queryClient.invalidateQueries(['getAttendanceList', eventId]);
      } else {
        alert('참석자 추가에 실패했습니다.');
      }
    } catch (error) {
      console.error('참석자 추가 중 오류 발생:', error);
      alert('참석자 추가 중 오류가 발생했습니다. 다시 시도해 주세요.');
    }
  };

  // 삭제 모드 토글 핸들러
  const handleDeleteModeToggle = () => {
    if (deleteMode) {
      const isConfirmed = window.confirm('선택한 참석자들을 삭제하시겠습니까?');
      if (isConfirmed) {
        alert('선택된 참석자들이 삭제되었습니다.');
      }
    }

    setDeleteMode((prevDeleteMode) => !prevDeleteMode);
  };

  // 선택된 참석자를 관리하기 위한 상태 업데이트 로직
  const handleSelectAttendee = (idOrIds, isSelected) => {
    if (Array.isArray(idOrIds)) {
      if (isSelected) {
        setSelectedAttendees(idOrIds);
      } else {
        setSelectedAttendees([]);
      }
    } else {
      setSelectedAttendees((prevSelected) =>
        isSelected
          ? [...prevSelected, idOrIds]
          : prevSelected.filter((attendeeId) => attendeeId !== idOrIds),
      );
    }
  };

  useEffect(() => {
    if (!eventDetail) {
      return;
    }

    setEventTitle(eventDetail.eventTitle);
    setEventTarget(eventDetail.eventTarget);

    const parsedSessions = eventDetail.eventSchedules.map((schedule, index) => {
      const attendanceList = schedule.attendanceListResponseDtos || [];
      return {
        tab: index + 1,
        date: `${schedule.eventDate.substring(5, 7)}/${schedule.eventDate.substring(8, 10)}`,
        attendanceList: attendanceList.sort((a, b) =>
          a.attendeeName.localeCompare(b.attendeeName),
        ),
      };
    });

    setSessions(parsedSessions);

    const attendeesData = {};

    parsedSessions.forEach((session) => {
      attendeesData[session.tab] = session.attendanceList.map((student) => ({
        id: student.attendeeId,
        major: student.attendeeAffiliation,
        name: student.attendeeName,
        number: student.studentNumber,
        year: '-',
        phoneNumber: student.attendeePhoneNumber || '-',
        email: student.attendeeEmail || '-',
        attendance: student.attendance,
        attendTime: student.attendTime,
      }));
    });

    setSessionAttendees(attendeesData);

    if (parsedSessions.length > 0) {
      const initialAttendees = attendeesData[1];
      setAttendees(initialAttendees);
      setFilteredAttendees(initialAttendees);
      setSessionAttendees((prev) => ({
        ...prev,
        [1]: initialAttendees,
      }));
    }
  }, [eventDetail]);

  useEffect(() => {
    if (attendanceList) {
      const parsedSessions = attendanceList.map((session, index) => {
        const attendanceListResponseDtos =
          session.attendanceListResponseDtos || [];
        return {
          tab: index + 1,
          date: `${session.eventDate.substring(5, 7)}/${session.eventDate.substring(8, 10)}`,
          attendanceList: attendanceListResponseDtos.sort((a, b) =>
            a.attendeeName.localeCompare(b.attendeeName),
          ),
        };
      });

      setSessions(parsedSessions);

      const attendeesData = {};

      parsedSessions.forEach((session) => {
        attendeesData[session.tab] = session.attendanceList.map((student) => ({
          id: student.attendeeId,
          major: student.attendeeAffiliation,
          name: student.attendeeName,
          number: student.studentNumber,
          year: '-',
          phoneNumber: student.attendeePhoneNumber || '-',
          email: student.attendeeEmail || '-',
          attendance: student.attendance,
          attendTime: student.attendTime,
        }));
      });

      setSessionAttendees(attendeesData);

      if (parsedSessions.length > 0) {
        const initialAttendees = attendeesData[1];
        setAttendees(initialAttendees);
        setFilteredAttendees(initialAttendees);
        setSessionAttendees((prev) => ({
          ...prev,
          [1]: initialAttendees,
        }));
      }
    }
  }, [attendanceList]);

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

  // 참석 여부 수정
  const handleAttendanceChange = (attendeeId, value) => {
    const updatedAttendees = attendees.map((attendee) =>
      attendee.id === attendeeId
        ? { ...attendee, attendance: value === '출석' }
        : attendee,
    );

    setAttendees(updatedAttendees);

    setSessionAttendees((prev) => ({
      ...prev,
      [activeTab]: updatedAttendees,
    }));
  };

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

  //  출석 명단 메일로 전송
  const handleSendEmailButtonClick = async () => {
    const isConfirmed = window.confirm(
      '출석 명단을 이메일로 전송하시겠습니까?\n확인 버튼을 누르면 즉시 전송됩니다.',
    );

    if (!isConfirmed) {
      return;
    }

    try {
      const response = await axiosInstance.post(
        `/api/v1/attendancelist/sending/${eventId}`,
      );

      if (response.status === 200) {
        alert('출석 명단이 이메일로 성공적으로 전송되었습니다.');
      } else {
        throw new Error('출석 명단 전송에 실패했습니다.');
      }
    } catch (error) {
      console.error('출석 명단 전송 중 오류 발생:', error);
      alert('출석 명단 전송에 실패했습니다. 다시 시도해 주세요.');
    }
  };

  // 참석 명단 즉시 다운로드
  const handleDownloadButtonClick = async () => {
    try {
      const response = await axiosInstance.get(
        `/api/v1/attendancelist/download/${eventId}`,
      );

      const fileUrl = response.data.attendanceListFileUrl;
      if (fileUrl) {
        window.open(fileUrl, '_blank');
      } else {
        throw new Error('파일 URL이 존재하지 않습니다.');
      }
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
        {isAttendanceListPending ? (
          <div>Loading Attendance List...</div>
        ) : isAttendanceListError ? (
          <div>Error loading attendance list. Please try again.</div>
        ) : (
          <>
            <S.TopContainer>
              <S.Title>참석자 관리</S.Title>
              <S.ButtonContainer>
                <SlimButton
                  onClick={handleSendEmailButtonClick}
                  label={
                    <>
                      <FaRegEnvelope /> 출석 명단 메일로 전송
                    </>
                  }
                />
                <SlimButton
                  onClick={handleDownloadButtonClick}
                  label={
                    <>
                      <FaPaperclip /> 출석 명단 즉시 다운
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
                      setFilteredAttendees(sortedAttendees);
                    }}
                  />
                ))}
              </S.TabContainer>
              <S.ButtonGroup>
                <S.EditMode
                  type="button"
                  active={deleteMode}
                  onClick={handleDeleteModeToggle}
                >
                  {deleteMode ? '저장하기' : '참석자 삭제'}
                </S.EditMode>
                <S.EditMode onClick={handleModalToggle}>참석자 추가</S.EditMode>
                <S.EditMode
                  type="button"
                  disabled={isUpdateAttendanceListPending}
                  active={editMode}
                  onClick={handleEditModeToggle}
                >
                  {editMode ? '저장하기' : '출석 여부 수정'}
                </S.EditMode>
              </S.ButtonGroup>
            </S.TabEditWrapper>

            <S.SearchRateContainer>
              <S.RateWrapper>
                <S.RateTitle>참석률</S.RateTitle>
                <S.Attendee>
                  {attendees.filter((attendee) => attendee.attendance).length} /{' '}
                  {attendees.length}
                </S.Attendee>
              </S.RateWrapper>

              <AttendeeSearch
                attendees={attendees}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                setFilteredAttendees={setFilteredAttendees}
              />
            </S.SearchRateContainer>

            <AttendeeTable
              attendees={filteredAttendees}
              editMode={editMode}
              deleteMode={deleteMode}
              sortData={sortData}
              handleAttendanceChange={handleAttendanceChange}
              handleSelectAttendee={handleSelectAttendee}
              sortConfig={sortConfig}
              showStudentInfo={eventTarget === 'INTERNAL'}
            />
          </>
        )}
      </S.DashboardAttendee>

      {/* 참석자 추가/삭제 모달 */}
      {isModalOpen && (
        <UpdateAttendeeModal
          isOpen={isModalOpen}
          onClose={handleModalToggle}
          onAdd={handleAddAttendee}
          newAttendee={newAttendee}
          onInputChange={handleInputChange}
          eventTarget={eventTarget}
        />
      )}
    </PageLayout>
  );
}
