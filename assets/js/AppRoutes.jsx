import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AnxietyDisorder from './articles/AnxietyDisorder'
import CareerStudies from './articles/CareerStudies'
import Depression from './articles/Depression'
import MentalAwareness from './articles/MentalAwareness'
import MentalHealthDisorders from './articles/MentalHealthDisorders'
import MentalStigma from './articles/MentalStigma'
import MentalSupport from './articles/MentalSupport'
import MoodDisorder from './articles/MoodDisorder'
import OverviewMental from './articles/OverviewMental'
import StoryOfHope from './articles/StoryOfHope'
import HomeVideoSectionDown from './components/embededVideo/HomeVideoSectionDown'
import FourthSection from './components/FourthSection'
import HeroSection from './components/HeroSection'
import SecondSection from './components/SecondSection'
import ThirdSection from './components/ThirdSection'
import Privacy from './privacy/Privacy'

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <HeroSection />
            <HomeVideoSectionDown />
            <SecondSection />
            <ThirdSection />
            <FourthSection />
          </>
        }
      />
      <Route
        path="/article/my-career-studies-caused-my-mental-illness"
        element={<CareerStudies />}
      />
      <Route
        path="/article/depression-and-campus-life"
        element={<Depression />}
      />
      <Route
        path="/article/mental-illness-stigma-help-seeking-and-public-health-programs"
        element={<MentalStigma />}
      />
      <Route
        path="/article/introduction-to-mental-health-disorders-101"
        element={<MentalHealthDisorders />}
      />
      <Route
        path="/article/mental-health-support"
        element={<MentalSupport />}
      />
      <Route
        path="/article/mood-disorders-and-treatment"
        element={<MoodDisorder />}
      />
      <Route
        path="/article/mental-health-awareness"
        element={<MentalAwareness />}
      />
      <Route
        path="/article/what-is-anxiety-attack"
        element={<AnxietyDisorder />}
      />
      <Route
        path="/article/an-overview-of-mental-health-disorders"
        element={<OverviewMental />}
      />
      <Route path="/article/stories-of-hope-1" element={<StoryOfHope />} />
      <Route path="/privacy-policy" element={<Privacy />} />
    </Routes>
  )
}

export default AppRoutes
