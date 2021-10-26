import { Box, Container, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const handleContactUsClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#contact-us'
    )

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
    }
  }

  return (
    <Box minHeight="50px" style={{ backgroundColor: '#181E4E' }}>
      <Container style={{ minHeight: 'inherit' }}>
        <Box
          display="flex"
          alignItems="center"
          minHeight="inherit"
          justifyContent="space-between"
          flexWrap="wrap"
        >
          <Typography variant="body2">
            <Box color="white">
              &copy; 2021 MasenoMentalKe - Valhalla Media Group
            </Box>
          </Typography>
          <Typography
            variant="body2"
            component="div"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <Box color="white" mr="15px">
              <Link to="/terms" style={{ color: 'inherit' }}>
                Terms
              </Link>
            </Box>

            <Box color="white" mr="15px">
              <Link to="/privacy-policy" style={{ color: 'inherit' }}>
                Privacy policy
              </Link>
            </Box>
            <Box
              color="white"
              onClick={handleContactUsClick}
              style={{ textDecoration: 'underline', cursor: 'pointer' }}
            >
              Contact us
            </Box>
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
