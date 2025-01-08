import { Routes, Route } from 'react-router-dom'
import { LoginPage } from '@/pages/auth/ui/login'
import { RegisterPage } from '@/pages/auth/ui/register'
import { DashboardPage } from '@/pages/dashboard/ui/dashboard'

export const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  )
}
