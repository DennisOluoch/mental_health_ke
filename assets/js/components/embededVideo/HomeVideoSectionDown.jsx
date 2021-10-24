import { Container, makeStyles } from '@material-ui/core'
import React from 'react'
import VideoPaper from './VideoPaper'

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: '50px',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}))

const HomeVideoSectionDown = () => {
  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <VideoPaper />
    </Container>
  )
}

export default HomeVideoSectionDown
