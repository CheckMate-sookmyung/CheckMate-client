import { axiosInstance } from '../../axios';

const postAttendanceSign = async ({ userId, eventId, studentId }, body) => {
  const { data } = await axiosInstance.post(
    `/api/v1/attendance/sign/{userId}/{eventId}/{studentInfoId}`,
    body,
  );

  return data;
};

export { postAttendanceSign };
