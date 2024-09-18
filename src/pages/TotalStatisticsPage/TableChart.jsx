import TotalStatisticTable from '@/components/Table/TotalStatisticsTable';
import React, { useContext } from 'react';
import { SortedStudent } from './TotalStatisticsPage';
import * as S from './TotalStatisticsPage.style';

const TableChart = () => {
  const studentData = useContext(SortedStudent);
  const top10 = studentData.slice(0, 10);

  return (
    <div>
      <S.ChartTitle>참석률 좋은 학생 TOP 10</S.ChartTitle>
      <TotalStatisticTable studentData={top10} />
    </div>
  );
};

export default TableChart;
