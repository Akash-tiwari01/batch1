import React from 'react'
import Header from '../component/Header'
import HeroSection from '../component/HeroSection'
import CourseSection from '../component/CourseSection'

function HomePage() {
  return (
        <>
            <div className='body-wrapper'>
            <Header></Header>
            <HeroSection/>
            <CourseSection/>
            </div>
        </>
  )
}

export default HomePage
