import React, { useContext, useEffect, useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { SortedStudent } from './TotalStatisticsPage';
import {
  Chart as ChartJS,
  BarElement,
  Title,
  Tooltip,
  Legend as ChartLegend,
  CategoryScale,
  LinearScale,
  ArcElement,
} from 'chart.js';
import { GraphBox } from '@/components';
import * as S from './GraphChart.style';
import EventsGraphChart from './EventsGraphChart';

ChartJS.register(
  BarElement,
  Title,
  Tooltip,
  ChartLegend,
  CategoryScale,
  LinearScale,
  ArcElement,
);

const Legend = ({ topStudents, ratedColors }) => (
  <S.LegendContainer>
    {topStudents.map((student, index) => (
      <S.LegendItem key={student.studentName}>
        <S.LegendCircle color={ratedColors[index]} />
        <S.LegendText>{student.studentName}</S.LegendText>
        <S.LegendDots />
        <S.LegendPercentage>{`(${Math.floor(student.attendanceRate)}%)`}</S.LegendPercentage>
      </S.LegendItem>
    ))}
  </S.LegendContainer>
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
        borderRadius: 10,
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
    <div>
      <GraphBox title="출석률 좋은 학생 TOP 5">
        <S.ChartContent>
          <S.ChartArea>
            <Bar data={graphData} options={options} />
          </S.ChartArea>
          <S.HiddenLegend>
            <Legend topStudents={topStudents} ratedColors={ratedColors} />
          </S.HiddenLegend>
        </S.ChartContent>
      </GraphBox>
      <S.MarginBox>
        <S.ChartTitle>출석률 높은 행사 TOP 3</S.ChartTitle>
        <EventsGraphChart />
      </S.MarginBox>
    </div>
  );
};

export default GraphChart;
