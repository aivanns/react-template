export const APP_CONFIG = {
  apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  appName: 'React Template',
  version: '1.0.0'
} as const 