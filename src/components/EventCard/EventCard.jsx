import * as S from './EventCard.style';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { eventIDState } from '@/recoil/atoms/state';
import { isWithinInterval, isPast, isToday } from 'date-fns';

const EventCard = ({ id, title, poster, startDate, endDate }) => {
  const setContent = useSetRecoilState(eventIDState);
  const navigate = useNavigate();

  const handleDetail = () => {
    setContent(id);
    navigate(`/events/dashboard`);
  };

  const attendanceCheck = (event) => {
    event.stopPropagation();
    navigate('/attendance/student-id');
  };

  const isEventOngoing = () => {
    if (endDate === null) {
      return isToday(new Date(startDate));
    }

    return isWithinInterval(new Date(), {
      start: new Date(startDate),
      end: new Date(endDate),
    });
  };

  const isEventEnded = () => {
    if (endDate === null) {
      return isPast(new Date(startDate));
    }

    return isPast(new Date(endDate));
  };

  return (
    <S.EventCard onClick={handleDetail}>
      <S.TopWrapper>
        <S.EventTitle>{title}</S.EventTitle>
        <S.EventDate>
          <span>{`일정 | ${endDate ? `${startDate} ~ ${endDate}` : startDate}`}</span>
        </S.EventDate>
      </S.TopWrapper>

      <S.EventImgWrapper>
        <S.EventImg
          src={poster || 'img/logo-background.svg'}
          isLogo={!poster}
          alt="event_poster"
        />
      </S.EventImgWrapper>

      <S.Button
        isEnded={isEventEnded()}
        isStarted={isEventOngoing()}
        onClick={attendanceCheck}
        disabled={!isEventOngoing()}
      >
        {isEventOngoing()
          ? '출석 체크 하기'
          : isEventEnded()
            ? '행사 종료'
            : '행사 예정'}
      </S.Button>
    </S.EventCard>
  );
};

export default EventCard;
