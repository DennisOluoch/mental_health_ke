import {
  Avatar,
  Box,
  Container,
  Grid,
  Typography,
  makeStyles,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'
import { deepPurple } from '@material-ui/core/colors'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router'
import { FilterNoneTwoTone, MoreVert, ShareTwoTone } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  title: {
    color: '#292929',
    fontSize: '1.8rem',
    [theme.breakpoints.up('sm')]: {
      fontSize: '45px',
      lineHeight: '60px',
    },
  },
  content: {
    '& > p, li': {
      fontSize: '16px',
      lineHeight: '32px',
      color: '#292929',
      [theme.breakpoints.up('sm')]: {
        fontSize: '21px',
      },
      fontFamily: [
        'Source Serif Pro',
        'serif',
        'Georgia',
        'Cambria',
        'Times New Roman',
        ' Times',
        'serif',
      ].join(','),
      fontKerning: 'normal',
    },
    '& > p:nth-child(even)': {
      margin: '20px 0',
    },
    '& > h5': {
      margin: '20px 0',
    },
  },
}))

const ArticleWrapper = ({ children, themePhoto }) => {
  const classes = useStyles()

  const { state } = useLocation()

  const [anchorEl, setAnchorEl] = useState(null)

  const handleMoreOptionsClick = e => {
    setAnchorEl(e.currentTarget)
  }

  const handleMoreOptionsClose = () => {
    setAnchorEl(null)
  }

  const handleCopyLink = () => {
    window.navigator.clipboard.writeText(
      `${window.location.origin}/article/${state.slug}`
    )

    handleMoreOptionsClose()
  }

  const handleShareClick = () => {
    if (window.navigator.share) {
      window.navigator.share({
        title: state.title,
        text: state.intro,
        url: `${window.location.origin}/article/${state.slug}`,
      })
    }
    handleMoreOptionsClose()
  }

  return (
    <Container style={{ marginTop: '70px' }}>
      <Grid container spacing={2} direction="column" alignItems="center">
        <Grid item xs={12} md={7}>
          <Typography variant="h3" color="textPrimary">
            <Box textAlign="center" fontWeight={400} className={classes.title}>
              {state.title}
            </Box>
          </Typography>
          <Box
            my="20px"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center">
              <Avatar
                style={{
                  backgroundColor: deepPurple[500],
                  width: 56,
                  height: 56,
                }}
              >
                {state.initials}
              </Avatar>
              <Box ml="10px" display="flex" flexDirection="column">
                <Typography variant="body1" color="textPrimary">
                  <Box fontWeight="bold">{state.authorName}</Box>
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  style={{ marginTop: '5px' }}
                >
                  15 Oct, 2021
                </Typography>
              </Box>
            </Box>
            <IconButton
              aria-label="options"
              aria-haspopup="true"
              color="default"
              aria-controls="more-options"
              onClick={handleMoreOptionsClick}
            >
              <MoreVert />
            </IconButton>
            <Menu
              id="more-options"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleMoreOptionsClose}
            >
              <MenuItem onClick={handleCopyLink}>
                <ListItemIcon style={{ minWidth: '30px' }}>
                  <FilterNoneTwoTone fontSize="small" />
                </ListItemIcon>
                <ListItemText>Copy link</ListItemText>
              </MenuItem>
              {window.navigator.share && (
                <MenuItem onClick={handleShareClick}>
                  <ListItemIcon style={{ minWidth: '30px' }}>
                    <ShareTwoTone fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Share</ListItemText>
                </MenuItem>
              )}
            </Menu>
          </Box>
          {themePhoto && (
            <img
              src={themePhoto}
              alt=""
              style={{ width: '100%', objectFit: 'cover' }}
            />
          )}
          <Box pt="10px" className={classes.content}>
            {children}
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

ArticleWrapper.propTypes = {
  children: PropTypes.element.isRequired,
  themePhoto: PropTypes.string,
}

ArticleWrapper.defaultProps = {
  themePhoto: null,
}

export default ArticleWrapper
