import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = '//' + process.env.VUE_APP_APIHOST;

axios.interceptors.response.use(res => {
  return res.data;
})

export default axios;
