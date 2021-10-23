import { Box, Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import logo from '../../images/logo.svg'
import kenyanFlag from '../../images/kenyan-flag.png'

const SixthSection = () => {
  return (
    <Box minHeight="300px" py="20px" style={{ backgroundColor: '#1B225B' }}>
      <Container
        maxWidth="lg"
        style={{ minHeight: 'inherit', display: 'flex', alignItems: 'center' }}
      >
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item xs={12} md={3}>
            <img src={logo} alt="site-logo" style={{ width: '200px' }} />
          </Grid>
          <Grid item xs={12} md={8}>
            <Box display="flex" flexDirection="column" alignItems="flex-end">
              <img
                src={kenyanFlag}
                alt="kenyan-flag"
                style={{ width: '60px', marginBottom: '20px' }}
              />
              <Typography variant="body2">
                <Box color="white" textAlign="end">
                  Valhalla Media Group comprises of ten Communication and Media
                  Technology students from Maseno University, Kenya. We aim at
                  tackling social injustices, politics, issues affecting the
                  youths and any other day to day lives of the common Kenyan
                  citizen through the media. Our group&#39;s motto is{' '}
                  <b>With the sun on our faces</b>
                </Box>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default SixthSection
