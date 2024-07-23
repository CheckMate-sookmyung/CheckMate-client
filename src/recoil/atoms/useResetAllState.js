import { useResetRecoilState } from 'recoil';
import {
  attendanceListFile,
  eventDetail,
  eventImage,
  eventScheduleList,
  eventTitle,
  eventTypeState,
  minCompletionTimes,
  eventTargetState,
} from './state';

const useResetAllStates = () => {
  const resetEventType = useResetRecoilState(eventTypeState);
  const resetEvenTarget = useResetRecoilState(eventTargetState);
  const resetEventTitle = useResetRecoilState(eventTitle);
  const resetEventDetail = useResetRecoilState(eventDetail);
  const resetEventImage = useResetRecoilState(eventImage);
  const resetAttendanceListFile = useResetRecoilState(attendanceListFile);
  const resetMinCompletionTimes = useResetRecoilState(minCompletionTimes);
  const resetEventSchedules = useResetRecoilState(eventScheduleList);

  const resetAll = () => {
    resetEvenTarget();
    resetEventType();
    resetEventTitle();
    resetEventDetail();
    resetEventImage();
    resetAttendanceListFile();
    resetMinCompletionTimes();
    resetEventSchedules();
  };

  return resetAll;
};

export default useResetAllStates;
