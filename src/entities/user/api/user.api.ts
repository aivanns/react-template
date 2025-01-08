import { api } from '@/shared/api/index.api'
import { User } from '../model/user'

export const userApi = {
  getSelf: async (): Promise<User> => {
    const response = await api.get('/users/me')
    return response.data
  }
}
