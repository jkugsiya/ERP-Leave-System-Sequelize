import { createTheme, ThemeProvider } from '@mui/material/styles'
import type { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from '../components/Routes'
export const App: FC = () => {
  const theme = createTheme({
    palette: {
      mode: 'dark'
    }
  })
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </BrowserRouter>
  )
}
