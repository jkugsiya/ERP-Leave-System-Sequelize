import {
  AddCircleOutline,
  BarChart,
  Dashboard,
  People
} from '@mui/icons-material'
import {
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material'
import { FC } from 'react'
import { Link } from 'react-router-dom'

export const Sidebar: FC = () => {
  return (
    <List component="nav">
      <ListItemButton component={Link} to="/">
        <ListItemIcon>
          <Dashboard />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton component={Link} to="/users">
        <ListItemIcon>
          <People />
        </ListItemIcon>
        <ListItemText primary="Users" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <BarChart />
        </ListItemIcon>
        <ListItemText primary="My Leaves" />
      </ListItemButton>
      <Divider sx={{ my: 1 }} />
      <ListItemButton>
        <ListItemIcon>
          <AddCircleOutline />
        </ListItemIcon>
        <ListItemText primary="Create Leave" />
      </ListItemButton>
    </List>
  )
}
