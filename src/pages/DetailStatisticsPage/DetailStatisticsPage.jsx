import * as S from './DetailStatisticsPage.style';
import { PageLayout } from '@/Layout';
import { TopNavigation } from '@/components';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { ATTENDEE_LIST } from './attendee';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const DetailStatisticsPage = () => {
  const startDate = ATTENDEE_LIST[0].eventSchedules[0].startDate.split('T')[0];
  const endDate = ATTENDEE_LIST[0].eventSchedules[0].endDate.split('T')[0];

  // 학과별 참석 비율을 계산하는 로직
  const departmentAttendance = {};
  ATTENDEE_LIST[0].students.forEach((student) => {
    if (student.isCompleted) {
      if (departmentAttendance[student.major]) {
        departmentAttendance[student.major]++;
      } else {
        departmentAttendance[student.major] = 1;
      }
    }
  });

  const sortedDepartmentAttendance = Object.entries(departmentAttendance).sort(
    (a, b) => b[1] - a[1],
  );

  const majorAttendanceLimit = 4;
  const departmentLabels = sortedDepartmentAttendance
    .slice(0, majorAttendanceLimit)
    .map((item) => item[0]);

  const etcValue = sortedDepartmentAttendance
    .slice(majorAttendanceLimit)
    .reduce((sum, item) => sum + item[1], 0);

  if (etcValue > 0) {
    departmentLabels.push('기타');
  }

  const departmentValues = sortedDepartmentAttendance
    .slice(0, majorAttendanceLimit)
    .map((item) => item[1]);

  if (etcValue > 0) {
    departmentValues.push(etcValue);
  }

  const departmentColors = departmentValues.map((_, index) => {
    if (index < 4) {
      return ['#2F7CEF', '#ACCDFF', '#2f7cef33', '#EDF5FF'][index];
    } else {
      return '#E4E4E4';
    }
  });

  const departmentData = {
    labels: departmentLabels,
    datasets: [
      {
        data: departmentValues,
        backgroundColor: departmentColors,
      },
    ],
  };

  // 학번별 참석 비율을 계산하는 로직
  const yearAttendance = {};
  ATTENDEE_LIST[0].students.forEach((student) => {
    if (student.isCompleted) {
      if (yearAttendance[student.studentYear]) {
        yearAttendance[student.studentYear]++;
      } else {
        yearAttendance[student.studentYear] = 1;
      }
    }
  });

  const sortedYearAttendance = Object.entries(yearAttendance).sort(
    (a, b) => b[0] - a[0],
  );

  const yearAttendanceLimit = 4;
  const yearLabels = sortedYearAttendance
    .slice(0, yearAttendanceLimit)
    .map((item) => `${item[0]}학번`);

  const etcYearValue = sortedYearAttendance
    .slice(yearAttendanceLimit)
    .reduce((sum, item) => sum + item[1], 0);

  if (etcYearValue > 0) {
    yearLabels.push('기타');
  }

  const yearValues = sortedYearAttendance
    .slice(0, yearAttendanceLimit)
    .map((item) => item[1]);

  if (etcYearValue > 0) {
    yearValues.push(etcYearValue);
  }

  const yearColors = yearValues.map((_, index) => {
    if (index < 4) {
      return ['#2F7CEF', '#ACCDFF', '#2f7cef33', '#EDF5FF'][index];
    } else {
      return '#E4E4E4';
    }
  });

  const yearData = {
    labels: yearLabels,
    datasets: [
      {
        data: yearValues,
        backgroundColor: yearColors,
      },
    ],
  };

  // 이수율 계산 로직
  const totalStudents = ATTENDEE_LIST[0].students.length;
  const completedStudents = ATTENDEE_LIST[0].students.filter(
    (student) => student.isCompleted,
  ).length;

  console.log('Total Students:', totalStudents);
  console.log('Completed Students:', completedStudents);

  let completionRate = 0;
  let nonCompletionRate = 0;

  if (totalStudents > 0) {
    completionRate = parseFloat(
      ((completedStudents / totalStudents) * 100).toFixed(2),
    );
    nonCompletionRate = parseFloat((100 - completionRate).toFixed(2));
  }

  const completionData = {
    labels: ['이수', '미이수'],
    datasets: [
      {
        data: [completionRate, nonCompletionRate],
        backgroundColor: ['#2F7CEF', '#ACCDFF'],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true,
          padding: 20,
          boxWidth: 10,
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const dataset = tooltipItem.dataset;
            const currentValue = dataset.data[tooltipItem.dataIndex];
            const totalStudents = ATTENDEE_LIST[0].students.length;
            const label = tooltipItem.label || '';

            if (label === '이수') {
              return `${completedStudents}명`;
            } else if (label === '미이수') {
              const nonCompleted = totalStudents - completedStudents;
              return `${nonCompleted}명`;
            } else if (departmentAttendance[label]) {
              return `${departmentAttendance[label]}명`;
            } else if (yearAttendance[label.replace('학번', '')]) {
              const year = label.replace('학번', '');
              return `${yearAttendance[year]}명`;
            }
            return `${currentValue}명`;
          },
        },
      },
      datalabels: {
        color: '#000',
        anchor: 'center',
        align: 'center',
        textAlign: 'center',
        formatter: (value, context) => {
          const percentage = value.toFixed(0);
          const label = context.chart.data.labels[context.dataIndex];
          return `${label} \n ${percentage}%`;
        },
      },
    },
    layout: {
      padding: {
        right: 10,
      },
    },
  };

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
              <S.ChartTitle>행사에 참석한 학과 비율</S.ChartTitle>
              <S.Chart>
                <Doughnut data={departmentData} options={options} />
              </S.Chart>
            </S.ChartWrapper>

            <S.ChartWrapper>
              <S.ChartTitle>각 학번별 참석률</S.ChartTitle>
              <S.Chart>
                <Doughnut data={yearData} options={options} />
              </S.Chart>
            </S.ChartWrapper>

            <S.ChartWrapper>
              <S.ChartTitle>전체 학생 중 이수율</S.ChartTitle>
              <S.Chart>
                <Doughnut data={completionData} options={options} />
              </S.Chart>
            </S.ChartWrapper>
          </S.ContentContainer>
        </S.DetailStatisticsPage>
      </S.Container>
    </PageLayout>
  );
};

export default DetailStatisticsPage;
