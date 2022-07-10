import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

import { useMatchMedia } from '../../hooks/useMatchMedia'

import MobileMenu from '../MobileMenu'
import Links from '../Links'

import classes from './Header.module.sass'
import { Link } from '@mui/material'

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

          {!isMobile && (
            <Link
              href="https://github.com/Konstantin-Zhirnov/ci-cd"
              target="_blank"
              className={classes.link}
            >
              GitHub
            </Link>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Header
