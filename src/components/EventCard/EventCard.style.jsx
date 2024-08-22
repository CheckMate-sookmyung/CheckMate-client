import styled from 'styled-components';

export const EventCard = styled.div`
  display: flex;
  flex-direction: column;
  transition:
    transform 0.3s,
    box-shadow 0.3s;
  padding: 22px 18px;
  border-radius: 20px;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.07);
  background: var(--White, #fff);
  cursor: pointer;
  gap: 10px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 30px 0px rgba(0, 0, 0, 0.1);
  }
`;

// 행사 타이틀과 일정
export const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 4px;
  gap: 8px;
`;

export const EventTitle = styled.p`
  color: var(--Black-2, #323232);
  font-size: 22px;
  font-weight: 600;
`;

export const EventDate = styled.div`
  display: flex;
  color: var(--Black-2, #323232);
  gap: 10px;
`;

// 행사 포스터 이미지
export const EventImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  border: 1px solid var(--blue-4, #accdff);
  border-radius: 10px;
  background: url(<path-to-image>) lightgray 50% / cover no-repeat;
  aspect-ratio: 344/207;
  height: 180px;
  overflow: hidden;
`;

export const EventImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  transition:
    background 0.3s,
    transform 0.3s;
  margin-top: auto;
  border: none;
  border-radius: 10px;
  width: 100%;
  height: 40px;
  color: white;
  background: var(--blue-0, #2f7cef);
  cursor: pointer;
  font-size: 16px;

  &:not(:disabled) {
    &:hover {
      background: #324fb9;
    }
  }

  &:disabled {
    background-color: var(--gray-300, #636363);
    cursor: not-allowed;
  }
`;
