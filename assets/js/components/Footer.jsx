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
          <Box display="flex" alignItems="center" flexGrow={1} flexWrap="wrap">
            <Typography variant="body2">
              <Box color="white">
                &copy; 2021 MasenoMentalKe - Valhalla Media Group.
              </Box>
            </Typography>
            <Typography
              variant="body2"
              style={{ marginLeft: '5px', marginRight: '5px' }}
            >
              <Box color="white">
                Need a website? Contact Olal Dennis
                <a
                  href="mailto:olaldennis@gmail.com"
                  style={{ color: 'inherit' }}
                >
                  &lt;olaldennis@gmail.com&gt;
                </a>
              </Box>
            </Typography>
          </Box>
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
