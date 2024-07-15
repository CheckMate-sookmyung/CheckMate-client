import React, { useState } from 'react';
import * as S from './DashboardInfoPage.style';
import { FaAngleRight } from 'react-icons/fa6';
import { Sidebar } from '../../components/Navigator';
import { BlueButton90 } from '../../components/Button';
import PageLayout from '../../Layout/PageLayout';

export default function DashboardInfoPage() {
  const [active, setActive] = useState('online');
  const [selectedOption, setSelectedOption] = useState('option1');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <PageLayout sideBar={<Sidebar />}>
      <S.DashboardInfo>
        <S.TopContainer>
          <S.Title>행사 기본 정보</S.Title>
          <S.ButtonContainer>
            <BlueButton90>저장하기</BlueButton90>
          </S.ButtonContainer>
        </S.TopContainer>

        {/* 행사 정보 */}
        <S.ContentContainer>
          <S.Content>
            <S.ContentTitle>행사 제목</S.ContentTitle>
            <S.ContentInput
              type="text"
              placeholder="IT 실무자와 함께하는 제1회 빅데이터 활용 해커톤"
            />
          </S.Content>
          <S.Content>
            <S.ContentTitle>행사 기간</S.ContentTitle>
            <S.DateTimeContainer>
              <S.DateTimeInput
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="MM월 dd일"
                showYearDropdown={false}
                showMonthDropdown={true}
                dropdownMode="select"
              />
              <S.DateTimeInput
                selected={startDate}
                onChange={(date) => {
                  const newDate = new Date(startDate);
                  newDate.setHours(date.getHours());
                  newDate.setMinutes(date.getMinutes());
                  setStartDate(newDate);
                }}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={30}
                timeCaption="Time"
                dateFormat="h:mm aa"
              />
              <FaAngleRight />
              <S.DateTimeInput
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                dateFormat="MM월 dd일"
                showYearDropdown={false}
                showMonthDropdown={true}
                dropdownMode="select"
              />
              <S.DateTimeInput
                selected={endDate}
                onChange={(date) => {
                  const newDate = new Date(endDate);
                  newDate.setHours(date.getHours());
                  newDate.setMinutes(date.getMinutes());
                  setEndDate(newDate);
                }}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={30}
                timeCaption="Time"
                dateFormat="h:mm aa"
              />
            </S.DateTimeContainer>
          </S.Content>
          <S.Content>
            <S.ContentTitle>행사 담당자 이메일</S.ContentTitle>
            <S.ContentInput
              type="text"
              placeholder="checkmate@sookmyung.ac.kr"
            />
          </S.Content>
          <S.Content>
            <S.ContentTitle>행사 담당자 연락처</S.ContentTitle>
            <S.ContentInput type="text" placeholder="010-1234-5678" />
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
            <S.OptionContainer>
              <S.Option onClick={() => setSelectedOption('option1')}>
                <S.RadioButton
                  type="radio"
                  name="platform"
                  value="option1"
                  checked={selectedOption === 'option1'}
                  readOnly
                />
                <S.TextContainer>
                  <S.OptionTitle>숙명여자대학교 학생</S.OptionTitle>
                  <S.OptionDescription>
                    출석체크시, 학번을 입력받습니다.
                  </S.OptionDescription>
                </S.TextContainer>
              </S.Option>
              <S.Option onClick={() => setSelectedOption('option2')}>
                <S.RadioButton
                  type="radio"
                  name="platform"
                  value="option2"
                  checked={selectedOption === 'option2'}
                  readOnly
                />
                <S.TextContainer>
                  <S.OptionTitle>외부인</S.OptionTitle>
                  <S.OptionDescription>
                    출석체크시, 휴대폰 번호를 입력받습니다.
                  </S.OptionDescription>
                </S.TextContainer>
              </S.Option>
            </S.OptionContainer>
          </S.Content>

          <S.Content>
            <S.ContentTitle>행사 설명</S.ContentTitle>
            <S.Textarea />
          </S.Content>

          <S.Content>
            <S.ContentTitle>행사 커버 이미지</S.ContentTitle>
            <S.ContentDesc>
              사진은 PNG, JPG, JPEG 파일만 가능 합니다.
            </S.ContentDesc>
          </S.Content>
        </S.ContentContainer>
      </S.DashboardInfo>
    </PageLayout>
  );
}
