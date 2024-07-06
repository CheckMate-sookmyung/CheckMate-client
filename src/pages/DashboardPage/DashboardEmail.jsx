import React, { useState } from 'react';
import * as S from './DashboardEmail.style';

const DEFAULT_EMAIL_CONTENT = `안녕하세요, [기관명]입니다.

[행사명]을 진행합니다.

- 일시: YYYY-MM-DD HH:MM
- 대상: 전체/일부
- 내용: 이메일 본문 내용

기타 궁금한 사항이 있으시면 언제든지 문의해주시기 바랍니다.

감사합니다.`;

export default function DashboardEmail() {
  const [selectedOption, setSelectedOption] = useState('option1');
  const [activeTab, setActiveTab] = useState(1);

  return (
    <S.DashboardEmail>
      <S.TopContainer>
        <S.Title>이메일 예약 발송</S.Title>
        <S.ButtonContainer>
          <S.SaveBtn>저장하기</S.SaveBtn>
        </S.ButtonContainer>
      </S.TopContainer>

      <S.TabContainer>
        {[1, 2, 3].map((tab) => (
          <S.Tab
            key={tab}
            active={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          >
            {tab}회
          </S.Tab>
        ))}
      </S.TabContainer>

      <S.ContentContainer>
        {activeTab === 1 && (
          <>
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
                  <S.OptionTitle>일부 발송</S.OptionTitle>
                </S.Option>
              </S.OptionContainer>
            </S.Content>
            <S.Content>
              <S.ContentTitle>내용</S.ContentTitle>
              <S.ContentDesc>발송될 이메일 본문 내용입니다.</S.ContentDesc>
              <S.ContentInput defaultValue={DEFAULT_EMAIL_CONTENT} />
            </S.Content>
            {selectedOption === 'option2' && (
              <S.Content>
                <S.ContentTitle>수신자</S.ContentTitle>
                <S.ContentDesc>
                  이메일을 발송할 수신자를 체크해주세요
                </S.ContentDesc>
                <S.ContentInput />
              </S.Content>
            )}{' '}
          </>
        )}
      </S.ContentContainer>
    </S.DashboardEmail>
  );
}
