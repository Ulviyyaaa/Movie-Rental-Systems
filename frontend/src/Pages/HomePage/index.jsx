import React from 'react'
import Footer from '../../Layout/Footer'
import Navbar from '../../Layout/Navbar'
import ActionSwip from './ActionSwip'
import AnimationSwip from './AnimationSwip'
import DramaSwip from './DramaSwip'
import SciFiSwip from './SciFiSwip'

function HomePage() {
  return (
    <div>
    <Navbar/>
      <ActionSwip/>
      <SciFiSwip/>
      <DramaSwip/>
      <AnimationSwip/>
      <Footer/>
    </div>
  )
}

export default HomePage