import { createContext, useContext } from 'react'

export interface IDefaultAppState {
  signedIn: boolean
  userId: string
  role: string
  email: string
  name: string
  accessToken: string
  issuedAt: number
  expiresAt: number
}

export const defaultAppState: IDefaultAppState = {
  signedIn: false,
  userId: '',
  role: '',
  email: '',
  name: '',
  accessToken: '',
  issuedAt: 0,
  expiresAt: 0
}

export const AppStateContext = createContext({
  appState: { ...defaultAppState },
  setAppState: (obj: IDefaultAppState) => console.log(obj)
})

export const useAppState = () => useContext(AppStateContext)
