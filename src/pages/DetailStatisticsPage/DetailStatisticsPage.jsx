import * as S from './DetailStatisticsPage.style';
import { PageLayout } from '@/Layout';
import { TopNavigation } from '@/components';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { ATTENDEE_LIST } from './attendee';

ChartJS.register(ArcElement, Tooltip, Legend);

const DetailStatisticsPage = () => {
  const startDate = ATTENDEE_LIST[0].eventSchedules[0].date.split('T')[0];
  const endDate =
    ATTENDEE_LIST[0].eventSchedules[
      ATTENDEE_LIST[0].eventSchedules.length - 1
    ].date.split('T')[0];

  // 학과별 참석 비율을 계산하는 로직
  const departmentAttendance = {};
  ATTENDEE_LIST[0].eventSchedules.forEach((schedule) => {
    schedule.students.forEach((student) => {
      if (student.isAttending) {
        if (departmentAttendance[student.major]) {
          departmentAttendance[student.major]++;
        } else {
          departmentAttendance[student.major] = 1;
        }
      }
    });
  });

  // 학과별 참석 비율 정렬
  const sortedDepartmentAttendance = Object.entries(departmentAttendance).sort(
    (a, b) => b[1] - a[1],
  );
  const departmentLabels = sortedDepartmentAttendance.map((item) => item[0]);
  const departmentValues = sortedDepartmentAttendance.map((item) => item[1]);

  const departmentData = {
    labels: departmentLabels,
    datasets: [
      {
        data: departmentValues,
        backgroundColor: [
          '#2F7CEF',
          '#ACCDFF',
          '#2f7cef33',
          '#EDF5FF',
          '#E4E4E4',
        ],
      },
    ],
  };

  // 학번별 참석 비율을 계산하는 로직
  const yearAttendance = {};
  ATTENDEE_LIST[0].eventSchedules.forEach((schedule) => {
    schedule.students.forEach((student) => {
      if (student.isAttending) {
        if (yearAttendance[student.studentYear]) {
          yearAttendance[student.studentYear]++;
        } else {
          yearAttendance[student.studentYear] = 1;
        }
      }
    });
  });

  // 학번별 참석 비율 정렬
  const sortedYearAttendance = Object.entries(yearAttendance).sort(
    (a, b) => b[1] - a[1],
  );
  const yearLabels = sortedYearAttendance.map((item) => `${item[0]}학번`);
  const yearValues = sortedYearAttendance.map((item) => item[1]);

  const yearData = {
    labels: yearLabels,
    datasets: [
      {
        data: yearValues,
        backgroundColor: [
          '#2F7CEF',
          '#ACCDFF',
          '#2f7cef33',
          '#EDF5FF',
          '#E4E4E4',
        ],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'right',
      },
    },
  };

  return (
    <PageLayout topNavigation={<TopNavigation />}>
      <S.Container>
        <S.DetailStatisticsPage>
          <S.TopContainer>
            <S.Title>행사별 통계</S.Title>
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
          </S.ContentContainer>
        </S.DetailStatisticsPage>
      </S.Container>
    </PageLayout>
  );
};

export default DetailStatisticsPage;
