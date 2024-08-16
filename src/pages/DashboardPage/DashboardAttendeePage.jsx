import * as S from './DashboardAttendeePage.style';
import PageLayout from '../../Layout/PageLayout';
import { useState, useEffect } from 'react';
import {
  FaMagnifyingGlass,
  FaArrowDownShortWide,
  FaArrowUpWideShort,
  FaPhone,
} from 'react-icons/fa6';
import { Sidebar } from '../../components/Navigator';
import { axiosInstance } from '../../axios';
import { USER_ID } from '../../constants';
import { useRecoilValue } from 'recoil';
import { eventIDState } from '../../recoil/atoms/state';
import { TabButton90 } from '../../components';

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

  // 출석 명단 가져오기
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

  // 탭 정보에 따른 명단 가져오기
  const SessionDateTab = ({ tab, activeTab, setActiveTab, date }) => {
    return (
      <TabButton90
        key={tab}
        active={activeTab === tab}
        onClick={() => {
          setActiveTab(tab);
          const sortedAttendees = [...sessionAttendees[tab]].sort((a, b) =>
            a.name.localeCompare(b.name),
          );
          setAttendees(sortedAttendees);
        }}
      >
        {tab}회 ({date})
      </TabButton90>
    );
  };

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

  // 참석률 정보
  const totalAttendees = attendees.length;
  const attendCount = attendees.filter(
    (attendee) => attendee.attendance,
  ).length;

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

  const SortIcon = ({ columnKey }) => {
    if (sortConfig.key !== columnKey) return null;
    if (sortConfig.direction === 'asc') return <FaArrowUpWideShort />;
    return <FaArrowDownShortWide />;
  };

  // 출석 명단 메일로 전송
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

  // 출석 명단 다운로드
  const handleDownload = async () => {
    try {
      const response = await axiosInstance.get(
        `/api/v1/events/attendanceList/${USER_ID}/${EVENT_ID}`,
        { responseType: 'blob' },
      );

      console.log('Response Headers:', response.headers);
      console.log('Response Data:', response.data);

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
    <PageLayout sideBar={<Sidebar />}>
      <S.DashboardAttendee>
        <S.TopContainer>
          <S.Title>참석자 관리</S.Title>
          <S.ButtonContainer>
            <S.DownBtn onClick={handleSendEmail}>
              출석 명단 메일로 전송
            </S.DownBtn>
            <S.DownBtn onClick={handleDownload}>출석 명단 다운로드</S.DownBtn>
          </S.ButtonContainer>
        </S.TopContainer>

        <S.TabEditWrapper>
          <S.TabContainer>
            {sessions.map((session) => (
              <SessionDateTab
                key={session.tab}
                tab={session.tab}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                date={session.date}
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
              {attendCount} / {totalAttendees}
            </S.Attendee>
          </S.RateWrapper>
          <S.SearchBoxWrapper>
            <FaMagnifyingGlass />
            <S.SearchBox placeholder="이름, 학번, 이메일, 전화번호로 검색" />
          </S.SearchBoxWrapper>
        </S.SearchRageContainer>

        <S.TableContainer>
          <S.Table>
            <thead>
              <tr>
                <S.TableHeader>전화</S.TableHeader>
                <S.TableHeader onClick={() => sortData('attendance')}>
                  출석
                  <SortIcon columnKey="attendance" />
                </S.TableHeader>
                <S.TableHeader onClick={() => sortData('name')}>
                  이름
                  <SortIcon columnKey="name" />
                </S.TableHeader>
                <S.TableHeader onClick={() => sortData('major')}>
                  소속
                  <SortIcon columnKey="major" />
                </S.TableHeader>
                {/* <S.TableHeader onClick={() => sortData('number')}>
                  학번
                  <SortIcon columnKey="number" />
                </S.TableHeader>
                <S.TableHeader onClick={() => sortData('year')}>
                  학년
                  <SortIcon columnKey="year" />
                </S.TableHeader> */}
                <S.TableHeader onClick={() => sortData('phoneNumber')}>
                  휴대폰 번호
                  <SortIcon columnKey="phoneNumber" />
                </S.TableHeader>
                <S.TableHeader onClick={() => sortData('email')}>
                  이메일 주소
                  <SortIcon columnKey="email" />
                </S.TableHeader>
              </tr>
            </thead>
            <tbody>
              {attendees.map((data, index) => (
                <tr key={index}>
                  <S.TableData>
                    <S.TelAnchor href={`tel:${data.phoneNumber}`}>
                      <FaPhone style={{ color: '#0075FF' }} />
                    </S.TelAnchor>
                  </S.TableData>
                  <S.TableData attendance={data.attendance ? '출석' : '결석'}>
                    {editMode ? (
                      <select
                        value={data.attendance ? '출석' : '결석'}
                        onChange={(e) =>
                          handleAttendanceChange(index, e.target.value)
                        }
                      >
                        <option value="출석">출석</option>
                        <option value="결석">결석</option>
                      </select>
                    ) : data.attendance ? (
                      '출석'
                    ) : (
                      '결석'
                    )}
                  </S.TableData>
                  <S.TableData>{data.name}</S.TableData>
                  <S.TableData>{data.major}</S.TableData>
                  {/* <S.TableData>{data.number}</S.TableData>
                  <S.TableData>{data.year}</S.TableData> */}
                  <S.TableData>{data.phoneNumber}</S.TableData>
                  <S.TableData>{data.email}</S.TableData>
                </tr>
              ))}
            </tbody>
          </S.Table>
        </S.TableContainer>
      </S.DashboardAttendee>
    </PageLayout>
  );
}
