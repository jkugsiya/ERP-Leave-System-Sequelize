import type { FC } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard'
import { Login } from '../pages/Login'
import { Users } from '../pages/Users'

export const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/users" element={<Users />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  )
}
