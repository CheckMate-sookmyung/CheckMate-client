import * as S from './TotalStatisticsPage.style';
import { PageLayout } from '@/Layout';
import { axiosInstance } from '@/axios';
import { Dropdown, TopNavigation } from '@/components';
import { useEffect, useState } from 'react';

const TotalStatisticsPage = () => {
  const USER_ID = sessionStorage.getItem('id');
  const [viewMode, setViewMode] = useState('그래프');

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const statisticsResponse = await axiosInstance.get(
          `/api/v1/events/statistic/student/100?memberId=${USER_ID}&authority=MEMBER&member=true`,
        );

        console.log(statisticsResponse);
      } catch (error) {
        console.error('Error fetching statistics:', error);
      }
    };

    fetchStatistics();
  }, []);

  return (
    <PageLayout topNavigation={<TopNavigation />}>
      <S.Container>
        <S.TotalStatisticsPage>
          <Dropdown
            items={['그래프', '표']}
            defaultItem={'그래프'}
            onSelect={setViewMode}
          />
        </S.TotalStatisticsPage>
      </S.Container>
    </PageLayout>
  );
};

export default TotalStatisticsPage;
