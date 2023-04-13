import axios from "axios";
import router from "./router";

const myAxios = axios.create();

// Request
myAxios.interceptors.request.use((config) => {
  if (localStorage.getItem('token')) {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
  }

  return config
}, (err) => { })

// Responce
myAxios.interceptors.response.use((config) => {
  if (localStorage.getItem('token')) {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
  }

  return config
}, (err) => {
  if (err.response.data.message === 'Token has expired') {
    return axios.post('/api/auth/refresh', {}, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).then(res => {
      localStorage.setItem('token', res.data.access_token);

      err.config.headers.authorization = `Bearer ${res.data.access_token}`

      return myAxios.request(err.config);
    })
  }
  if (err.response.status === 401) {
    router.push({ name: 'user.login' })
  }
})

export default myAxios;