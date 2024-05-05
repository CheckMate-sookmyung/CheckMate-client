import { createGlobalStyle } from 'styled-components';
import { resetStyles } from './ResetStyles.style';
import { pretendardFont } from './PretendardFont.style';
import { checkMateStyles } from './CheckMateStyles.style';

export const GlobalStyle = createGlobalStyle`
  // 덮어쓰기를 고려하여 배치 순서 고려
  ${resetStyles}
  ${pretendardFont}
  ${checkMateStyles}
`;
