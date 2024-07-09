import { recoilPersist } from 'recoil-persist';
import { atom } from 'recoil';

export const { persistAtom } = recoilPersist({
  key: 'persistEventID',
  storage: sessionStorage,
});

export const eventIDState = atom({
  key: 'EVENT_ID',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const { persistEvent } = recoilPersist({
  key: 'persistRegister',
  storage: sessionStorage,
});

export const RegisterState = atom({
  key: 'RegisterInfo',
  default: {
    eventType: '',
    eventTitle: '',
    eventDetail: '',
    eventImage: '',
    attendanceListFile: '',
    minCompletionTimes: '',
    eventSchedules: [{ eventDate: '', eventStartTime: '', eventEndTime: '' }],
  },
  effects_UNSTABLE: [persistEvent],
});

export const RegisterStep = atom({
  key: 'RegisterStep',
  default: 1,
});

