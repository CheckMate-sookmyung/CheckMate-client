import { Button } from '@/components';
import * as S from './RegisterCompleted.style';
import { useNavigate } from 'react-router-dom';

const RegisterCompleted = () => {
  const nav = useNavigate();
  return (
    <div>
      <S.Wrapper>
        <S.ComponentContainer>
          <S.Check />
          <S.CompletedNotice>행사 등록이 완료되었어요!</S.CompletedNotice>
          <S.InfoBox>
            체크메이트 테스트 행사
            <br />
            2024-08-13
          </S.InfoBox>
          <S.ButtonWrapper>
            <Button
              label="홈으로 돌아가기"
              backgroundColor="#2F7CEF"
              textColor="#FFFFFF"
              onClick={() => nav('/', { replace: true })}
            />
            <Button
              label="행사 목록으로"
              backgroundColor="#F2F2F2"
              textColor="#323232"
              onClick={() => nav('/event', { replace: true })}
            />
          </S.ButtonWrapper>
        </S.ComponentContainer>
      </S.Wrapper>
    </div>
  );
};

export default RegisterCompleted;
