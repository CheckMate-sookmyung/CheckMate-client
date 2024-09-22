import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const YearChart = ({ attendeeList }) => {
  const yearAttendance = {};
  let totalCompletedStudentsByYear = 0;

  attendeeList.eventStatisticDetailResponseDtos.forEach((student) => {
    if (student.completion) {
      totalCompletedStudentsByYear++;
      const year = String(student.studentNumber).substring(0, 2);
      if (yearAttendance[year]) {
        yearAttendance[year]++;
      } else {
        yearAttendance[year] = 1;
      }
    }
  });

  const sortedYearAttendance = Object.entries(yearAttendance).sort(
    (a, b) => b[0] - a[0],
  );

  const yearLabels = sortedYearAttendance.map((item) => `${item[0]}학번`);
  const yearValues = sortedYearAttendance.map((item) => item[1]);

  const yearPercentages = yearValues.map((value) =>
    Math.round((value / totalCompletedStudentsByYear) * 100),
  );

  const yearColors = yearValues.map((_, index) => {
    const colors = [
      '#2F7CEF',
      '#79B8FA',
      '#ACCDFF',
      '#2f7cef33',
      '#EDF5FF',
      '#E4E4E4',
    ];
    return colors[index % colors.length];
  });

  const yearData = {
    labels: yearLabels,
    datasets: [
      {
        data: yearPercentages,
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
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const dataset = tooltipItem.dataset;
            const currentValue = yearValues[tooltipItem.dataIndex];
            const label = tooltipItem.label || '';
            return `${currentValue}명 참석`;
          },
        },
      },
      datalabels: {
        color: '#000',
        anchor: 'center',
        align: 'center',
        textAlign: 'center',
        formatter: (value, context) => {
          const total = context.dataset.data.reduce((acc, val) => acc + val, 0);
          const percentage = ((value / total) * 100).toFixed(0);
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
    cutout: '30%',
  };

  return <Doughnut data={yearData} options={options} />;
};

export default YearChart;
