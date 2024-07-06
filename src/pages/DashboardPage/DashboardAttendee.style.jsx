import styled from 'styled-components';

export const DashboardAttendee = styled.div`
  background: #f2f3f5;
  min-height: 100%;
  padding: 76px;
`;

// 행사 타이틀 + 버튼
export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #ebedf0;
  padding: 9px 18px;
  font-weight: 600;
  font-size: 14px;
  height: 30px;
  color: #2253ff;
  cursor: pointer;
  transition:
    background 0.3s ease,
    box-shadow 0.3s ease,
    transform 0.3s ease;

  &:hover {
    background: #4d74ff;
    color: #fff;
  }
`;

// 검색창
export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const SearchBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background-color: #ffffff;
  padding: 0 14px;
  width: 420px;
  height: 40px;
`;

export const SearchBox = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 14px;
  color: #000;
  background-color: transparent;

  &::placeholder {
    color: #aaaeb3;
  }
`;

export const RateWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 0 30px;
  min-width: 180px;
  height: 40px;
  gap: 10px;
`;

export const Rate = styled.p`
  display: flex;
  font-size: 14px;
  font-weight: 600;
  color: #bdbdbd;
`;

export const Attendee = styled.p`
  display: flex;
  font-size: 14px;
  font-weight: 600;
  color: #000000;
`;

// 탭정보
export const TabContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TabBar = styled.div`
  display: flex;
  gap: 10px;
  margin: 20px 0;
`;

export const Tab = styled.button`
  padding: 10px 20px;
  border: 1px solid ${(props) => (props.active ? '#4e75ff' : '#fff')};
  border-radius: 5px;
  background-color: ${(props) => (props.active ? '#4e75ff;' : '#fff')};
  color: ${(props) => (props.active ? '#fff' : '#000')};
  cursor: pointer;

  &:hover {
    background-color: #4e75ff;
    color: #fff;
  }
`;

// 출석 수정 버튼
export const EditBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 30px;
  padding: 0 10px;
  margin: 0 5px;
  border-radius: 7px;
  border: 1px solid #ebedf0;
  cursor: pointer;
  min-width: 84px;
  font-size: 12px;
  font-weight: 600;

  &:hover {
    border: 1px solid #4e75ff;
  }
`;

// 행사 정보
export const TableContainer = styled.div`
  width: 100%;
`;

export const TableTitle = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
  background-color: white;
  border-radius: 10px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  padding: 16px;
  text-align: left;
  font-size: 12px;
  font-weight: bold;
  color: #909499;
  border-bottom: 1px solid #ccc;
  white-space: nowrap;
  overflow: hidden;

  &:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const TableData = styled.td`
  padding: 16px;
  text-align: center;
  font-size: 14px;
  color: #555;
  white-space: nowrap;
  overflow: hidden;

  &:first-child {
    text-align: left;
  }
`;
