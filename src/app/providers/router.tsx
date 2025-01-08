import { Routes, Route } from 'react-router-dom'
import { LoginPage } from '@/pages/auth/ui/login'
import { RegisterPage } from '@/pages/auth/ui/register'
import { DashboardPage } from '@/pages/dashboard/ui/dashboard'
import LandingPage from '@/pages/landing/ui/landing-page'
import { PrivateRoute } from '@/shared/ui/private-route/private-route'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <DashboardPage />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  )
}
