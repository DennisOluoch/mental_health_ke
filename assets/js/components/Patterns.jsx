import { Box } from '@material-ui/core'
import React from 'react'
import box from '../../images/box.svg'
import star from '../../images/star.svg'
import spiral from '../../images/spiral.svg'

const Patterns = () => {
  return (
    <>
      <Box
        style={{
          position: 'absolute',
          backgroundImage: `url(${box})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          width: '400px',
          height: '300px',
          left: '40%',
          bottom: '55%',
          zIndex: 1,
        }}
      />

      <Box
        style={{
          position: 'absolute',
          backgroundImage: `url(${box})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          width: '150px',
          height: '150px',
          right: '10%',
          bottom: '40%',
          zIndex: 1,
        }}
      />

      <Box
        style={{
          position: 'absolute',
          backgroundImage: `url(${box})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          width: '80px',
          height: '60px',
          right: '30%',
          bottom: '20%',
          zIndex: 1,
        }}
      />

      <Box
        style={{
          position: 'absolute',
          backgroundImage: `url(${star})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          width: '80px',
          height: '80px',
          left: '30%',
          bottom: '30%',
          zIndex: 1,
        }}
      />

      <Box
        style={{
          position: 'absolute',
          backgroundImage: `url(${spiral})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          width: '50px',
          height: '50px',
          left: '30%',
          top: '30%',
          zIndex: 1,
        }}
      />
    </>
  )
}

export default Patterns
