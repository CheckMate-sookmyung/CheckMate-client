import { eventTypeState } from '@/recoil/atoms/state';
import * as S from '../../PageComponents/RegisterFirst.style';
import { useRecoilState } from 'recoil';

const EventTypeCard = ({ handleEventType }) => {
  const [eventType, setEventType] = useRecoilState(eventTypeState);

  return (
    <S.FlexWrapper>
      <S.Choicebox
        onClick={() => handleEventType('ONLINE')}
        isSelected={eventType === 'ONLINE'}
      >
        <S.FlexWrapper>
          <S.Category>온라인 행사</S.Category>
          <S.CategoryMini>On-line Event</S.CategoryMini>
        </S.FlexWrapper>
        <S.CustomImage src="img/ONLINE.svg" alt="" />
      </S.Choicebox>
      <S.Choicebox
        onClick={() => handleEventType('OFFLINE')}
        isSelected={eventType === 'OFFLINE'}
      >
        <S.FlexWrapper>
          <S.Category>오프라인 행사</S.Category>
          <S.CategoryMini>Off-line Event</S.CategoryMini>
        </S.FlexWrapper>

        <S.CustomImage src="img/OFFLINE.svg" alt="" />
      </S.Choicebox>
    </S.FlexWrapper>
  );
};

export default EventTypeCard;
