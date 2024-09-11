import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { ATTENDEE_LIST } from './attendee';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const YearChart = () => {
  const yearAttendance = {};
  let totalCompletedStudentsByYear = 0;

  ATTENDEE_LIST[0].students.forEach((student) => {
    if (student.isCompleted) {
      totalCompletedStudentsByYear++;
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

  const yearLabels = sortedYearAttendance.map((item) => `${item[0]}학번`);
  const yearValues = sortedYearAttendance.map((item) => item[1]);

  const yearColors = yearValues.map((_, index) => {
    const colors = ['#2F7CEF', '#79B8FA', '#ACCDFF', '#2f7cef33', '#EDF5FF'];
    return colors[index % colors.length];
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
      datalabels: {
        color: '#000',
        anchor: 'center',
        align: 'center',
        textAlign: 'center',
        formatter: (value, context) => {
          if (typeof value === 'number') {
            const percentage = value.toFixed(0);
            const label = context.chart.data.labels[context.dataIndex];
            return `${label} \n ${percentage}%`;
          }
          return '';
        },
      },
    },
    layout: {
      padding: {
        right: 10,
      },
    },
    cutout: '30%',
  };

  return <Doughnut data={yearData} options={options} />;
};

export default YearChart;
