import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const CompletionChart = ({ attendeeList }) => {
  const totalStudents = attendeeList.eventStatisticDetailResponseDtos.length;
  const completedStudents =
    attendeeList.eventStatisticDetailResponseDtos.filter(
      (student) => student.completion,
    ).length;

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
            const label = tooltipItem.label || '';

            if (label === '이수') {
              return `${completedStudents}명`;
            } else if (label === '미이수') {
              const nonCompleted = totalStudents - completedStudents;
              return `${nonCompleted}명`;
            }
            return `${currentValue}%`;
          },
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

  return <Doughnut data={completionData} options={options} />;
};

export default CompletionChart;
