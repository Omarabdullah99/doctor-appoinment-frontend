import React from 'react'
import Banner from '../components/Home/Banner'
import SpecialityMenu from '../components/Home/SpecialityMenu'
import TopDoctor from '../components/Home/TopDoctor'
import BottomBanner from '../components/Home/BottomBanner'


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