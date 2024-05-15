import { axiosInstance } from '../../axios';

export const getAttendanceCheck = async ({ userId, eventId }, params) => {
  const { data } = await axiosInstance.get(
    `/api/v1/attendance/check/${userId}/${eventId}`,
    {
      params,
    },
  );

  return data;
};

export const postAttendanceSign = async (
  { userId, eventId, studentInfoId },
  body,
) => {
  await axiosInstance.post(
    `/api/v1/attendance/sign/${userId}/${eventId}/${studentInfoId}`,
    body,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );
};
