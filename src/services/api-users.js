import axios from 'axios';

const BASE_URL = 'https://dummyjson.com';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

const getUsers = (params) => {
  const res = axiosInstance.get('/users', { params });
  // console.log('res', res);
  return res;
};

export { getUsers };
