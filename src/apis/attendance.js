import { axiosInstance } from '@/axios';

export const getAttendanceList = async (userId, eventId) => {
  const { data } = await axiosInstance.get(
    `/api/v1/attendance/list/${userId}/${eventId}`,
  );

  return data;
};

export const updateAttendanceList = async (userId, eventId, body) => {
  const { data } = await axiosInstance.put(
    `/api/v1/attendance/list/${userId}/${eventId}`,
    body,
  );

  return data;
};
