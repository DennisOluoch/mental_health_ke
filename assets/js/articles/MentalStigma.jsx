import { List, Typography } from '@material-ui/core'
import React from 'react'
import ArticleWrapper from './ArticleWrapper'

const MentalStigma = () => {
  return (
    <ArticleWrapper>
      <Typography>
        Globally, more than 70% of people with mental illness receive no
        treatment from health care staff. Factors increasing the likelihood of
        treatment avoidance or delay include:
        <List>
          <ol>
            <li>
              <Typography style={{ fontFamily: 'inherit' }}>
                Lack of knowledge to identify features of mental illness
              </Typography>
            </li>
            <li>
              <Typography style={{ fontFamily: 'inherit' }}>
                Ignorance about how to access treatment
              </Typography>
            </li>
            <li>
              <Typography style={{ fontFamily: 'inherit' }}>
                Prejudice against people who have mental illness
              </Typography>
            </li>
            <li>
              <Typography style={{ fontFamily: 'inherit' }}>
                Expectations of discrimination against people diagnosed with
                mental illness
              </Typography>
            </li>
          </ol>
        </List>
      </Typography>
      <Typography>
        In this article, we reviewed the evidence of whether larger scale
        anti-stigma campaigns could lead to increased levels of help seeking.
      </Typography>
      <Typography>
        This article also describes the roles that stigma and discrimination
        contribute to the treatment gap and assesses the evidence that public
        health approaches to stigma and discrimination can facilitate access to
        mental health care.
      </Typography>
      <Typography variant="h5">
        Discrimination, Stigma and Mental Health Care Access
      </Typography>
      <Typography>
        The relationship between stigma and discrimination and access to care is
        multifaceted ; stigma and discrimination can impede access at
        institutional, community and individual levels.
      </Typography>
      <Typography>
        Addressing public stigma might reduce experienced and anticipated stigma
        among service users and facilitate help seeking and engagement with
        mental health care. For example, individual service users living in
        countries with higher rates of help seeking and treatment utilization,
        in addition to better perceived access to information about how to deal
        with mental health mental health problems and less stigmatizing
        attitudes, tended to have lower rates of self stigma and perceived
        discrimination.
      </Typography>
      <Typography>
        See globally, however, stigmatizing attitudes persist among the public
        and have been shown to be prevalent and associated with a reluctance to
        seek help.
      </Typography>
      <Typography>
        Stigma and discrimination and their influence on access to care may vary
        based on experience of mental distress or other sociodemographic
        factors. For instance, psychotic disorders are highly stigmatizing, and
        people with psychosis are more likely to be perceived as violent and
        unpredictable relative to people with other mental health problems. This
        can lead to high levels of experienced and anticipated discrimination in
        health care settings. Moreover, substance abuse is consistently
        associated with high rates of public stigma and substance abuse problems
        from getting health care ; these individuals fear poor treatment by
        health care providers or trouble with the authorities.
      </Typography>
      <Typography variant="h5">
        Impact of Public Health Programs on Help Seeking
      </Typography>
      <Typography>
        Because of the complex multifaceted nature of stigma and discrimination
        and the subsequent barriers associated with accessing care, the
        solutions for reducing stigma and discrimination and facilitating access
        to care will need to be equally diverse.
      </Typography>
      <Typography>
        There should be separate national programs to reduce stigma and
        discrimination. Each of these anti-stigma programs need to consist of
        multiple components aimed at specific target groups (eg, the media,
        young people) and at the general public, and operates at multiple levels
        (ie, national social marketing campaigns and regional activities) and at
        the level of small community groups funded to carry out local
        anti-discrimination work.
      </Typography>
      <Typography>
        Mental health programs have intentions to seek help for a mental illness
        and to disclose such an illness to family and friends, which underlines
        the importance of mental health literacy. This applies to two types of
        knowledge measured by the mental health knowledge schedule. The first is
        knowledge that might influence subsequent mental health related
        attitudes and behaviors. The second is whether major psychiatric
        disorders are considered mental illnesses, which is associated with help
        seeking intentions from a primary care physician.
      </Typography>
      <Typography>
        Intentions to seek help for a mental health problem are associated with
        attitudes of tolerance and support for community care, but not with
        stigmatizing attitudes of Prejudice and exclusion.
      </Typography>
      <Typography>
        Also, if social marketing campaigns were effective at improving
        knowledge and positive attitudes, they would result in increased
        intentions towards help seeking.
      </Typography>
    </ArticleWrapper>
  )
}

export default MentalStigma
