import { recoilPersist } from 'recoil-persist';
import { atom } from 'recoil';

const { persistAtom } = recoilPersist({
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

export const eventTypeState = atom({
  key: 'eventType',
  default: 'OFFLINE',
});

export const eventTargetState = atom({
  key: 'eventTarget',
  default: 'INTERNAL',
});

export const eventTitle = atom({
  key: 'eventTitle',
  default: '',
});

export const eventDetail = atom({
  key: 'eventDetail',
  default: '',
});

export const eventImage = atom({
  key: 'eventImage',
  default: '',
});

export const attendanceListFile = atom({
  key: 'attendanceListFile',
  default: '',
});

export const minCompletionTimes = atom({
  key: 'minCompletionTimes',
  default: 0,
});

export const eventScheduleList = atom({
  key: 'eventSchedules',
  default: [
    {
      eventDate: new Date(),
      eventStartTime: new Date(),
      eventEndTime: new Date(),
    },
  ],
});

export const RegisterStep = atom({
  key: 'RegisterStep',
  default: 1,
});
