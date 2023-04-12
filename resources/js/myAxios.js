import axios from "axios";
import router from "./router";

const myAxios = axios.create();

// Request
myAxios.interceptors.request.use((config) => {
  if (localStorage.getItem('token')) {
    config.headers = {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  }

  return config
}, (err) => { })

// Responce
myAxios.interceptors.response.use((config) => {
  if (localStorage.getItem('token')) {
    config.headers = {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  }

  return config
}, (err) => {
  if (err.response.status === 401) {
    router.push({ name: 'user.login' })
  }
})

export default myAxios;