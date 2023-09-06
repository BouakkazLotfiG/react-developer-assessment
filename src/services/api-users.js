import axios from 'axios';

const BASE_URL = 'https://dummyjson.com';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

const getUsers = (params) => {
  return axiosInstance.get('/users', { params });
};

export { getUsers };
