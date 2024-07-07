import { useState } from 'react';
import * as S from './DashboardAttendee.style';
import { FaMagnifyingGlass } from 'react-icons/fa6';

export default function DashboardAttendee() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <S.DashboardAttendee>
      <S.TopContainer>
        <S.Title>참석자 관리</S.Title>
        <S.ButtonContainer>
          <S.Btn>참석자 데이터 다운로드</S.Btn>
        </S.ButtonContainer>
      </S.TopContainer>

      <S.SearchContainer>
        <S.SearchBoxWrapper>
          <FaMagnifyingGlass />
          <S.SearchBox placeholder="이름, 학번, 이메일, 전화번호로 검색" />
        </S.SearchBoxWrapper>
        <S.RateWrapper>
          <S.Rate>참석률</S.Rate>
          <S.Attendee>0 / 30</S.Attendee>
        </S.RateWrapper>
      </S.SearchContainer>

      <S.TabContainer>
        <S.TabBar>
          {[1, 2, 3].map((tab, index) => {
            const dates = ['7/12', '7/13', '7/14'];
            return (
              <S.Tab
                key={tab}
                active={activeTab === tab}
                onClick={() => {
                  setActiveTab(tab);
                }}
              >
                {tab}회 ({dates[index]})
              </S.Tab>
            );
          })}
        </S.TabBar>

        <S.EditBtn>출석 여부 수정</S.EditBtn>
      </S.TabContainer>

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
              <tr>
                <S.TableData colSpan="9">결과가 없습니다.</S.TableData>
              </tr>
            </tbody>
          </S.Table>
        </S.TableTitle>
      </S.TableContainer>
    </S.DashboardAttendee>
  );
}
