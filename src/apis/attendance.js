import { axiosInstance } from '@/axios';

export const getAttendanceList = async (eventId) => {
  const { data } = await axiosInstance.get(`/api/v1/attendancelist/${eventId}`);

  return data;
};

export const updateAttendanceList = async (eventId, body) => {
  const { data } = await axiosInstance.put(
    `/api/v1/attendance/manage/${eventId}`,
    body,
  );

  return data;
};

export const postAttendance = async (eventId, eventScheduleId, body) => {
  const { data } = await axiosInstance.put(
    `/api/v1/attendance/manage/${eventId}/${eventScheduleId}`,
    body,
  );

  return data;
};
