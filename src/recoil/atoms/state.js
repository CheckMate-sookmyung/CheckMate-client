import { atom, useRecoilState } from 'recoil';

export const eventIDState = atom({
  key: 'EVENT_ID',
  default: 0,
});
