import * as S from './DetailStatisticsPage.style';
import { PageLayout } from '@/Layout';
import { TopNavigation } from '@/components';
import MajorChart from './MajorChart';
import YearChart from './YearChart';
import CompletionChart from './CompletionChart';
import { ATTENDEE_LIST } from './attendee';

const DetailStatisticsPage = () => {
  const startDate = ATTENDEE_LIST[0].eventSchedules[0].startDate.split('T')[0];
  const endDate = ATTENDEE_LIST[0].eventSchedules[0].endDate.split('T')[0];

  return (
    <PageLayout topNavigation={<TopNavigation />}>
      <S.Container>
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
      </S.Container>
    </PageLayout>
  );
};

export default DetailStatisticsPage;
