import React from 'react'
import { Box, makeStyles, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import mentalKe from '../../images/mentalke.svg'

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}))

const ArticlePreview = ({
  title,
  intro,
  authorName,
  image,
  slug,
  initials,
}) => {
  const classes = useStyles()

  return (
    <>
      <Box
        style={{
          height: '250px',
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          borderRadius: '1rem',
          backgroundColor: '#23278a',
          backgroundBlendMode: 'difference',
          position: 'relative',
        }}
      >
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
        <Typography
          variant="body1"
          style={{ position: 'absolute', bottom: '10px', left: '10px' }}
        >
          <Box fontWeight="bold" color="white">
            By {authorName}
          </Box>
        </Typography>
      </Box>
      <Box mt="15px">
        <Link
          to={`/article/${slug}`}
          state={{ authorName, title, initials }}
          className={classes.link}
        >
          <Typography variant="body1">
            <Box fontWeight="bold" color="secondary.main">
              {title}
            </Box>
          </Typography>
        </Link>
        <Typography variant="body2" color="textSecondary">
          {intro}
        </Typography>
      </Box>
    </>
  )
}

ArticlePreview.propTypes = {
  image: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  initials: PropTypes.string.isRequired,
}

export default ArticlePreview
