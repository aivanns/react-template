import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input, Card, CardBody } from '@nextui-org/react'
import { authApi } from '@/features/auth/api/auth.api'
import { User } from '@/entities/user/model/user'
import { loginSchema } from '../model/auth'
import { toast } from 'sonner'
import { useUserStore } from '@/entities/user/model/store'
import { useNavigate } from 'react-router-dom'

type LoginForm = z.infer<typeof loginSchema>

export const LoginForm = () => {
  const { setUser } = useUserStore()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema)
  })

  const { mutate: signIn, isLoading } = useMutation({
    mutationFn: (data: LoginForm) => authApi.signIn(data.email, data.password),
    onSuccess: (response: User) => {
      setUser(response)
      toast.success('Вы успешно авторизовались')
      navigate('/dashboard')
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || 'Ошибка авторизации')
    }
  })

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card
        className="max-w-md w-full mx-auto shadow-2xl transition-transform hover:scale-[1.02]"
        radius="lg"
      >
        <CardBody className="p-8">
          <form
            onSubmit={handleSubmit((data) => signIn(data))}
            className="space-y-6"
          >
            <Input
              {...register('email')}
              label="Email"
              type="email"
              errorMessage={errors.email?.message}
              className="transition-all duration-300 hover:scale-[1.01]"
              size="lg"
              variant="bordered"
            />

            <Input
              {...register('password')}
              label="Пароль"
              type="password"
              errorMessage={errors.password?.message}
              className="transition-all duration-300 hover:scale-[1.01]"
              size="lg"
              variant="bordered"
            />

            <Button
              className="bg-primary-500 hover:bg-primary-600 transition-all duration-300 hover:shadow-lg"
              type="submit"
              color="primary"
              variant="shadow"
              isLoading={isLoading}
              fullWidth
              size="lg"
            >
              Войти
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  )
}
