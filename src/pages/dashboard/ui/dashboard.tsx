import { LogoutButton } from '@/shared/ui/logout-button/logout-button'
import { ThemeToggle } from '@/shared/ui/theme-switcher/theme-switcher'

export const DashboardPage = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <LogoutButton />
      <ThemeToggle />
    </div>
  )
}

export default DashboardPage
