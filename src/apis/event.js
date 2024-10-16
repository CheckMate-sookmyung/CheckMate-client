import { axiosInstance } from '@/axios';

export const getEventDetail = async (eventId) => {
  const { data } = await axiosInstance.get(`/api/v1/events/${eventId}`);

  return data;
};

export const deleteEvent = async (eventId) => {
  const { data } = await axiosInstance.delete(`/api/v1/events/${eventId}`);

  return data;
};

export const putEventManager = async (eventId, body) => {
  const { data } = await axiosInstance.put(
    `/api/v1/events/manager/${eventId}`,
    body,
  );

  return data;
};

export const updateEventDetail = async (eventId, body) => {
  const { data } = await axiosInstance.put(`/api/v1/events/${eventId}`, body);

  return data;
};

export const getEventStatistic = async (eventId) => {
  const { data } = await axiosInstance.get(
    `/api/v1/events/statistic/${eventId}`,
  );

  return data;
};
