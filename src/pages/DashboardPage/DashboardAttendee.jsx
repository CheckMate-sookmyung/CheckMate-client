import { useState } from 'react';
import * as S from './DashboardAttendee.style';

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
        <S.SearchBox placeholder="이름, 학번, 이메일, 전화번호으로 검색" />
        <S.RateWrapper>
          <S.Rate>참석률</S.Rate>
          <S.Attendee>0 / 30</S.Attendee>
        </S.RateWrapper>
      </S.SearchContainer>

      <S.TabContainer>
        <S.TabBar>
          {[1, 2, 3].map((tab) => (
            <S.Tab
              key={tab}
              active={activeTab === tab}
              onClick={() => setActiveTab(tab)}
            >
              {tab}회
            </S.Tab>
          ))}
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
