import { createTheme, ThemeProvider } from '@mui/material/styles'
import { FC, useEffect, useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from '../components/AppRoutes'
import {
  AppStateContext,
  defaultAppState,
  IDefaultAppState
} from '../state/AppState'

const queryClient = new QueryClient()

export const App: FC = () => {
  const [appState, setAppState] = useState<IDefaultAppState>({
    ...defaultAppState
  })

  useEffect(() => {
    let localData: any = null
    try {
      localData = localStorage.getItem('erp_state')
      if (localData) {
        localData = JSON.parse(localData)
      }
      if (localData) {
        setAppState(localData)
      }
    } catch (e) {}
  }, [])

  const theme = createTheme({
    palette: {
      mode: 'dark'
    }
  })

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <AppStateContext.Provider value={{ appState, setAppState }}>
            <AppRoutes />
          </AppStateContext.Provider>
        </QueryClientProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}
