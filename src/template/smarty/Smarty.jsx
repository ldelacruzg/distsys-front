import React from 'react'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import { useLocation } from 'react-router-dom'
import Slider from './Slider'

const Smarty = () => {
  const { pathname } = useLocation();

  return (
    <div id="wrapper">
      <Header />
      {/* slider */}
      {pathname === "/" ? <Slider /> : <></>}
      <Content />
      <Footer />
    </div>
  )
}

export default Smarty