import * as S from './DashboardInfo.style';
import React, { useState } from 'react';
import { FaAngleRight } from 'react-icons/fa6';

export default function DashboardInfo() {
  const [active, setActive] = useState('online');
  const [selectedOption, setSelectedOption] = useState('option1');

  return (
    <S.DashboardInfo>
      <S.TopContainer>
        <S.EventTitle>행사 기본 정보</S.EventTitle>
        <S.ButtonContainer>
          <S.SaveBtn>저장하기</S.SaveBtn>
        </S.ButtonContainer>
      </S.TopContainer>

      {/* 행사 정보 */}
      <S.ContentContainer>
        <S.Content>
          <S.ContentTitle>행사 제목</S.ContentTitle>
          <S.ContentInput type="text" placeholder="이벤트 제목을 입력하세요" />
        </S.Content>
        <S.Content>
          <S.ContentTitle>행사 기간</S.ContentTitle>
          <S.DateTimeContainer>
            <S.DateInput type="date" value="07-11" />
            <S.TimeInput type="time" value="03:10" />
            <FaAngleRight />
            <S.DateInput type="date" value="07-15" />
            <S.TimeInput type="time" value="02:00" />
          </S.DateTimeContainer>
        </S.Content>
        <S.Content>
          <S.ContentTitle>행사 담당자 이메일</S.ContentTitle>
          <S.ContentInput type="text" placeholder="이벤트 제목을 입력하세요" />
        </S.Content>
        <S.Content>
          <S.ContentTitle>행사 담당자 연락처</S.ContentTitle>
          <S.ContentInput type="text" placeholder="이벤트 제목을 입력하세요" />
        </S.Content>
        <S.Content>
          <S.ContentTitle>온라인/오프라인 여부</S.ContentTitle>
          <S.ToggleContainer>
            <S.ToggleBtn
              active={active === 'online'}
              onClick={() => setActive('online')}
            >
              온라인
            </S.ToggleBtn>
            <S.ToggleBtn
              active={active === 'offline'}
              onClick={() => setActive('offline')}
            >
              오프라인
            </S.ToggleBtn>
          </S.ToggleContainer>
        </S.Content>
        <S.Content>
          <S.ContentTitle>행사 진행 대상</S.ContentTitle>
          <S.VenueContainer>
            <S.Option>
              <S.RadioButton
                type="radio"
                name="platform"
                value="option1"
                checked={selectedOption === 'option1'}
                onChange={() => setSelectedOption('option1')}
              />
              <S.TextContainer>
                <S.OptionTitle>숙명여자대학교 학생</S.OptionTitle>
                <S.OptionDescription>
                  출석체크시, 학번을 입력받습니다.
                </S.OptionDescription>
              </S.TextContainer>
            </S.Option>
            <S.Option>
              <S.RadioButton
                type="radio"
                name="platform"
                value="option2"
                checked={selectedOption === 'option2'}
                onChange={() => setSelectedOption('option2')}
              />
              <S.TextContainer>
                <S.OptionTitle>외부인</S.OptionTitle>
                <S.OptionDescription>
                  출석체크시, 휴대폰 번호를 입력받습니다.
                </S.OptionDescription>
              </S.TextContainer>
            </S.Option>
          </S.VenueContainer>
        </S.Content>
      </S.ContentContainer>
    </S.DashboardInfo>
  );
}
