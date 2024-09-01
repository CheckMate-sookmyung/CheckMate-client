import { axiosInstance } from '@/axios';

export const getEventDetail = async (userId, eventId) => {
  const { data } = await axiosInstance.get(
    `/api/v1/events/${userId}/${eventId}`,
  );

  return data;
};
