import { createTheme, ThemeProvider } from '@material-ui/core'
import React from 'react'
import AppRoutes from './AppRoutes'
import ContactUs from './components/ContactUs'
import FifthSection from './components/FifthSection'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import SixthSection from './components/SixthSection'

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

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <AppRoutes />
      <FifthSection />
      <ContactUs />
      <SixthSection />
      <Footer />
    </ThemeProvider>
  )
}

export default App
