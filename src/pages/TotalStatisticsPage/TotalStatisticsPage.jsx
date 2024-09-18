import * as S from './TotalStatisticsPage.style';
import { PageLayout } from '@/Layout';
import { axiosInstance } from '@/axios';
import { DaterangePicker, Dropdown, TopNavigation } from '@/components';
import { createContext, useEffect, useState } from 'react';
import GraphChart from './GraphChart';
import TableChart from './TableChart';

export const SortedStudent = createContext();

const TotalStatisticsPage = () => {
  const [viewMode, setViewMode] = useState('그래프');
  const [studentGraph, setStudentGraph] = useState([]);

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const statisticsResponse = await axiosInstance.get(
          `/api/v1/events/statistic/student`,
        );

        const sortedData = statisticsResponse.data.sort(
          (a, b) => b.attendanceRate - a.attendanceRate,
        );
        setStudentGraph(sortedData);
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
          <S.FlexBox>
            <Dropdown
              items={['그래프', '표']}
              defaultItem={'그래프'}
              onSelect={setViewMode}
            />
            <DaterangePicker />
          </S.FlexBox>
          <SortedStudent.Provider value={studentGraph}>
            {viewMode === '그래프' && <GraphChart />}
            {viewMode === '표' && <TableChart />}
          </SortedStudent.Provider>
        </S.TotalStatisticsPage>
      </S.Container>
    </PageLayout>
  );
};

export default TotalStatisticsPage;
