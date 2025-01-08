import { create } from 'zustand'
import { User, UserState } from './user'

export const useUserStore = create<UserState>((set) => ({
  user: null,
  isLoading: false,
  error: null,
  setUser: (user: User | null) => set({ user }),
  setLoading: (isLoading: boolean) => set({ isLoading }),
  setError: (error: string) => set({ error })
}))
