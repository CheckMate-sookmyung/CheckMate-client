import { axiosInstance } from '@/axios';

export const getAttendanceList = async (eventId) => {
  const { data } = await axiosInstance.get(
    `/api/v1/events/attendanceList/${eventId}`,
  );

  return data;
};

export const updateAttendanceList = async (eventId, body) => {
  const { data } = await axiosInstance.put(
    `/api/v1/attendance/list/${eventId}`,
    body,
  );

  return data;
};
