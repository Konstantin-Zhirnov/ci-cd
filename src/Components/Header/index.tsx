import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { toast } from 'react-toastify'

import { useAppSelector } from '../../redux/hooks'
import { getMessage } from '../../redux/authorization'

import { useMatchMedia } from '../../hooks/useMatchMedia'

import MobileMenu from '../MobileMenu'
import Links from '../Links'
import Auth from '../Auth'

import 'react-toastify/dist/ReactToastify.css'
import classes from './Header.module.sass'

const Header: React.FC = () => {
  const message = useAppSelector(getMessage)
  const { isDesktop, isTablet, isMobile } = useMatchMedia()
  const getMenu = () => (isMobile ? <MobileMenu /> : <Links />)

  React.useEffect(() => {
    if (message) {
      toast(message, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
        type: 'error',
      })
    }
  }, [message])

  return (
    <AppBar position="static" className={classes.header}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src="/images/logo.png" alt="logo" className={classes.logo} />
          <Typography className={classes.title}>CI/CD</Typography>
          {getMenu()}

          {(isDesktop || isTablet) && <Auth />}
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Header
