import { APP_CONFIG } from '@/shared/config/app-config'
import axios from 'axios'
import { authApi } from '@/features/auth/api/auth.api'
import { useUserStore } from '@/entities/user/model/store'
import { useTokenStore } from '@/shared/api/token.store'

export const api = axios.create({
  baseURL: APP_CONFIG.apiUrl,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
})

api.interceptors.request.use((config) => {
  const token = useTokenStore.getState().accessToken
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      try {
        await authApi.refresh()
        return api(originalRequest)
      } catch (error) {
        useUserStore.getState().setUser(null)
        window.location.href = '/login'
        return Promise.reject(error)
      }
    }

    return Promise.reject(error)
  }
)
