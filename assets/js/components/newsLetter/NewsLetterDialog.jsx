import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Snackbar,
  TextField,
  useMediaQuery,
  useTheme,
} from '@material-ui/core'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Alert } from '@material-ui/lab'
import SecondaryAppButton from '../SecondaryAppButton'

const NewsLetterDialog = ({ open, setOpen }) => {
  const theme = useTheme()

  const [email, setEmail] = useState('')

  const [name, setName] = useState('')

  const [isLoading, setIsLoading] = useState(false)

  const [openSnack, setOpenSnack] = useState(false)

  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  const handleClose = () => {
    setOpen(false)
  }

  const handleCloseSnack = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpenSnack(false)
  }

  const handleOnSubmit = () => {
    setIsLoading(true)
    setTimeout(() => {
      setOpenSnack(true)
      setOpen(false)
      setIsLoading(false)
    }, 3000)
  }

  return (
    <>
      <Snackbar
        open={openSnack}
        autoHideDuration={4000}
        onClose={handleCloseSnack}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity="success" onClose={handleCloseSnack}>
          You have been added to our newsletter list!
        </Alert>
      </Snackbar>
      <Dialog
        fullScreen={fullScreen}
        maxWidth="md"
        open={open}
        onClose={handleClose}
        aria-labelledby="newsletter-dialog-title"
      >
        <DialogTitle id="newsletter-dialog-title">NewsLetter</DialogTitle>
        <DialogContent>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <TextField
              variant="outlined"
              type="text"
              id="user-name"
              disabled={isLoading}
              margin="dense"
              label="Your Name"
              value={name}
              onChange={e => setName(e.target.value.trim())}
              fullWidth
              required
            />
            <Box mt="15px" />
            <TextField
              variant="outlined"
              type="email"
              id="user-email"
              value={email}
              disabled={isLoading}
              margin="dense"
              label="Your Email"
              fullWidth
              onChange={e => setEmail(e.target.value.trim())}
              required
            />
            <Box mt="15px" />
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="100%"
            >
              <SecondaryAppButton
                fullWidth
                disabled={!(email && name) || isLoading}
                onClick={handleOnSubmit}
              >
                Subscribe
              </SecondaryAppButton>
              {isLoading && (
                <CircularProgress
                  size={25}
                  thickness={5}
                  style={{ position: 'absolute' }}
                />
              )}
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

NewsLetterDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
}

export default NewsLetterDialog
