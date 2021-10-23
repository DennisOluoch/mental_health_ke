/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { withStyles, Button, makeStyles } from '@material-ui/core'
import PropTypes from 'prop-types'

const ButtonOutlined = withStyles({
  root: {
    color: '#181E4E',
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '2px solid',
    lineHeight: 1.5,
    backgroundColor: '#7DEBBD',
    borderColor: '#7DEBBD',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#7DEBBD',
      color: '#181E4E',
      borderColor: '#7DEBBD',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem #7DEBBD',
    },
    '&:hover': {
      boxShadow: 'none',
      backgroundColor: '#7DEBBD',
      color: '#181E4E',
      borderColor: '#7DEBBD',
    },
  },
})(Button)

const useStyles = makeStyles({
  root: {
    '&$disabled': {
      background: 'rgba(0, 0, 0, 0.12)',
      color: '#181E4E',
      boxShadow: 'none',
      border: 'none',
    },
  },
  disabled: {},
})

const SecondaryAppButton = ({ children, onClick, ...others }) => {
  const classes = useStyles()

  return (
    <ButtonOutlined
      disableElevation
      {...others}
      onClick={onClick}
      classes={{
        root: classes.root, // class name, e.g. `root-x`
        disabled: classes.disabled, // class name, e.g. `disabled-x`
      }}
    >
      {children || 'Login'}
    </ButtonOutlined>
  )
}

SecondaryAppButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.element.isRequired,
}

SecondaryAppButton.defaultProps = {
  onClick: null,
}

export default SecondaryAppButton
