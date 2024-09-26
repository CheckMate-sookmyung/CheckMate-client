import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import * as S from './EventsGraphChart.style';
import { axiosInstance } from '@/axios';

ChartJS.register(ArcElement, Tooltip, Legend);

const EventsGraphChart = () => {
  const [rankedEvents, setRankedEvents] = useState([]);

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const eventsResponse = await axiosInstance.get(
          `/api/v1/events/statistic/event`,
        );

        const top3Events = eventsResponse.data.slice(0, 3);

        const coloredEvents = top3Events.map((event, index) => {
          let color = '';
          switch (index) {
            case 0:
              color = '#333';
              break;
            case 1:
              color = '#1E88E5';
              break;
            case 2:
              color = '#4CAF50';
              break;
            default:
              color = '#E4E4E4';
          }
          return { ...event, color };
        });

        setRankedEvents(coloredEvents);
      } catch (error) {
        console.error('Error fetching statistics:', error);
      }
    };

    fetchStatistics();
  }, []);

  const createEventDoughnutData = (rating, color) => ({
    labels: ['참석', '미참석'],
    datasets: [
      {
        data: [Math.floor(rating), Math.floor(100 - rating)],
        backgroundColor: [color, '#E0E0E0'],
        hoverBackgroundColor: [color, '#E0E0E0'],
        borderWidth: 0,
      },
    ],
  });

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '30%',
    plugins: {
      legend: {
        display: false,
        position: 'right',
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const label = tooltipItem.label || '';
            const value = tooltipItem.raw || 0;
            return `${label}: ${value}%`;
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
  };

  return (
    <S.GraphContainer>
      {rankedEvents.map((event, index) => (
        <S.GraphBoxWrapper key={event.eventTitle}>
          <S.LeftSide>
            <S.TopBadge>TOP {index + 1}</S.TopBadge>
            <S.EventTitle>{event.eventTitle}</S.EventTitle>
            <S.AttendanceInfo>
              <S.AttendancePercentage>
                {Math.floor(event.eventRating)}%
              </S.AttendancePercentage>
              <S.AttendanceLabel>참석</S.AttendanceLabel>
            </S.AttendanceInfo>
          </S.LeftSide>
          <S.ChartWrapper>
            <Doughnut
              data={createEventDoughnutData(event.eventRating, event.color)}
              options={doughnutOptions}
            />
          </S.ChartWrapper>
        </S.GraphBoxWrapper>
      ))}
    </S.GraphContainer>
  );
};

export default EventsGraphChart;
