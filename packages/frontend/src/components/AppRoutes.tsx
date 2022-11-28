import { FC, useEffect } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard'
import { Login } from '../pages/Login'
import { Users } from '../pages/Users'
import { useAppState } from '../state/AppState'

export const AppRoutes: FC = () => {
  const { appState } = useAppState()
  const navigate = useNavigate()

  useEffect(() => {
    if (appState && !appState.signedIn) {
      navigate('/login')
    }
  }, [appState])

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/users" element={<Users />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  )
}
