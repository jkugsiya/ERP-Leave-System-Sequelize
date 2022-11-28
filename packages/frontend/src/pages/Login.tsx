import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import FormControlLabel from '@mui/material/FormControlLabel'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'

import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { FC, useEffect } from 'react'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { API_ENDPOINT } from '../config'
import { useAppState } from '../state/AppState'

export const Login: FC = () => {
  //? States
  const { appState, setAppState } = useAppState()
  const navigate = useNavigate()

  const {
    mutateAsync: loginUser,
    isLoading: loginUserLoading,
    data: loginData
  } = useMutation(
    'login',
    async (data: { email: string; password: string }) => {
      const loginData = await fetch(API_ENDPOINT + '/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      const loginDataJson = await loginData.json()
      if (loginDataJson && loginDataJson.token) {
        const obj = {
          signedIn: true,
          userId: loginDataJson.id,
          role: loginDataJson.role,
          email: loginDataJson.email,
          name: loginDataJson.name,
          accessToken: loginDataJson.token,
          issuedAt: loginDataJson.iat,
          expiresAt: loginDataJson.exp
        }
        localStorage.setItem('erp_state', JSON.stringify(obj))
        setAppState(obj)
        navigate('/')
      }
      return loginDataJson
    }
  )

  //? UseEffects
  useEffect(() => {
    if (appState.signedIn) {
      navigate('/')
    }
  }, [appState])

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box
          component="form"
          onSubmit={async e => {
            e.preventDefault()
            await loginUser({
              email: e.currentTarget.email.value,
              password: e.currentTarget.password.value
            })
          }}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            disabled={loginUserLoading}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://jkugsiya.tech">
          Jayesh Kugsiya
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Container>
  )
}
