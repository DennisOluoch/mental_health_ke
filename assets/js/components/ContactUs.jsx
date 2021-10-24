import { Box, Container, makeStyles, Typography } from '@material-ui/core'
import { Instagram, Mail, Twitter, YouTube } from '@material-ui/icons'
import React from 'react'

const useStyles = makeStyles(theme => ({
  wordSize: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.6rem',
    },
  },
}))

const ContactUs = () => {
  const classes = useStyles()

  return (
    <Container id="contact-us">
      <Box
        height="400px"
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
      >
        <Typography variant="h4" style={{ textAlign: 'center' }}>
          <Box
            color="secondary.main"
            fontWeight={500}
            className={classes.wordSize}
          >
            Need to reach out to us? Sure! Get in touch through our email and
            social media handles below
          </Box>
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          mt="40px"
          flexWrap="wrap"
        >
          <Box display="flex" alignItems="center">
            <Mail fontSize="medium" />
            <Typography style={{ marginLeft: '5px' }}>
              <a
                href="mailto:valhallamediagroup@gmail.com"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                <Box color="secondary.main" fontWeight="bold">
                  valhallamediagroup@gmail.com
                </Box>
              </a>
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" ml="20px">
            <YouTube fontSize="medium" />
            <Typography style={{ marginLeft: '5px' }}>
              <a
                href="https://www.youtube.com/channel/UC6VmUjxdGO78fZ_Wc3hx4UA"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                <Box color="secondary.main" fontWeight="bold">
                  YouTube
                </Box>
              </a>
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" mx="20px">
            <Twitter fontSize="medium" />
            <Typography style={{ marginLeft: '5px' }}>
              <a
                href="https://twitter.com/group_valhalla"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                <Box color="secondary.main" fontWeight="bold">
                  Twitter
                </Box>
              </a>
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <Instagram fontSize="medium" />
            <Typography style={{ marginLeft: '5px' }}>
              <a
                href="https://instagram.com/mentalhealth_6"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                <Box color="secondary.main" fontWeight="bold">
                  Instagram
                </Box>
              </a>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default ContactUs
