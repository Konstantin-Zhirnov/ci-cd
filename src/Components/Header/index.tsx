import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

import { useMatchMedia } from '../../hooks/useMatchMedia'

import MobileMenu from '../MobileMenu'
import Links from '../Links'

import classes from './Header.module.sass'

const Header: React.FC = () => {
  const { isMobile } = useMatchMedia()

  const getMenu = () => (isMobile ? <MobileMenu /> : <Links />)

  return (
    <AppBar position="static" className={classes.header}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src="/images/logo.png" alt="logo" className={classes.logo} />
          <Typography className={classes.title}>CI/CD</Typography>
          {getMenu()}
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Header
