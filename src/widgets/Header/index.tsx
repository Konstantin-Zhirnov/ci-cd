import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

import { useAppSelector } from '../../app'
import { getAuth, Login, Logout } from '../../features'
import { DesktopMenu, MobileMenu } from '../../entities'
import { useMessage, useMatchMedia } from '../../shared'

import classes from './Header.module.sass'

const Header: React.FC = () => {
  useMessage()
  const { isDesktop, isMobile } = useMatchMedia()

  const isAuth = useAppSelector(getAuth)

  const getMenu = () => (isMobile ? <MobileMenu /> : <DesktopMenu />)

  const getAuthorisation = () => {
    if (isDesktop) {
      return isAuth ? <Logout /> : <Login />
    } else {
      return null
    }
  }

  return (
    <AppBar position="static" className={classes.header}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src="/images/logo.png" alt="logo" className={classes.logo} />
          <Typography className={classes.title}>CI/CD</Typography>

          {getMenu()}

          {getAuthorisation()}
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Header
