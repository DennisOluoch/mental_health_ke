import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@material-ui/core'

const ArticleImage = ({ photo }) => {
  return (
    <Box m="30px 0">
      <img
        src={photo}
        alt=""
        loading="lazy"
        style={{
          width: '100%',
          objectFit: 'cover',
        }}
      />
    </Box>
  )
}

ArticleImage.propTypes = {
  photo: PropTypes.string.isRequired,
}

export default ArticleImage
