import { Box, Paper, Typography, makeStyles } from '@material-ui/core'
import { AccessTime, PlayArrow } from '@material-ui/icons'
import React, { useState } from 'react'
import ContainedBlueButton from '../ContainedBlueButton'
import mentalHealthImage from '../../../images/mental-health-matters.jpg'
import mentalKe from '../../../images/mentalke.svg'
import EmbededVideoDialog from './EmbededVideoDialog'

const useStyles = makeStyles(theme => ({
  watchVideoPaper: {
    width: '50%',
    zIndex: 100,
    position: 'absolute',
    bottom: '-30%',
    left: '22%',
    padding: '10px',
    [theme.breakpoints.down('md')]: {
      width: 'auto',
      left: 0,
      right: 0,
      bottom: 0,
      position: 'unset',
    },
  },
  image: {
    width: '200px',
    height: '200px',
    backgroundImage: `url(${mentalHealthImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    borderRadius: '1rem',
    backgroundColor: '#23278a',
    backgroundBlendMode: 'difference',
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },

  info: {
    margin: '20px 25px',
    width: '60%',
    [theme.breakpoints.down('md')]: {
      margin: 0,
      width: 'auto',
    },
  },
}))

const VideoPaper = () => {
  const classes = useStyles()

  const [openVideoDialog, setOpenVideoDialog] = useState(false)

  return (
    <>
      <EmbededVideoDialog open={openVideoDialog} setOpen={setOpenVideoDialog} />

      <Paper
        variant="elevation"
        className={classes.watchVideoPaper}
        elevation={3}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
        >
          <Box className={classes.image}>
            <Box
              style={{
                backgroundImage: `url(${mentalKe})`,
                height: '40px',
                width: '70px',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                position: 'absolute',
                right: '10px',
                top: '5px',
              }}
            />
            <Box
              style={{
                height: '40px',
                width: '100px',
                position: 'absolute',
                left: '10px',
                bottom: '5px',
              }}
            >
              <Typography variant="body2">
                <Box fontWeight="bold" color="white">
                  EP 1
                </Box>
              </Typography>
              <Typography variant="body2" component="div">
                <Box fontWeight="bold" color="white">
                  Valhalla Group
                </Box>
              </Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            flexGrow={1}
            className={classes.info}
          >
            <Typography variant="body1">
              <Box fontWeight="bold" color="secondary.main">
                Episode 1
              </Box>
            </Typography>
            <Typography
              variant="h5"
              style={{ marginTop: '15px', marginBottom: '15px' }}
            >
              <Box fontWeight="bold" color="secondary.main">
                A premier of depression among university students
              </Box>
            </Typography>
            <Typography variant="body2">
              <Box color="#757575">
                In this episode, a Maseno University student who goes by the
                name Silvia Anita shares her side of story on how depression
                took a toll on her life.
              </Box>
            </Typography>

            <Box
              display="flex"
              justifyContent="space-between"
              mt="15px"
              alignItems="center"
            >
              <ContainedBlueButton
                startIcon={<PlayArrow htmlColor="white" fontSize="medium" />}
                onClick={() => setOpenVideoDialog(true)}
              >
                Watch this episode
              </ContainedBlueButton>
              <Typography
                variant="body2"
                component="div"
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <AccessTime htmlColor="#181E4E" />
                <Box fontWeight="bold" color="secondary.main" ml="5px">
                  8 mins
                </Box>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
    </>
  )
}

export default VideoPaper
