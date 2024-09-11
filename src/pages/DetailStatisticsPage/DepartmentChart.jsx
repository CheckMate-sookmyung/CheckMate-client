import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { ATTENDEE_LIST } from './attendee';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const DepartmentChart = () => {
  const departmentAttendance = {};
  let totalCompletedStudentsByMajor = 0;

  ATTENDEE_LIST[0].students.forEach((student) => {
    if (student.isCompleted) {
      totalCompletedStudentsByMajor++;
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

  return <Doughnut data={departmentData} options={options} />;
};

export default DepartmentChart;
