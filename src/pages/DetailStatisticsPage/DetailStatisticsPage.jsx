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

  // 학과 비율
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

  // 학번별 참석률
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

  // 학과별 참석률
  const departmentData = {
    labels: Object.keys(departmentAttendance),
    datasets: [
      {
        data: Object.values(departmentAttendance),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
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

  // 학번별 참석률
  const yearData = {
    labels: Object.keys(yearAttendance).map((year) => `${year}학번`),
    datasets: [
      {
        data: Object.values(yearAttendance),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
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
