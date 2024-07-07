import { recoilPersist } from 'recoil-persist';
import { atom, useRecoilState } from 'recoil';

const { persistAtom } = recoilPersist({
  key: 'persistEventID',
  storage: localStorage,
});

export const eventIDState = atom({
  key: 'EVENT_ID',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});
