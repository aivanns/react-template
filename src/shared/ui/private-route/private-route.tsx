import { FC, PropsWithChildren } from 'react'
import { Navigate } from 'react-router-dom'
import { useUserStore } from '@/entities/user/model/store'

interface PrivateRouteProps extends PropsWithChildren {
  redirectTo?: string
}

export const PrivateRoute: FC<PrivateRouteProps> = ({
  children,
  redirectTo = '/login'
}) => {
  const { user, isLoading } = useUserStore()

  if (isLoading) {
    return null
  }

  if (!user) {
    return <Navigate to={redirectTo} replace />
  }

  return <>{children}</>
}
