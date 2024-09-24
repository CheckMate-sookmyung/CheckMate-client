import { axiosInstance } from '@/axios';

export const postMail = async (eventId, body) => {
  const { data } = await axiosInstance.post(`/api/v1/mail/${eventId}`, body);

  return data;
};

export const putMail = async (mailId, body) => {
  const { data } = await axiosInstance.put(`/api/v1/mail/${mailId}`, body);

  return data;
};

export const getMail = async (mailId, params) => {
  const { data } = await axiosInstance.get(`/api/v1/mail/${mailId}`, {
    params,
  });

  return data;
};

export const getSendMail = async (eventId, params) => {
  const { data } = await axiosInstance.get(`/api/v1/mail/send/${eventId}`, {
    params,
  });

  return data;
};

export const deleteMail = async (mailId) => {
  const { data } = await axiosInstance.delete(`/api/v1/mail/${mailId}`);

  return data;
};
