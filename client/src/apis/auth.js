import { axiosInstance } from "./axiosInstance";

export const signupUser = async (userInfo) => {
  try {
    const res = await axiosInstance.post(`/auth/signup`, userInfo);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const signinUser = async (userInfo) => {
  try {
    const res = await axiosInstance.post(`/auth/signin`, userInfo);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};
