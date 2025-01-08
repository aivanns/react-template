import { Button } from '@nextui-org/react'
import { useMutation } from 'react-query'
import { authApi } from '@/features/auth/api/auth.api'
import { useUserStore } from '@/entities/user/model/store'
import { useTheme } from '@/app/providers/theme/theme-provider'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'

export const LogoutButton = () => {
  const setUser = useUserStore((state) => state.setUser)
  const navigate = useNavigate()
  const { theme } = useTheme()

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: () => authApi.logout(),
    onSuccess: () => {
      setUser(null)
      toast.success('Вы успешно вышли из системы')
      navigate('/login')
    },
    onError: () => {
      toast.error('Ошибка при выходе из системы')
    }
  })

  return (
    <Button
      color="danger"
      variant={theme === 'dark' ? 'flat' : 'light'}
      onPress={() => logout()}
      isLoading={isLoading}
    >
      Выйти
    </Button>
  )
}
