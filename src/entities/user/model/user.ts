export interface User {
  id: string
  email: string
  isActive: boolean
}

export interface UserState {
  user: User | null
  isLoading: boolean
  error: string | null
  setUser: (user: User | null) => void
  setLoading: (isLoading: boolean) => void
  setError: (error: string) => void
}
