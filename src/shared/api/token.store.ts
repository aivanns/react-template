import { create } from 'zustand'

interface TokenStore {
  accessToken: string | null
  setAccessToken: (token: string) => void
  clearAccessToken: () => void
}

export const useTokenStore = create<TokenStore>((set) => ({
  accessToken: sessionStorage.getItem('token'),
  setAccessToken: (token) => {
    sessionStorage.setItem('token', token)
    set({ accessToken: token })
  },
  clearAccessToken: () => {
    sessionStorage.removeItem('token')
    set({ accessToken: null })
  }
}))
