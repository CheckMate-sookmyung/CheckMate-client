import { useEffect, useState } from 'react';
import { PageLayout } from '@/Layout';
import * as S from './DashboardSurveyPage.style';
import { Sidebar, Button, TopNavigation, Input } from '@/components';
import { USER_ID } from '@/constants';
import { useRecoilValue } from 'recoil';
import { eventDetail, eventIDState } from '@/recoil/atoms/state';
import Switch from 'react-switch';
import { useQuery } from '@tanstack/react-query';
import { getEventDetail } from '@/apis';

export default function DashboardSurveyPage() {
  const [surveyLink, setSurveyLink] = useState('');
  const [isModified, setIsModified] = useState(false);

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setSurveyLink(newValue);

    if (newValue !== '') {
      setIsModified(true);
    } else {
      setIsModified(false);
    }
  };

  return (
    <PageLayout
      topNavigation={<TopNavigation eventTitle={eventDetail.eventTitle} />}
      sideBar={<Sidebar />}
    >
      <S.DashboardSurveyPage>
        <S.TopContainer>
          <S.Title>설문 조사 링크 발송</S.Title>
          <S.ButtonContainer>
            <Button
              label={'저장하기'}
              disabled={!isModified}
              style={{
                backgroundColor: isModified ? '#007bff' : '#ccc',
                cursor: isModified ? 'pointer' : 'not-allowed',
              }}
            />
          </S.ButtonContainer>
        </S.TopContainer>

        <S.ContentContainer>
          <S.Content>
            <S.ContentTitle>WISE 설문 조사 링크 등록</S.ContentTitle>
            <S.ContentDesc>
              <em>행사 종료 1시간 후</em> 참석자들에게 발송 될&nbsp;
              <em>설문조사 링크</em>를 등록해 주세요. <br /> 링크가 등록되지
              않으면, 행사 등록 시 입력한 WISE 링크가 대신 발송됩니다.
            </S.ContentDesc>
          </S.Content>
          <Input
            placeholder="https://wise.sookmyung.ac.kr/ko/module/eco/@poll/write/4625/0"
            value={surveyLink}
            onChange={handleInputChange}
          />
        </S.ContentContainer>
      </S.DashboardSurveyPage>
    </PageLayout>
  );
}
