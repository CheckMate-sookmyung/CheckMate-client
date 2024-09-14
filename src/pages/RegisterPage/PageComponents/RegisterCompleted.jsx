import { Button, Modal } from '@/components';
import { useNavigate } from 'react-router-dom';
import * as S from './RegisterCompleted.style';
import { format } from 'date-fns';

const RegisterCompletedModal = ({ eventTitle, eventScheduleList }) => {
  const nav = useNavigate();

  return (
    <>
      <Modal>
        <S.GreenCheckImg src="/img/GreenCheck.svg" />
        <S.Title>행사 등록이 완료되었어요!</S.Title>
        <S.ContentContainer>
          <S.ContentBox>
            <S.EventTitle>{eventTitle}</S.EventTitle>
            <S.EventScheduleList>
              {eventScheduleList.map((schedule, index) => (
                <S.ScheduleItem key={index}>
                  {`${format(
                    new Date(schedule.eventDate),
                    `MM월 dd일 `,
                  )} ${format(
                    new Date(schedule.eventStartTime),
                    'HH:mm',
                  )} ~ ${format(new Date(schedule.eventEndTime), 'HH:mm')}`}
                </S.ScheduleItem>
              ))}
            </S.EventScheduleList>
          </S.ContentBox>
          <S.ButtonWrapper>
            <Button
              label="홈으로 돌아가기"
              backgroundColor="#2F7CEF"
              textColor="#FFFFFF"
              onClick={() => {
                nav('/', { replace: true });
              }}
            />
            <Button
              label="행사 목록으로"
              backgroundColor="#F2F2F2"
              textColor="#323232"
              onClick={() => {
                nav('/event', { replace: true });
              }}
            />
          </S.ButtonWrapper>
        </S.ContentContainer>
      </Modal>
    </>
  );
};

export default RegisterCompletedModal;
