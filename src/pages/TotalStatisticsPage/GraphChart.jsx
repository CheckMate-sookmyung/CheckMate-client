import React, { useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import { SortedStudent } from './TotalStatisticsPage';
import {
  Chart as ChartJS,
  BarElement,
  Title,
  Tooltip,
  Legend as ChartLegend,
  CategoryScale,
  LinearScale,
} from 'chart.js';
import { GraphBox } from '@/components';
import styled from 'styled-components';
import { BsThreeDots } from 'react-icons/bs';

ChartJS.register(
  BarElement,
  Title,
  Tooltip,
  ChartLegend,
  CategoryScale,
  LinearScale,
);

const ChartContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
`;

const ChartArea = styled.div`
  display: flex;
  flex: 1;
  min-width: 300px;
  max-width: 600px;
  padding-right: 40px;
`;

const LegendContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 10px;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #323232;
  gap: 10px;
`;

const LegendCircle = styled.div`
  width: 16px;
  height: 16px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  margin-right: 10px;
`;

const LegendText = styled.span`
  color: #323232;
  flex-grow: 1;
`;

const LegendDots = styled(BsThreeDots)`
  font-size: 16px;
  color: #5495f6;
  display: flex;
  align-items: center;
`;

const LegendPercentage = styled.span`
  font-size: 16px;
  color: #2f7cef;
  display: flex;
  align-items: center;
`;

const HiddenLegend = styled.div`
  display: block;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const Legend = ({ topStudents, ratedColors }) => (
  <LegendContainer>
    {topStudents.map((student, index) => (
      <LegendItem key={student.studentName}>
        <LegendCircle color={ratedColors[index]} />
        <LegendText>{student.studentName}</LegendText>
        <LegendDots />
        <LegendPercentage>{`(${student.attendanceRate}%)`}</LegendPercentage>
      </LegendItem>
    ))}
  </LegendContainer>
);

const GraphChart = () => {
  const studentData = useContext(SortedStudent);

  if (!studentData || studentData.length === 0) {
    return <div>Loading...</div>;
  }

  const sortedStudents = [...studentData].sort(
    (a, b) => b.attendanceRate - a.attendanceRate,
  );
  const topStudents = sortedStudents.slice(0, 5);

  const labels = topStudents.map((student) => student.studentName);
  const attendanceRates = topStudents.map((student) => student.attendanceRate);

  const ratedColors = ['#1E88E5', '#42A5F5', '#90CAF9', '#BBDEFB', '#E3F2FD'];

  const graphData = {
    labels,
    datasets: [
      {
        label: '출석률',
        data: attendanceRates,
        backgroundColor: ratedColors,
        borderWidth: 1,
        datalabels: {
          color: '#fff',
          align: 'end',
          anchor: 'end',
        },
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#fff',
        titleColor: '#000',
        bodyColor: '#000',
        borderColor: '#ccc',
        borderWidth: 1,
        callbacks: {
          label: (context) => {
            const label = context.label || '';
            const value = context.raw || 0;
            return `${label}: ${value}%`;
          },
        },
      },
      datalabels: {
        display: true,
        color: 'white',
        font: {
          weight: 'bold',
          size: 14,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 20,
          font: {
            size: 12,
          },
        },
        title: {
          display: false,
        },
      },
      x: {
        grid: {
          display: true,
        },
        ticks: {
          font: {
            size: 12,
          },
        },
      },
    },
  };

  return (
    <GraphBox title="출석률 좋은 학생 TOP 5">
      <ChartContent>
        <ChartArea>
          <Bar data={graphData} options={options} />
        </ChartArea>
        <HiddenLegend>
          <Legend topStudents={topStudents} ratedColors={ratedColors} />
        </HiddenLegend>
      </ChartContent>
    </GraphBox>
  );
};

export default GraphChart;
