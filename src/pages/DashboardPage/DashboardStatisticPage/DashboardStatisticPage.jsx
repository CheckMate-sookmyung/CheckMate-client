import * as S from './DashboardStatisticPage.style';
import { PageLayout } from '@/Layout';
import { Sidebar, TopNavigation } from '@/components';
import MajorChart from './MajorChart';
import YearChart from './YearChart';
import CompletionChart from './CompletionChart';
import { ATTENDEE_LIST } from './attendee';
import { eventIDState } from '@/recoil/atoms/state';
import { getEventDetail, getEventStatistic } from '@/apis';
import { useQuery } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';

const DetailStatisticsPage = () => {
  const eventId = useRecoilValue(eventIDState);
  const startDate = ATTENDEE_LIST[0].eventDates[0];
  const endDate =
    ATTENDEE_LIST[0].eventDates[ATTENDEE_LIST[0].eventDates.length - 1];

  const {
    data: eventDetail,
    isPending: isEventDetailPending,
    isError: isEventDetailError,
  } = useQuery({
    queryKey: ['getEventDetail', eventId],
    queryFn: () => getEventDetail(eventId),
  });

  const {
    data: eventStatistic,
    isPending: isEventStatisticPending,
    isError: isEventStatisticError,
  } = useQuery({
    queryKey: ['getEventStatistic', eventId],
    queryFn: () => getEventStatistic(eventId),
  });

  if (isEventDetailPending || isEventStatisticPending) {
    return <div>Loading...</div>;
  }

  if (isEventDetailError || isEventStatisticError) {
    return null;
  }

  return (
    <PageLayout
      topNavigation={<TopNavigation eventTitle={eventDetail.eventTitle} />}
      sideBar={<Sidebar />}
    >
      <S.DetailStatisticsPage>
        <S.TopContainer>
          <S.Title>세부 통계</S.Title>
          <S.EventDate>
            {`${eventStatistic.eventDates[0]} ~ ${eventStatistic.eventDates[eventStatistic.eventDates.length - 1]}`}
          </S.EventDate>
        </S.TopContainer>

        <S.ContentContainer>
          <S.ChartWrapper>
            <S.ChartTitle>전공별 참석 비율</S.ChartTitle>
            <S.Chart>
              <MajorChart attendeeList={eventStatistic} />
            </S.Chart>
          </S.ChartWrapper>

          <S.ChartWrapper>
            <S.ChartTitle>학번별 참석 비율</S.ChartTitle>
            <S.Chart>
              <YearChart attendeeList={eventStatistic} />
            </S.Chart>
          </S.ChartWrapper>

          <S.ChartWrapper>
            <S.ChartTitle>전체 학생 중 이수 비율</S.ChartTitle>
            <S.Chart>
              <CompletionChart attendeeList={eventStatistic} />
            </S.Chart>
          </S.ChartWrapper>
        </S.ContentContainer>
      </S.DetailStatisticsPage>
    </PageLayout>
  );
};

export default DetailStatisticsPage;
