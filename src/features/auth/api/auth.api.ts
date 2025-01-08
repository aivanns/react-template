import { api } from '@/shared/api/index.api'
import { User } from '@/entities/user/model/user'
import { useTokenStore } from '@/shared/api/token.store'

export const authApi = {
  signIn: async (email: string, password: string): Promise<User> => {
    const { data } = await api.post('/auth/sign-in', { email, password })
    useTokenStore.setState({ accessToken: data.accessToken })
    return data.user
  },
  signUp: async (email: string, password: string): Promise<User> => {
    const { data } = await api.post('/auth/sign-up', { email, password })
    useTokenStore.setState({ accessToken: data.accessToken })
    return data.user
  },
  refresh: async (): Promise<User> => {
    const { data } = await api.post('/auth/refresh')
    useTokenStore.setState({ accessToken: data.accessToken })
    return data.user
  },
  logout: async (): Promise<void> => {
    await api.post('/auth/sign-out')
    useTokenStore.setState({ accessToken: null })
  }
}
