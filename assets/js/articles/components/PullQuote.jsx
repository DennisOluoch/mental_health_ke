import { Box, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import PropTypes from 'prop-types'

const useStyles = makeStyles(theme => ({
  sizing: {
    fontStyle: 'italic',
    textAlign: 'center',
    fontSize: '1.2rem',
    [theme.breakpoints.up('sm')]: {
      fontSize: '2rem',
    },
  },
}))

const PullQuote = ({ children }) => {
  const classes = useStyles()

  return (
    <Box padding="10px 20px">
      <Typography>
        <Box fontWeight="bold" color="primary.main" className={classes.sizing}>
          &quot;{children}&quot;
        </Box>
      </Typography>
    </Box>
  )
}

PullQuote.propTypes = {
  children: PropTypes.element.isRequired,
}

export default PullQuote
