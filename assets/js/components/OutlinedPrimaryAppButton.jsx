/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { withStyles, Button, makeStyles } from '@material-ui/core'
import PropTypes from 'prop-types'

const ButtonOutlined = withStyles({
  root: {
    color: '#7DEBBD',
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '2px solid',
    lineHeight: 1.5,
    backgroundColor: '#181E4E',
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
      backgroundColor: '#181E4E',
      color: '#7DEBBD',
      borderColor: '#7DEBBD',
    },
    '&:focus': {
      boxShadow: 'none',
    },
    '&:hover': {
      boxShadow: 'none',
      backgroundColor: '#181E4E',
      color: '#7DEBBD',
      borderColor: '#7DEBBD',
    },
  },
})(Button)

const useStyles = makeStyles({
  root: {
    '&$disabled': {
      background: 'rgba(0, 0, 0, 0.12)',
      color: '#7DEBBD',
      boxShadow: 'none',
      border: 'none',
    },
  },
  disabled: {},
})

const OutlinedPrimaryAppButton = ({ children, onClick, ...others }) => {
  const classes = useStyles()

  return (
    <ButtonOutlined
      disableElevation
      size="small"
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

OutlinedPrimaryAppButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.element.isRequired,
}

OutlinedPrimaryAppButton.defaultProps = {
  onClick: null,
}

export default OutlinedPrimaryAppButton
