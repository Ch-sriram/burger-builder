import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "https://burger-builder-ram.firebaseio.com/",
});

export default axiosInstance;
