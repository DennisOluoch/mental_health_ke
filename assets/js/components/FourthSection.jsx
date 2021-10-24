import { Box, Container, Typography, makeStyles } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import storiesOfHope from '../../images/stories-of-hope.jpg'
import SecondaryAppButton from './SecondaryAppButton'

const useStyles = makeStyles(theme => ({
  title: {
    [theme.breakpoints.up('sm')]: {
      fontSize: '4.5rem',
      width: '70%',
    },
  },
  intro: {
    marginTop: '40px',
    marginBottom: '20px',
    color: 'white',
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.5rem',
      width: '70%',
    },
  },
  container: {
    height: '600px',
    backgroundColor: '#23a166d6',
    borderRadius: '1rem',
    backgroundImage: `url(${storiesOfHope})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundBlendMode: 'color-burn',
    [theme.breakpoints.down('sm')]: {
      height: 'unset',
    },
  },
}))

const FourthSection = () => {
  const classes = useStyles()

  return (
    <Container
      maxWidth="lg"
      style={{ marginTop: '70px', display: 'flex' }}
      id="stories-of-hope"
    >
      <Box
        className={classes.container}
        width="inherit"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        px="10px"
        py="30px"
        alignItems="center"
      >
        <Box
          display="flex"
          width="fit-content"
          flexDirection="column"
          alignItems="center"
        >
          <Typography variant="body1">
            <Box fontWeight="bold" color="white">
              STORIES OF HOPE
            </Box>
          </Typography>
          <Typography
            variant="h5"
            style={{ marginTop: '40px', textAlign: 'center' }}
            className={classes.title}
          >
            <Box fontWeight="bold" color="white">
              Help comes in unexpected ways
            </Box>
          </Typography>
          <Typography variant="body2" className={classes.intro}>
            The help received from my new support network, my family, friends
            and close colleagues offering to just be there to listen when I am
            low, was overwhelming
          </Typography>
        </Box>
        <Link
          to="/article/stories-of-hope-1"
          style={{ textDecoration: 'none' }}
          state={{
            authorName: 'Anonymous',
            title: 'Help comes in unexpected ways',
            initials: 'A',
          }}
        >
          <SecondaryAppButton size="large">Read full story</SecondaryAppButton>
        </Link>
      </Box>
    </Container>
  )
}

export default FourthSection
