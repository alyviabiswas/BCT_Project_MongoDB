import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CategoryCarousel />
      {/* <LatestJobs />
      <Footer /> */}
    </>
  )
}

export default Home