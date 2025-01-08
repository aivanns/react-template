import { NextUIProvider } from '@nextui-org/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './theme/theme-provider'
import { QUERY_CONFIG } from '@/shared/config/query-config'

const queryClient = new QueryClient(QUERY_CONFIG)

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <NextUIProvider>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </NextUIProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default Providers
