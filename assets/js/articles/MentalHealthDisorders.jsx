import { Box, List, Typography, makeStyles } from '@material-ui/core'
import React from 'react'
import ArticleWrapper from './ArticleWrapper'
import photo from '../../images/intro-101-article.jpg'
import PullQuote from './components/PullQuote'
import anotherPhoto from '../../images/eating-disorders-article.jpg'
import ArticleImage from './components/ArticleImage'
import yetAnotherPhoto from '../../images/emotions-article.jpg'
import anxietyPhoto from '../../images/anxiety-chum.jpg'

const useStyles = makeStyles(theme => ({
  paragraph: {
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
}))

const MentalHealthDisorders = () => {
  const classes = useStyles()

  return (
    <ArticleWrapper themePhoto={photo}>
      <Typography>
        As the name suggests, mental health disorders are illness that affect
        the cognitive factor thus affecting an individual’s mood, feeling,
        thinking and behavior. Studies have shown that up to 50% who require
        mental health services are also involved in substance abuse problems.
        Substance use such as Cannabis especially in high content is said to
        have a dual diagnosis or a concurrent disorder. Why is this? People who
        suffer from mental disorders often than not abuse alcohol and other
        drugs to lessen the symptoms of mental illness.
      </Typography>
      <PullQuote>
        Studies have shown that up to 50% who require mental health services are
        also involved in substance abuse problems.
      </PullQuote>
      <Typography variant="h5">Schizoaffective Disorder</Typography>
      <Typography>
        An individual is diagnosed with this disorder when they have both a mood
        disorder and a psychotic disorder at the same time. The dispiriting
        symptoms of schizoaffective disorder include hallucinations, delusions,
        disorganized thoughts, suicidal thoughts and concentration impairment.
        The maniac symptoms of this disorder include extreme forms of elation
        with increased self-coincidence. The individual often acts inappropriate
        in social situations, symptoms of psychosis are present making their
        behavior appear unusual.
      </Typography>
      <Typography variant="h5">Psychosis</Typography>
      <Typography>
        This mostly is associated with the mind where there is detachment from
        reality. A psychotic episode is a term when an individual experience
        this psychosis symptoms. It affects an individual’s thoughts, feelings,
        thoughts and behavior which can be a result of using or withdrawing from
        drugs and alcohol. In statistics about 3 out of every 100 people
        experience a psychotic episode.
      </Typography>
      <Typography>Signs and symptoms of psychosis:</Typography>
      <List>
        <ol className={classes.paragraph}>
          <li>
            <Typography style={{ fontFamily: 'inherit', fontSize: 'inherit' }}>
              Anxiety
            </Typography>
          </li>
          <li>
            <Typography style={{ fontFamily: 'inherit', fontSize: 'inherit' }}>
              Social withdrawal
            </Typography>
          </li>
          <li>
            <Typography style={{ fontFamily: 'inherit', fontSize: 'inherit' }}>
              Sleep disturbance
            </Typography>
          </li>
          <li>
            <Typography style={{ fontFamily: 'inherit', fontSize: 'inherit' }}>
              Reduced drive and motivation
            </Typography>
          </li>
          <li>
            <Typography style={{ fontFamily: 'inherit', fontSize: 'inherit' }}>
              Behavioural changes
            </Typography>
          </li>
          <li>
            <Typography style={{ fontFamily: 'inherit', fontSize: 'inherit' }}>
              Irritability
            </Typography>
          </li>
          <li>
            <Typography style={{ fontFamily: 'inherit', fontSize: 'inherit' }}>
              Disorganized thinking
            </Typography>
          </li>
          <li>
            <Typography style={{ fontFamily: 'inherit', fontSize: 'inherit' }}>
              Hallucinations
            </Typography>
          </li>
        </ol>
      </List>
      <Typography variant="h5">Anxiety Disorders</Typography>
      <Typography>
        This disorder is distinguished by its peculiarity in affecting the
        physical health of the individual. It is caused by biological and
        situational circumstances, heightened and continuing response to a
        perceived threat. Types of anxiety disorders:
      </Typography>
      <ArticleImage photo={anxietyPhoto} />
      <Box my="15px" pl="20px">
        <Typography variant="h6">General Anxiety</Typography>
        <Typography className={classes.paragraph}>
          Continuous and redundant worries that last at least six months in
          relation to routine life events and activities for example work,
          relationships, family and finances.
        </Typography>
        <Typography variant="h6">Panic Attacks</Typography>
        <Typography className={classes.paragraph}>
          This is the fear of death leading to heart palpations, nausea,
          choking, vertigo, chest pain and perspiration.
        </Typography>
        <Typography variant="h6">Panic Disorders</Typography>
        <Typography className={classes.paragraph}>
          Dread of situations that may cause a panic attack.
        </Typography>
        <Typography variant="h6">Phobias</Typography>
        <Typography className={classes.paragraph}>
          Overwhelming feeling of terror towards a specific object, situation or
          activity.
        </Typography>
        <Typography variant="h6">Obsessive-compulsive disorder</Typography>
        <Typography className={classes.paragraph}>
          Recurring actions used to cope with unwanted thoughts.
        </Typography>
        <Typography variant="h6">Post-tramaumatic stress disorder</Typography>
        <Typography className={classes.paragraph}>
          It is the re-experiencing of a traumatic event for a long period of
          time.
        </Typography>
        <ArticleImage photo={yetAnotherPhoto} />
      </Box>
      <Typography variant="h5">Schizophrenia</Typography>
      <Typography>
        It is caused by a chemical disturbance of the brains functioning. Thus,
        this disorder is characterized by the changes in the behavior or
        symptoms present in a period of six months.
      </Typography>
      <Typography>
        It affects about one out of every 100 people. Common symptoms;
      </Typography>
      <List>
        <ol className={classes.paragraph}>
          <li>
            <Typography style={{ fontFamily: 'inherit', fontSize: 'inherit' }}>
              Hearing voices may affect all the senses
            </Typography>
          </li>
          <li>
            <Typography style={{ fontFamily: 'inherit', fontSize: 'inherit' }}>
              Paranoia
            </Typography>
          </li>
          <li>
            <Typography style={{ fontFamily: 'inherit', fontSize: 'inherit' }}>
              Religious preoccupation
            </Typography>
          </li>
          <li>
            <Typography style={{ fontFamily: 'inherit', fontSize: 'inherit' }}>
              Thinking that you can control someone’s thoughts or that some is
              controlling your thoughts.
            </Typography>
          </li>
          <li>
            <Typography style={{ fontFamily: 'inherit', fontSize: 'inherit' }}>
              Disjointed thoughts.
            </Typography>
          </li>
          <li>
            <Typography style={{ fontFamily: 'inherit', fontSize: 'inherit' }}>
              Righteousness
            </Typography>
          </li>
        </ol>
      </List>
      <Typography variant="h5">Eating Disorders</Typography>
      <Typography>
        Involves the distortion of body images that make it hard for people to
        nourish themselves in a healthy way. It mostly affects men and women
        under the age 30.
      </Typography>
      <Box my="15px" pl="20px">
        <Typography variant="h6">Anorexia Nervosa</Typography>
        <Typography className={classes.paragraph}>
          Dramatic weight loss due to fasting and excessive exercise
        </Typography>
        <Typography variant="h6">Bulimia Nervosa</Typography>
        <Typography className={classes.paragraph}>
          Binge eating accompanied by self-inducing vomit
        </Typography>
      </Box>
      <ArticleImage photo={anotherPhoto} />
      <Typography variant="h5">Treatment and Recovery</Typography>
      <Typography>
        Actions to be taken for any mental illness whether or not it is
        convoluted by alcohol or any drug misuse symptoms should be evident.
        Approaches to be taken:
      </Typography>
      <Box my="15px" pl="20px">
        <Typography variant="h6">Education</Typography>
        <Typography className={classes.paragraph}>
          It helps your family understand the causes and effects and ways of
          dealing with the symptoms
        </Typography>
        <Typography variant="h6"> Medication</Typography>
        <Typography className={classes.paragraph}>
          Debut of new medication available with fewer side effects
        </Typography>
        <Typography variant="h6">Psychological Therapy</Typography>
        <Typography className={classes.paragraph}>
          Counselling helps an individual understand what is going on, change
          your lifestyle to optimize the chances of recovery and learn new
          skills.
        </Typography>
        <Typography variant="h6">
          Social, Employment and Education Support
        </Typography>
        <Typography className={classes.paragraph}>
          This is vital so that one is able to maintain skill development and
          continuation of income in order not to be cut off by friends and
          family. Research has shown that people who are mentally ill and have a
          support system have minimal relapses.
        </Typography>
      </Box>
    </ArticleWrapper>
  )
}

export default MentalHealthDisorders
