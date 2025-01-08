import { Button } from '@nextui-org/react'
import { useTheme } from '@/app/providers/theme/theme-provider'
import { MoonIcon, SunIcon } from '@nextui-org/shared-icons'

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      isIconOnly
      variant="light"
      onPress={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? <MoonIcon /> : <SunIcon />}
    </Button>
  )
}