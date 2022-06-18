import axios from 'axios'

export const api = axios.create({
  baseURL: "https://telemed-back-end.herokuapp.com"
})

export const createSession = async (email, senha) => {
  return await api.post('/login', { email: email, senha: senha })
}

/*api.interceptors.request.use(async config => {
  const token = localStorage.getItem("token")

  if (token) {
    config.headers.authorization = `Bearer ${token}`
  }

  return config
})*/


export default api