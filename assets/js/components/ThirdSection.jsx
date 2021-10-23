import React from 'react'
import { Box, Typography, makeStyles } from '@material-ui/core'
import difficultRoad from '../../images/difficult-path.png'
import holdingHands from '../../images/holding-hands.jpg'

const useStyles = makeStyles(theme => ({
  textSizeSmall: {
    [theme.breakpoints.down('md')]: {
      fontSize: '2rem',
    },
  },
  needHelp: {
    position: 'absolute',
    [theme.breakpoints.down('md')]: {
      position: 'unset',
    },
  },
  hesitate: {
    width: '20%',
    position: 'absolute',
    bottom: '30%',
    left: '5%',
    [theme.breakpoints.down('md')]: {
      width: 'unset',
      left: 0,
      bottom: 0,
      position: 'unset',
    },
  },
  hideBgImages: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  container: {
    height: '700px',
    padding: '10px',
    [theme.breakpoints.down('md')]: {
      height: '400px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
  },
}))

const ThirdSection = () => {
  const classes = useStyles()

  return (
    <Box
      className={classes.container}
      mt="50px"
      style={{
        backgroundColor: '#181E4E',
        width: 'inherit',
        position: 'relative',
        backgroundImage: `url(${difficultRoad})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top right',
        backgroundSize: '35%',
      }}
      display="flex"
      justifyContent="center"
    >
      <Box
        height="fit-content"
        className={classes.needHelp}
        zIndex={1}
        mt="50px"
      >
        <Typography variant="h1" className={classes.textSizeSmall}>
          <Box fontWeight="bold" color="white">
            Need Someone
          </Box>
        </Typography>
        <Typography
          variant="h1"
          component="div"
          style={{ display: 'flex', alignItems: 'center' }}
          className={classes.textSizeSmall}
        >
          <Box width="100px" mr="10px" fontWeight="bold" color="primary.main">
            <hr style={{ color: 'inherit', border: '4px solid' }} />
          </Box>
          <Box fontWeight="bold" color="primary.main">
            to talk to?
          </Box>
        </Typography>
      </Box>
      <Box height="fit-content" className={classes.hesitate}>
        <Typography variant="body1">
          <Box fontWeight="bold" color="primary.main">
            DON&#39;T HESITATE
          </Box>
        </Typography>
        <Typography variant="body1">
          <Box color="white">
            Reach out to BefriendersKenya through a call on{' '}
            <a href="tel:+254722178177" style={{ color: 'inherit' }}>
              +254722178177
            </a>{' '}
            or email them at{' '}
            <a
              href="mailto:befrienderskenya@gmail.com"
              style={{ color: 'inherit' }}
            >
              befrienderskenya@gmail.com
            </a>
            . Further information can be obtained through their official website
            at{' '}
            <a
              href="http://www.befrienderskenya.org/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'inherit' }}
            >
              www.befrienderskenya.org/
            </a>
          </Box>
        </Typography>
      </Box>
      <Box
        className={classes.hideBgImages}
        style={{
          position: 'absolute',
          backgroundImage: `url(${holdingHands})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          bottom: 0,
          left: '30%',
          borderTopRightRadius: '1rem',
          borderTopLeftRadius: '1rem',
        }}
        height="30%"
        width="200px"
      />
    </Box>
  )
}

export default ThirdSection
