import { Box, Container, Grid, Typography, makeStyles } from '@material-ui/core'
import React from 'react'
import { Instagram, Twitter, YouTube } from '@material-ui/icons'
import Patterns from './Patterns'
import hero from '../../images/hero.png'
import SecondaryAppButton from './SecondaryAppButton'
import OutlinedPrimaryAppButton from './OutlinedPrimaryAppButton'
import VideoPaper from './embededVideo/VideoPaper'

const useStyles = makeStyles(theme => ({
  lightBlueBlock: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  patterns: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },

  heroImage: {
    position: 'absolute',
    backgroundImage: `url(${hero})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: '10% 25%',
    height: '100%',
    width: '50%',
    zIndex: 1,
    left: '-20px',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },

  heroWords: {
    width: '75%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  hideVideoPaper: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
}))

const HeroSection = () => {
  const classes = useStyles()

  const handleExploreMoreClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#article-stories'
    )

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
    }
  }

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
    <>
      <Box
        height="700px"
        style={{
          backgroundColor: '#181E4E',
          width: 'inherit',
          position: 'relative',
          display: 'flex',
        }}
      >
        <Box className={classes.heroImage} />
        <Box
          style={{
            position: 'absolute',
            width: '80px',
            height: '80px',
            right: 0,
            top: 0,
            backgroundColor: 'red',
          }}
        />
        <Box
          style={{
            position: 'absolute',
            width: '150px',
            height: '150px',
            bottom: 0,
            left: 0,
            backgroundColor: 'red',
          }}
        />
        <Box
          width="20%"
          className={classes.lightBlueBlock}
          style={{
            backgroundColor: '#1B225B',
            height: 'inherit',
          }}
        />
        <Container
          style={{
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          <Grid container spacing={2} justifyContent="flex-end">
            <Box className={classes.patterns}>
              <Patterns />
            </Box>

            <Grid xs={12} md={6}>
              <Box className={classes.heroWords}>
                <Typography variant="h6">
                  <Box color="primary.main" fontWeight="bold">
                    By Valhalla group
                  </Box>
                </Typography>
                <Typography variant="h3">
                  <Box
                    color="white"
                    fontWeight="bold"
                    position="relative"
                    zIndex={3}
                  >
                    Self-care is how you take your power back.
                  </Box>
                </Typography>
                <Typography
                  variant="body1"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: '15px',
                  }}
                >
                  <Box width="30px" mr="10px" color="primary.main">
                    <hr style={{ color: 'inherit' }} />
                  </Box>
                  <Box color="primary.main">Lalah Delia</Box>
                </Typography>
                <Typography style={{ marginTop: '15px' }}>
                  <Box color="whitesmoke">
                    Moods are emotions that affect people each and every
                    day...and sadly, people&rsquo;s mood can get stuck on
                    sadness and depression for a long time.
                  </Box>
                </Typography>

                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mt="30px"
                >
                  <Grid
                    container
                    spacing={4}
                    alignItems="center"
                    style={{ width: '100%' }}
                  >
                    <Grid>
                      <SecondaryAppButton
                        fullWidth
                        onClick={handleExploreMoreClick}
                      >
                        Explore More
                      </SecondaryAppButton>
                    </Grid>
                    <Grid item>
                      <OutlinedPrimaryAppButton
                        fullWidth
                        onClick={handleContactUsClick}
                      >
                        Contact Us
                      </OutlinedPrimaryAppButton>
                    </Grid>
                  </Grid>
                </Box>

                <Typography variant="body1" style={{ marginTop: '50px' }}>
                  <Box color="white">You can find us on:</Box>
                </Typography>
                <Box mt="10px" display="flex" alignItems="center">
                  <Box display="flex" alignItems="center">
                    <YouTube htmlColor="white" fontSize="medium" />
                    <Typography style={{ marginLeft: '5px' }}>
                      <Box color="white" fontWeight="bold">
                        YouTube
                      </Box>
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" mx="20px">
                    <Twitter htmlColor="white" fontSize="medium" />
                    <Typography style={{ marginLeft: '5px' }}>
                      <Box color="white" fontWeight="bold">
                        Twitter
                      </Box>
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <Instagram htmlColor="white" fontSize="medium" />
                    <Typography style={{ marginLeft: '5px' }}>
                      <Box color="white" fontWeight="bold">
                        Instagram
                      </Box>
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Box className={classes.hideVideoPaper}>
          <VideoPaper />
        </Box>
      </Box>
    </>
  )
}

export default HeroSection
