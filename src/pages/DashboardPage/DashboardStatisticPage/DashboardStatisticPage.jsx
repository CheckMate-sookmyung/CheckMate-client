import * as S from './DashboardStatisticPage.style';
import { PageLayout } from '@/Layout';
import { Sidebar, TopNavigation } from '@/components';
import MajorChart from './MajorChart';
import YearChart from './YearChart';
import CompletionChart from './CompletionChart';
import { ATTENDEE_LIST } from './attendee';
import { axiosInstance } from '@/axios';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { eventIDState } from '@/recoil/atoms/state';

const DetailStatisticsPage = () => {
  const eventId = useRecoilValue(eventIDState);
  const [eventData, setEventData] = useState(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // 행사 정보 가져오기
  useEffect(() => {
    const getEventStatistic = async () => {
      try {
        const response = await axiosInstance.get(`/api/v1/events/${eventId}`);

        if (response.status === 200 && response.data) {
          console.log(response.data);
          setEventData(response.data);
          const { eventSchedules } = response.data;
          if (eventSchedules && eventSchedules.length > 0) {
            setStartDate(eventSchedules[0].eventDate);
            setEndDate(eventSchedules[eventSchedules.length - 1].eventDate);
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (eventId) {
      getEventStatistic();
    }
  }, [eventId]);

  return (
    <PageLayout topNavigation={<TopNavigation />} sideBar={<Sidebar />}>
      <S.DetailStatisticsPage>
        <S.TopContainer>
          <S.Title>세부 통계</S.Title>
          <S.EventDate>
            {startDate} ~ {endDate}
          </S.EventDate>
        </S.TopContainer>

        <S.ContentContainer>
          <S.ChartWrapper>
            <S.ChartTitle>전공별 참석 비율</S.ChartTitle>
            <S.Chart>
              <MajorChart />
            </S.Chart>
          </S.ChartWrapper>

          <S.ChartWrapper>
            <S.ChartTitle>학번별 참석 비율</S.ChartTitle>
            <S.Chart>
              <YearChart />
            </S.Chart>
          </S.ChartWrapper>

          <S.ChartWrapper>
            <S.ChartTitle>전체 학생 중 이수 비율</S.ChartTitle>
            <S.Chart>
              <CompletionChart />
            </S.Chart>
          </S.ChartWrapper>
        </S.ContentContainer>
      </S.DetailStatisticsPage>
    </PageLayout>
  );
};

export default DetailStatisticsPage;
