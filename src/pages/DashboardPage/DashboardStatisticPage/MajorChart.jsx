import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const MajorChart = ({ attendeeList }) => {
  const majorAttendance = {};
  let totalCompletedStudentsByMajor = 0;

  attendeeList.eventStatisticDetailResponseDtos.forEach((student) => {
    if (student.completion) {
      totalCompletedStudentsByMajor++;
      if (majorAttendance[student.studentMajor]) {
        majorAttendance[student.studentMajor]++;
      } else {
        majorAttendance[student.studentMajor] = 1;
      }
    }
  });

  const sortedMajorAttendance = Object.entries(majorAttendance).sort(
    (a, b) => b[1] - a[1],
  );

  const majorAttendanceLimit = 6;
  const majorLabels = sortedMajorAttendance
    .slice(0, majorAttendanceLimit)
    .map((item) => item[0]);

  const etcValue = sortedMajorAttendance
    .slice(majorAttendanceLimit)
    .reduce((sum, item) => sum + item[1], 0);

  if (etcValue > 0) {
    majorLabels.push('기타');
  }

  const majorValues = sortedMajorAttendance
    .slice(0, majorAttendanceLimit)
    .map((item) => item[1]);

  if (etcValue > 0) {
    majorValues.push(etcValue);
  }

  const majorPercentages = majorValues.map((value) =>
    Math.round((value / totalCompletedStudentsByMajor) * 100),
  );

  const majorColors = majorValues.map((_, index) => {
    const colors = [
      '#2F7CEF',
      '#79B8FA',
      '#ACCDFF',
      '#2f7cef33',
      '#EDF5FF',
      '#E4E4E4',
      '#999',
    ];
    return colors[index % colors.length];
  });

  const majorData = {
    labels: majorLabels,
    datasets: [
      {
        data: majorPercentages,
        backgroundColor: majorColors,
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
            const label = tooltipItem.label || '';

            if (label === '기타') {
              const etcStudents =
                attendeeList.eventRatioDetailResponseDtos.length -
                totalCompletedStudentsByMajor;
              return `${etcStudents}명`;
            } else if (majorAttendance[label]) {
              return `${majorAttendance[label]}명`;
            } else {
              return `${currentValue}명`;
            }
          },
        },
      },

      datalabels: {
        color: '#000',
        anchor: 'center',
        align: 'center',
        textAlign: 'center',
        formatter: (value, context) => {
          const label = context.chart.data.labels[context.dataIndex];
          return `${label} \n ${value}%`;
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

  return <Doughnut data={majorData} options={options} />;
};

export default MajorChart;
