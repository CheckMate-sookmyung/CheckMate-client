import { useResetRecoilState } from 'recoil';
import {
  attendanceListFile,
  eventDetail,
  eventImage,
  eventScheduleList,
  eventTitle,
  eventType,
  minCompletionTimes,
  offlineStatus,
} from './state';

const useResetAllStates = () => {
  const resetOfflineStatus = useResetRecoilState(offlineStatus);
  const resetEventType = useResetRecoilState(eventType);
  const resetEventTitle = useResetRecoilState(eventTitle);
  const resetEventDetail = useResetRecoilState(eventDetail);
  const resetEventImage = useResetRecoilState(eventImage);
  const resetAttendanceListFile = useResetRecoilState(attendanceListFile);
  const resetMinCompletionTimes = useResetRecoilState(minCompletionTimes);
  const resetEventSchedules = useResetRecoilState(eventScheduleList);

  const resetAll = () => {
    resetOfflineStatus();
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
