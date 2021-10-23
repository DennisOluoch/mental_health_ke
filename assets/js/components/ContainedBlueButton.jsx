/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { withStyles, Button, makeStyles } from '@material-ui/core'
import PropTypes from 'prop-types'

const ButtonOutlined = withStyles({
  root: {
    color: 'white',
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#181E4E',
    borderColor: '#181E4E',
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
      color: 'white',
      borderColor: '#181E4E',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem #181E4E',
    },
    '&:hover': {
      boxShadow: 'none',
      backgroundColor: '#181E4E',
      color: 'white',
      borderColor: '#181E4E',
    },
  },
})(Button)

const useStyles = makeStyles({
  root: {
    '&$disabled': {
      background: 'rgba(0, 0, 0, 0.12)',
      color: 'white',
      boxShadow: 'none',
      border: 'none',
    },
  },
  disabled: {},
})

const ContainedBlueButton = ({ children, onClick, ...others }) => {
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

ContainedBlueButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.element.isRequired,
}

ContainedBlueButton.defaultProps = {
  onClick: null,
}

export default ContainedBlueButton
