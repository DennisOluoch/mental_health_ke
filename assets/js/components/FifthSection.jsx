import { Box, Grid, makeStyles, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import OutlinedPrimaryAppButton from './OutlinedPrimaryAppButton'
import spiral from '../../images/spiral.svg'
import star from '../../images/star.svg'
import box from '../../images/box.svg'
import NewsLetterDialog from './newsLetter/NewsLetterDialog'

const useStyles = makeStyles(theme => ({
  text: {
    [theme.breakpoints.up('md')]: {
      fontSize: '1.4rem',
    },
  },
}))

const FifthSection = () => {
  const classes = useStyles()

  const [openNewsLetterDialog, setOpenNewsLetterDialog] = useState(false)

  return (
    <>
      <NewsLetterDialog
        open={openNewsLetterDialog}
        setOpen={setOpenNewsLetterDialog}
      />
      <Box
        minHeight="200px"
        mt="70px"
        px="20px"
        style={{ backgroundColor: '#181E4E' }}
        position="relative"
      >
        <Box
          style={{
            position: 'absolute',
            backgroundImage: `url(${spiral})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            width: '80px',
            height: '80px',
            left: '30%',
            top: '10%',
            zIndex: 1,
          }}
        />
        <Box
          style={{
            position: 'absolute',
            backgroundImage: `url(${box})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            width: '80px',
            height: '60px',
            left: '5%',
            bottom: '10%',
            zIndex: 1,
          }}
        />

        <Box
          style={{
            position: 'absolute',
            backgroundImage: `url(${spiral})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            width: '50px',
            height: '50px',
            left: '10%',
            top: '10%',
            zIndex: 1,
          }}
        />
        <Box
          style={{
            position: 'absolute',
            backgroundImage: `url(${star})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            width: '80px',
            height: '80px',
            right: '30%',
            bottom: '30%',
            zIndex: 1,
          }}
        />
        <Grid
          container
          spacing={2}
          alignItems="center"
          style={{ minHeight: 'inherit' }}
        >
          <Grid item xs={12} md={3}>
            <Typography variant="h4">
              <Box fontWeight="bold" color="primary.main">
                Quick
              </Box>
            </Typography>
            <Typography variant="h4">
              <Box fontWeight="bold" color="white">
                Newsletter
              </Box>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1">
              <Box color="white" className={classes.text}>
                Get our monthly newsletter for a round-up of mental health and
                body image news, events, support and articles.
              </Box>
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <OutlinedPrimaryAppButton
              size="large"
              onClick={() => setOpenNewsLetterDialog(true)}
            >
              Subscribe to Newsletter
            </OutlinedPrimaryAppButton>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default FifthSection
