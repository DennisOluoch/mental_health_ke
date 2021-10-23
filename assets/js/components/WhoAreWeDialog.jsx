/* eslint-disable react/jsx-props-no-spreading */
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  useMediaQuery,
  useTheme,
} from '@material-ui/core'
import React from 'react'
import PropTypes from 'prop-types'
import questionMark from '../../images/question.svg'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />
})

const WhoAreWeDialog = ({ open, setOpen }) => {
  const theme = useTheme()

  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      fullScreen={fullScreen}
      maxWidth="sm"
      onClose={handleClose}
      aria-describedby="alert-dialog-who-we-are"
      style={{ minHeight: '300px' }}
    >
      <DialogTitle>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Box fontWeight="bold" mr="5px" color="secondary.main">
            Who are we
          </Box>
          <img
            src={questionMark}
            style={{ height: '50px' }}
            alt="question mark"
          />
        </Box>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-who-we-are">
          Valhalla Media Group comprises of ten Communication and Media
          Technology students from Maseno University, Kenya. We aim at tackling
          social injustices, politics, issues affecting the youths and any other
          day to day lives of the common Kenyan citizen through the media. Our
          group&#39;s motto is <b>With the sun on our faces</b>. This website is
          built specifically to address issues of mental health and depresssion
          amoung university students. By doing so, we believe that we would be
          sensitizing more on the fact that university students are also
          adversely affected and mitigations should be put into consideration by
          concerned stakeholders.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  )
}

WhoAreWeDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
}

export default WhoAreWeDialog
