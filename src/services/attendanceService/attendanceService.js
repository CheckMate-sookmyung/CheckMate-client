import { axiosInstance } from '../../axios';

export const getAttendanceCheck = async ({ eventId }, params) => {
  const { data } = await axiosInstance.get(
    `/api/v1/attendance/check/${eventId}`,
    {
      params,
    },
  );

  return data;
};

export const postAttendanceSign = async ({ eventId, studentInfoId }, body) => {
  await axiosInstance.post(
    `/api/v1/attendance/check/sign/${eventId}/${studentInfoId}`,
    body,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );
};
