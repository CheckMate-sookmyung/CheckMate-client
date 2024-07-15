import * as S from './DashboardAttendeePage.style';
import PageLayout from '../../Layout/PageLayout';
import { useState, useEffect } from 'react';
import { FaMagnifyingGlass, FaSortUp, FaSortDown } from 'react-icons/fa6';
import { Sidebar } from '../../components/Navigator';
import { axiosInstance } from '../../axios';
import { USER_ID } from '../../constants';
import { useRecoilValue } from 'recoil';
import { eventIDState } from '../../recoil/atoms/state';
import { TabButton90 } from '../../components';

export default function DashboardAttendeePage() {
  const [activeTab, setActiveTab] = useState(1);
  const [editMode, setEditMode] = useState(false);
  const [attendees, setAttendees] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: '', direction: 'asc' });
  const EVENT_ID = useRecoilValue(eventIDState);

  const [sessionAttendees, setSessionAttendees] = useState({});

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const response = await axiosInstance.get(
          `/api/v1/events/${USER_ID}/${EVENT_ID}`,
        );
        const parsedSessions = response.data.eventSchedules.map(
          (schedule, index) => ({
            tab: index + 1,
            date: schedule.eventDate,
            attendanceList: schedule.attendanceListResponseDtos,
          }),
        );
        setSessions(parsedSessions);

        const attendeesData = {};
        parsedSessions.forEach((session) => {
          attendeesData[session.tab] = session.attendanceList.map(
            (student) => ({
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
          setAttendees(attendeesData[1]);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchSessions();
  }, [EVENT_ID, USER_ID]);

  const SessionDateTab = ({ tab, activeTab, setActiveTab, date }) => {
    return (
      <TabButton90
        key={tab}
        active={activeTab === tab}
        onClick={() => {
          setActiveTab(tab);
          setAttendees(sessionAttendees[tab]);
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

  const totalAttendees = attendees.length;
  const attendCount = attendees.filter(
    (attendee) => attendee.attendance,
  ).length;

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
    if (sortConfig.direction === 'asc') return <FaSortUp />;
    return <FaSortDown />;
  };

  return (
    <PageLayout sideBar={<Sidebar />}>
      <S.DashboardAttendee>
        <S.TopContainer>
          <S.Title>참석자 관리</S.Title>
          <S.ButtonContainer>
            <S.DownBtn>참석자 데이터 다운로드</S.DownBtn>
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
          <S.EditMode onClick={() => setEditMode(!editMode)} active={editMode}>
            {editMode ? '수정 완료하기' : '출석 여부 수정하기'}
          </S.EditMode>
        </S.TabEditWrapper>

        <S.SearchContainer>
          <S.SearchBoxWrapper>
            <FaMagnifyingGlass />
            <S.SearchBox placeholder="이름, 학번, 이메일, 전화번호로 검색" />
          </S.SearchBoxWrapper>
          <S.RateWrapper>
            <S.RateTitle>참석률</S.RateTitle>
            <S.Attendee>
              {attendCount} / {totalAttendees}
            </S.Attendee>
          </S.RateWrapper>
        </S.SearchContainer>

        <S.TableContainer>
          <S.TableTitle>
            <S.Table>
              <thead>
                <tr>
                  <S.TableHeader>
                    <input type="checkbox" />
                  </S.TableHeader>
                  <S.TableHeader onClick={() => sortData('major')}>
                    학과 <SortIcon columnKey="major" />
                  </S.TableHeader>
                  <S.TableHeader onClick={() => sortData('name')}>
                    이름 <SortIcon columnKey="name" />
                  </S.TableHeader>
                  <S.TableHeader onClick={() => sortData('number')}>
                    학번 <SortIcon columnKey="number" />
                  </S.TableHeader>
                  <S.TableHeader onClick={() => sortData('year')}>
                    학년 <SortIcon columnKey="year" />
                  </S.TableHeader>
                  <S.TableHeader onClick={() => sortData('phoneNumber')}>
                    휴대폰 번호 <SortIcon columnKey="phoneNumber" />
                  </S.TableHeader>
                  <S.TableHeader onClick={() => sortData('email')}>
                    이메일 주소 <SortIcon columnKey="email" />
                  </S.TableHeader>
                  <S.TableHeader onClick={() => sortData('attendance')}>
                    출석 여부 <SortIcon columnKey="attendance" />
                  </S.TableHeader>
                </tr>
              </thead>
              <tbody>
                {attendees.map((data, index) => (
                  <tr key={index}>
                    <S.TableData>
                      <input type="checkbox" />
                    </S.TableData>
                    <S.TableData>{data.major}</S.TableData>
                    <S.TableData>{data.name}</S.TableData>
                    <S.TableData>{data.number}</S.TableData>
                    <S.TableData>{data.year}</S.TableData>
                    <S.TableData>{data.phoneNumber}</S.TableData>
                    <S.TableData>{data.email}</S.TableData>
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
                  </tr>
                ))}
              </tbody>
            </S.Table>
          </S.TableTitle>
        </S.TableContainer>
      </S.DashboardAttendee>
    </PageLayout>
  );
}
