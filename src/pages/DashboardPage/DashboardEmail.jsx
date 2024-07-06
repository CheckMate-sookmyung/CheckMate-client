import React, { useState } from 'react';
import * as S from './DashboardEmail.style';

export default function DashboardEmail() {
  const [selectedOption, setSelectedOption] = useState('option1');

  return (
    <S.DashboardEmail>
      <S.TopContainer>
        <S.Title>이메일 예약 발송</S.Title>
        <S.ButtonContainer>
          <S.SaveBtn>저장하기</S.SaveBtn>
        </S.ButtonContainer>
      </S.TopContainer>

      <S.ContentContainer>
        <S.Content>
          <S.OptionContainer>
            <S.Option onClick={() => setSelectedOption('option1')}>
              <S.RadioButton
                type="radio"
                name="platform"
                value="option1"
                checked={selectedOption === 'option1'}
                readOnly
              />
              <S.OptionTitle>전체 발송</S.OptionTitle>
            </S.Option>
            <S.Option onClick={() => setSelectedOption('option2')}>
              <S.RadioButton
                type="radio"
                name="platform"
                value="option2"
                checked={selectedOption === 'option2'}
                readOnly
              />
              <S.OptionTitle>일부발송</S.OptionTitle>
            </S.Option>
          </S.OptionContainer>
        </S.Content>

        <S.Content>
          <S.ContentTitle>내용</S.ContentTitle>
          <S.ContentDesc>발송될 이메일 본문 내용입니다.</S.ContentDesc>
          <S.ContentInput></S.ContentInput>
        </S.Content>
      </S.ContentContainer>
    </S.DashboardEmail>
  );
}
