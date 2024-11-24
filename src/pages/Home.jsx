import React from 'react'
import Banner from '../components/Banner'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctor from '../components/TopDoctor'
import BottomBanner from '../components/BottomBanner'

const Home = () => {
  return (
    <div>
      <Banner />
      <SpecialityMenu />
      <TopDoctor />
      <BottomBanner />
    </div>
  )
}

export default Home