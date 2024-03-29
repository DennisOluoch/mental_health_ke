/* eslint-disable react/no-unescaped-entities */
import { Typography } from '@material-ui/core'
import React from 'react'
import ArticleWrapper from './ArticleWrapper'
import books from '../../images/career-article.jpg'
import PullQuote from './components/PullQuote'
import ArticleImage from './components/ArticleImage'
import anotherImage from '../../images/career-article-2.jpg'

const CareerStudies = () => {
  return (
    <ArticleWrapper themePhoto={books}>
      <Typography>
        While other young people think pursuing a degree in one of the best
        universities in the country is a big achievement, some of the young
        individuals have failed in the whole process due to poor career choice.
        Speaking with Valhalla media group, Gremlly Otieno, one of the medical
        and surgical students in the best university in Kenya, admitted that his
        degree caused him a lot of metal illness which he never realised at
        first. Coming from a successful family career wise this led him to
        choosing a career that he was not interested in but but decided to do it
        due to the pressure of the parents who have found their success in the
        medical industry. Not knowing that the child’s interest in should be put
        first before advising him or her on the careers he or she might want to
        pursue that is where we all get it wrong. "I found myself depressed,
        wanted to be alone and even confused within some years of my studies at
        the varsity because I never wanted to do that course it was just not in
        me my parents had forced me into something that I was not interested in"
        said Gremlly.
      </Typography>
      <PullQuote>
        Pressure should be the last thing young people should be put in as they
        undergo career choices after school.
      </PullQuote>
      <Typography>
        Pressure should be the last thing young people should be put in as they
        undergo career choices after school. When a dad is a doctor for example
        this doesn’t make his son or daughter have interest in being a doctor.
        Every individual should have an opportunity to pursue a career that they
        feel comfortable in. this is because the study process needs interest,
        driving force and motivation. This will really help in the reduction of
        the pressure that young individuals find themselves in during their
        campus life a thing that leads most of them engaging in drug and
        substance abuse.
      </Typography>
      <ArticleImage photo={anotherImage} />
      <Typography>
        Parents should play a very important role in career choices and not
        force them in careers they are not interested in this will at many
        points lead into depression. According to research it is stated that one
        of the major causes of stress among young individuals is wrong career
        studies at the university this leads to mental strain that is caused by
        lack of interest in what they are studying, and this can lead to
        pressure. Young individuals are believed to be the leaders of tomorrow,
        and this calls for a success in their education and having the right
        guidance in their youth life. this really helps in determining their
        tomorrow. Youth with mental health disorders often experience
        difficulties in a variety setting including within their families at
        home, in school and in the community. With mental health issues can lead
        to the young individuals facing disciplinary actions in school even and
        this maybe due to disturbed mind which can lead to change of behaviour,
        thoughts and emotions.
      </Typography>
      <Typography>
        According to statistics, 40% of young people suffer mental illness
        caused by anxiety and depression which means approximately out of 10
        youths 4 are mentally ill. We as a society have a role to play in the
        lives of our young generation if we don’t want to lose them taking care
        of them should be a priority in everyone’s life. Prevention and early
        intervention in youth mental health should be put into consideration
        before things get out of hand.
      </Typography>
      <Typography>
        Evidence suggests that it would be unrealistic to consider promotion and
        prevention in mental health professional along. Integrated and
        multidisciplinary services are needed to increase the range of possible
        interventions and limit the risk of poor long-term outcome, with also
        potential benefits benefits in terms of healthcare system costs. However
        mental health professional has the scientific, ethical and moral
        responsibility to indicate the direction to all social, political and
        other health care bodies involved in the process of meeting mental
        health needs during youth years. Our careers pursuing process should
        give our young people peace of mind and success in life and not
        disturbed minds.
      </Typography>
    </ArticleWrapper>
  )
}

export default CareerStudies
