import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  makeStyles,
  useMediaQuery,
  useTheme,
} from '@material-ui/core'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../images/logo.svg'
import smallScreenLogo from '../../images/logo-small-screen.svg'
import WhoAreWeDialog from './WhoAreWeDialog'

const useStyles = makeStyles(() => ({
  navLink: {
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}))

const NavBar = () => {
  const classes = useStyles()

  const [openDialog, setOpenDialog] = useState(false)

  const { pathname } = useLocation()

  const smallScreen = useMediaQuery(useTheme().breakpoints.down('sm'))

  const handleScrollToHopeSection = event => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#stories-of-hope'
    )

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
    }
  }

  return (
    <AppBar
      position="static"
      elevation={0}
      id="back-to-top-anchor"
      style={{ color: 'white', backgroundColor: '#181E4E' }}
    >
      <WhoAreWeDialog open={openDialog} setOpen={setOpenDialog} />
      <Toolbar style={{ justifyContent: 'space-around' }}>
        <Typography variant="h5" style={{ padding: '5px' }}>
          <Link to="/">
            <img
              src={smallScreen ? smallScreenLogo : logo}
              alt="maseno-mental-ke-logo"
              width={smallScreen ? 40 : 200}
            />
          </Link>
        </Typography>
        <Typography variant="body1" component="div">
          <Box display="flex" justifyContent="center" alignItems="center">
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Box className={classes.navLink}>Home</Box>
            </Link>
            <Box
              mx="15px"
              className={classes.navLink}
              onClick={() => setOpenDialog(true)}
            >
              About
            </Box>
            {pathname === '/' && (
              <Box
                onClick={handleScrollToHopeSection}
                className={classes.navLink}
              >
                Stories of Hope
              </Box>
            )}
          </Box>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
