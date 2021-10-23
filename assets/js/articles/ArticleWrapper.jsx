import {
  Avatar,
  Box,
  Container,
  Grid,
  Typography,
  makeStyles,
} from '@material-ui/core'
import { deepPurple } from '@material-ui/core/colors'
import React from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router'

const useStyles = makeStyles(theme => ({
  title: {
    color: '#292929',
    fontSize: '1.6rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '45px',
      lineHeight: '60px',
    },
  },
  content: {
    '& > p, li': {
      fontSize: '16px',
      lineHeight: '32px',
      color: '#292929',
      [theme.breakpoints.up('md')]: {
        fontSize: '21px',
      },
      fontFamily: [
        'Source Serif Pro',
        'serif',
        'Georgia',
        'Cambria',
        'Times New Roman',
        ' Times',
        'serif',
      ].join(','),
      fontKerning: 'normal',
    },
    '& > p:nth-child(even)': {
      margin: '20px 0',
    },
    '& > h5': {
      margin: '20px 0',
    },
  },
}))

const ArticleWrapper = ({ children }) => {
  const classes = useStyles()

  const { state } = useLocation()

  return (
    <Container style={{ marginTop: '70px' }}>
      <Grid container spacing={2} direction="column" alignItems="center">
        <Grid item xs={12} md={7}>
          <Typography variant="h3" color="textPrimary">
            <Box textAlign="center" fontWeight={400} className={classes.title}>
              {state.title}
            </Box>
          </Typography>
          <Box my="20px" display="flex" alignItems="center">
            <Avatar
              style={{
                backgroundColor: deepPurple[500],
                width: 56,
                height: 56,
              }}
            >
              {state.initials}
            </Avatar>
            <Box ml="10px" display="flex" flexDirection="column">
              <Typography variant="body1" color="textPrimary">
                <Box fontWeight="bold">{state.authorName}</Box>
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                style={{ marginTop: '5px' }}
              >
                15 Oct, 2021
              </Typography>
            </Box>
          </Box>
          <Box pt="10px" className={classes.content}>
            {children}
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

ArticleWrapper.propTypes = {
  children: PropTypes.element.isRequired,
}

export default ArticleWrapper
