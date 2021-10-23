import React from 'react'
import { Container, Box, Typography, Grid, makeStyles } from '@material-ui/core'
import phoneAFriend from '../../images/phone-a-friend.jpg'
import liftYourMood from '../../images/lift-your-mood.jpg'
import hands from '../../images/hands.jpg'
import ArticlePreview from './ArticlePreview'
import hope from '../../images/hope.jpg'
import meditating from '../../images/meditating.jpg'
import weHurt from '../../images/we-hurt.jpg'
import happyBalloons from '../../images/balloon.jpg'
import happyFace from '../../images/happy-face.jpg'
import intro101 from '../../images/101.jpg'

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: '250px',
    [theme.breakpoints.down('md')]: {
      marginTop: '50px',
    },
  },
}))

const SecondSection = () => {
  const classes = useStyles()

  return (
    <>
      <Container
        fixed
        style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          minHeight: '500px',
        }}
        id="article-stories"
      >
        <Box className={classes.container} width="inherit">
          <Container fixed maxWidth="md">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              mb="30px"
            >
              <Typography variant="h5">
                <Box fontWeight="bold" color="secondary.main">
                  Latest stories
                </Box>
              </Typography>
            </Box>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4} style={{ position: 'relative' }}>
                <ArticlePreview
                  image={phoneAFriend}
                  slug="my-career-studies-caused-my-mental-illness"
                  authorName="Wivinya Betty"
                  title="My career studies caused my mental illness"
                  intro="Pressure should be the last thing young people should be put in as they undergo career choices after school"
                  initials="WB"
                />
              </Grid>
              <Grid item xs={12} md={4} style={{ position: 'relative' }}>
                <ArticlePreview
                  image={liftYourMood}
                  slug="depression-and-campus-life"
                  authorName="Juliet Maina"
                  title="Depression and campus life"
                  intro="The university life comes with a lot of freedom. Freedom that most students have never experienced before"
                  initials="JM"
                />
              </Grid>
              <Grid item xs={12} md={4} style={{ position: 'relative' }}>
                <ArticlePreview
                  image={hands}
                  slug="mental-illness-stigma-help-seeking-and-public-health-programs"
                  authorName="Hillary Mang'oli"
                  title="Mental illness stigma, help seeking and public health programs"
                  intro="In this article, we reviewed the evidence of whether larger scale anti-stigma campaigns could lead to increased levels of help seeking"
                  initials="HM"
                />
              </Grid>
              <Grid item xs={12} md={4} style={{ position: 'relative' }}>
                <ArticlePreview
                  image={intro101}
                  slug="introduction-to-mental-health-disorders-101"
                  authorName="Charity Waithaka"
                  title="Introduction to mental health disorders 101"
                  intro="As the name suggests, mental health disorders are illness that affect the cognitive factor thus affecting an individual’s mood, feeling, thinking and behavior"
                  initials="CW"
                />
              </Grid>
              <Grid item xs={12} md={4} style={{ position: 'relative' }}>
                <ArticlePreview
                  image={hope}
                  slug="mental-health-support"
                  authorName="Peter Lobor"
                  title="Mental health support"
                  intro="Increasing investment is required on all fronts for mental health awareness and to increase understanding and also to reduce stigma"
                  initials="PL"
                />
              </Grid>
              <Grid item xs={12} md={4} style={{ position: 'relative' }}>
                <ArticlePreview
                  image={meditating}
                  slug="an-overview-of-mental-health-disorders"
                  authorName="Victor Simiyu"
                  title="An overview of mental health disorders"
                  intro="Mental health can have variances in definitions depending on an individual’s understanding of what Mental health really is"
                  initials="VS"
                />
              </Grid>
              <Grid item xs={12} md={4} style={{ position: 'relative' }}>
                <ArticlePreview
                  image={weHurt}
                  slug="what-is-anxiety-attack"
                  authorName="Benardette Arama"
                  title="What is anxiety attack?"
                  intro="If you have an anxiety disorder, you may respond to certain things and situations with fear and dread"
                  initials="BA"
                />
              </Grid>
              <Grid item xs={12} md={4} style={{ position: 'relative' }}>
                <ArticlePreview
                  image={happyBalloons}
                  slug="mental-health-awareness"
                  authorName="Said Mansour"
                  title="Mental health awareness"
                  intro="Mental health awareness is the recognition that our psychological well-being is an important part of our own health, productivity and happiness, as well as the well-being of our communities"
                  initials="SM"
                />
              </Grid>
              <Grid item xs={12} md={4} style={{ position: 'relative' }}>
                <ArticlePreview
                  image={happyFace}
                  slug="mood-disorders-and-treatment"
                  authorName="Mugo Timothy"
                  title="Mood disorders and treatment"
                  intro="Moods are the emotions that affect people each and every day, sometimes people are sad and other time they are happy"
                  initials="MT"
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Container>
    </>
  )
}

export default SecondSection
