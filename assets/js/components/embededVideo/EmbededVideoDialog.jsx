import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  useMediaQuery,
  useTheme,
} from '@material-ui/core'
import React, { useState } from 'react'
import PropTypes from 'prop-types'

const EmbededVideoDialog = ({ open, setOpen }) => {
  const theme = useTheme()

  const [loadingVideo, setLoadingVideo] = useState(true)

  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  const handleClose = () => {
    setLoadingVideo(true)
    setOpen(false)
  }

  return (
    <Dialog
      fullScreen={fullScreen}
      maxWidth="md"
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        Mental Health Testimonial. Episode 1
      </DialogTitle>
      <DialogContent
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {loadingVideo && (
          <CircularProgress
            color="secondary"
            size={50}
            thickness={5}
            style={{ position: 'absolute' }}
          />
        )}
        <iframe
          width={fullScreen ? 320 : 560}
          height={fullScreen ? 200 : 315}
          src="https://www.youtube.com/embed/aQ1C6hk4n-o"
          title="Mental Health Testimonial"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
          allowFullScreen
          loading="lazy"
          onLoad={() => setLoadingVideo(false)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  )
}

EmbededVideoDialog.propTypes = {
  open: PropTypes.string.isRequired,
  setOpen: PropTypes.func.isRequired,
}

export default EmbededVideoDialog
