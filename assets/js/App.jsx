import {
  createTheme,
  Fab,
  makeStyles,
  ThemeProvider,
  useScrollTrigger,
  Zoom,
} from '@material-ui/core'
import React from 'react'
import PropTypes from 'prop-types'
import { KeyboardArrowUp } from '@material-ui/icons'
import AppRoutes from './AppRoutes'
import ContactUs from './components/ContactUs'
import FifthSection from './components/FifthSection'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import SixthSection from './components/SixthSection'

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}))

const App = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#7DEBBD',
      },
      secondary: {
        main: '#181E4E',
      },
    },
  })

  function ScrollTop({ children }) {
    const classes = useStyles()

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 250,
    })

    const handleClick = event => {
      const anchor = (event.target.ownerDocument || document).querySelector(
        '#back-to-top-anchor'
      )

      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }

    return (
      <Zoom in={trigger}>
        <div onClick={handleClick} role="presentation" className={classes.root}>
          {children}
        </div>
      </Zoom>
    )
  }

  ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
  }

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <AppRoutes />
      <FifthSection />
      <ContactUs />
      <SixthSection />
      <Footer />
      <ScrollTop>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </ScrollTop>
    </ThemeProvider>
  )
}

export default App
