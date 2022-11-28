import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material'
import { FC } from 'react'
import { useQuery } from 'react-query'
import { Layout } from '../components/Layout/Layout'
import { API_ENDPOINT } from '../config'
import { useAppState } from '../state/AppState'
export const Users: FC = () => {
  const { appState } = useAppState()

  const { data: users, isLoading: getUsersLoading } = useQuery(
    'users',
    async () => {
      const data = await fetch(API_ENDPOINT + '/api/user', {
        headers: {
          Authorization: appState.accessToken
        }
      })
      return await data.json()
    }
  )

  return (
    <Layout title="Users" loading={getUsersLoading}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Position</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>CreatedAt</TableCell>
              <TableCell>updatedAt</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users?.map((user: any) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.position}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  {new Date(user.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  {new Date(user.updatedAt).toLocaleDateString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Layout>
  )
}
