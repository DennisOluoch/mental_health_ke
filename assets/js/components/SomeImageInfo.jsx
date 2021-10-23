import { Box, Typography } from '@material-ui/core'
import React from 'react'
import mentalKe from '../../images/mentalke.svg'

const SomeImageInfo = () => {
  return (
    <>
      <Box
        style={{
          backgroundImage: `url(${mentalKe})`,
          height: '40px',
          width: '70px',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          position: 'absolute',
          right: '10px',
          top: '5px',
        }}
      />
      <Box
        style={{
          height: '40px',
          width: '100px',
          position: 'absolute',
          left: '10px',
          bottom: '5px',
        }}
      >
        <Typography variant="body2">
          <Box fontWeight="bold" color="white">
            EP 1
          </Box>
        </Typography>
        <Typography variant="body2" component="div">
          <Box fontWeight="bold" color="white">
            Valhalla Group
          </Box>
        </Typography>
      </Box>
    </>
  )
}

export default SomeImageInfo
