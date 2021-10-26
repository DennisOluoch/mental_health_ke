import { Typography } from '@material-ui/core'
import React from 'react'
import ArticleWrapper from './ArticleWrapper'
import photo from '../../images/mindfullness-article.jpg'
import PullQuote from './components/PullQuote'

const MentalAwareness = () => {
  return (
    <ArticleWrapper themePhoto={photo}>
      <Typography>
        Mental health awareness is the recognition that our psychological
        well-being is an important part of our own health,productivity and
        hapiness ,as well as the well -being of our communities. It includes our
        emotional,psychological and social well-being.It affects how we
        feel,think and act. Mental illnesses affect 19% of the adult
        popultion,46% of teenagers and 13% of children each year.
      </Typography>
      <Typography>
        Mental health is caused by different issues.Some of them are: Childhood
        abuse ,trauma or neglect -Social isolaton or loneliness, Experiencing
        discrimination and stigma, Social disadvantage ,poverty or debt
        ,Bereavement(losing someone close to you), Severe or long-term stress,
        Having a long-term physical health condition Unemployment or losing your
        job
      </Typography>
      <PullQuote>
        Mental health awareness increases the chances for early
        intervention,which can result in a fast recovery. Awareness reduces
        negative adjectives that have been set to describe our people with a
        mental illness
      </PullQuote>
      <Typography>
        The main warning signs of mental illness are as follows: Excessive
        paranoia,worry, or anxiety. Long-lasting sadness or irritability.
        Extreme changes in moods. Social withdrawal. Dramatic changes in eating
        or sleeping pattern.
      </Typography>
      <Typography>
        Mental health awareness increases the chances for early
        intervention,which can result in a fast recovery. Awareness reduces
        negative adjectives that have been set to describe our people with a
        mental illness. By raising awareness, mental health can now be seen as
        an illness. These illnesses can be managed by treatment.
      </Typography>
      <Typography>
        There are several ways to participate in Mental Health Awareness.They
        include the following:
      </Typography>
      <Typography variant="h6">Share your story</Typography>
      <Typography>
        One of the best way to beat the stigma sorrounding mental health
        challenges is to keep the topic in the conversation.
      </Typography>
      <Typography variant="h6">
        Educate yourself on Mental Health And Wellness
      </Typography>
      <Typography>
        This include learning how to practice good self-care habits to protect
        your own mental wellness.
      </Typography>
      <Typography variant="h6">Talk to a therapist</Typography>
      <Typography>
        Another thing you can do is to speak with a therapist to addresss any
        mental health challenges that you`re facingin your life.
      </Typography>
      <Typography variant="h6">Focus On Your Self-care</Typography>
      <Typography>
        This plays an important role in mental health. Such habits include:-
        getting the proper amount of sleep, among others.
      </Typography>
      <Typography variant="h6">Suport those around you</Typography>
      <Typography>
        This include helping them to reach out for professional help from a
        therapist or you check in with them regurlarly to see if there`s
        anything you can do to suport them.
      </Typography>
      <Typography>
        Increased investment is requird on all fronts: for mental health
        awareness to increase understanding and reduce stigma,for efforts to
        increase access to quality mental health care snd effective treatments
        and for research to identify new treatments and improve existing
        treatments for all mental disorders.
      </Typography>
    </ArticleWrapper>
  )
}

export default MentalAwareness
