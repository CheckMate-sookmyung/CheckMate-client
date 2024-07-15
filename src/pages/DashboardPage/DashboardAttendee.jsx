import * as S from './DashboardAttendee.style';
import PageLayout from '../../Layout/PageLayout';
import { useState, useEffect } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { Sidebar } from '../../components/Navigator';
import SessionDateTab from './SessionDateTab';
import { axiosInstance } from '../../axios';
import { USER_ID } from '../../constants';
import { useRecoilValue } from 'recoil';
import { eventIDState } from '../../recoil/atoms/state';
import StudentListItem from './AttendanceList';

export default function DashboardAttendee() {
  const [activeTab, setActiveTab] = useState(1);
  const [editMode, setEditMode] = useState(false);
  const [attendees, setAttendees] = useState([]);
  const EVENT_ID = useRecoilValue(eventIDState);

  const [sessions] = useState([
    { tab: 1, date: '7/12' },
    { tab: 2, date: '7/13' },
    { tab: 3, date: '7/14' },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(
          `/api/v1/events/attendanceList/${USER_ID}/${EVENT_ID}`,
        );
        const parsedStudents = response.data[0].attendanceListResponseDtos.map(
          (student) => ({
            major: student.major,
            name: student.studentName,
            number: student.studentNumber,
            year: student.year,
            phoneNumber: student.phoneNumber,
            email: student.email,
            attendance: student.attendance,
          }),
        );
        parsedStudents.sort((a, b) => a.name.localeCompare(b.name, 'ko'));
        setAttendees(parsedStudents);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [EVENT_ID]);

  // 참석여부 수정
  const handleAttendanceChange = (index, value) => {
    const updatedAttendees = [...attendees];
    updatedAttendees[index].attendance = value === '출석';
    setAttendees(updatedAttendees);
  };

  // 참석률 계산
  const totalAttendees = attendees.length;
  const attendCount = attendees.filter(
    (attendee) => attendee.attendance,
  ).length;

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

        {/* 참석자 리스트 */}
        <S.TableContainer>
          <S.TableTitle>
            <S.Table>
              <thead>
                <tr>
                  <S.TableHeader>
                    <input type="checkbox" />
                  </S.TableHeader>
                  <S.TableHeader>학과</S.TableHeader>
                  <S.TableHeader>이름</S.TableHeader>
                  <S.TableHeader>학번</S.TableHeader>
                  <S.TableHeader>학년</S.TableHeader>
                  <S.TableHeader>휴대폰 번호</S.TableHeader>
                  <S.TableHeader>이메일 주소</S.TableHeader>
                  <S.TableHeader>출석 여부</S.TableHeader>
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
                    <S.TableData>
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
