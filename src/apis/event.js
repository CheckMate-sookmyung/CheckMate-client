import { axiosInstance } from '@/axios';

export const getEventDetail = async (userId, eventId) => {
  const { data } = await axiosInstance.get(
    `/api/v1/events/${userId}/${eventId}`,
  );

  return data;
};

export const deleteEvent = async (userId, eventId) => {
  const { data } = await axiosInstance.delete(
    `/api/v1/events/${userId}/${eventId}`,
  );

  return data;
};

export const postEventManager = async (userId, eventId, body) => {
  const { data } = await axiosInstance.post(
    `/api/v1/events/manger/${userId}/${eventId}`,
    body,
  );

  return data;
};

export const updateEventDetail = async (userId, eventId, body) => {
  const { data } = await axiosInstance.put(
    `/api/v1/events/${userId}/${eventId}`,
    body,
  );

  return data;
};
