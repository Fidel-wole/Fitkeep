import React from 'react'
import MainHeader from '../../components/MainHeader'
import Programs from '../../components/Programs'
import './home.css'
import Values from '../../components/Values'
import FAQs from '../../components/FAQs'
import Testimonials from '../../components/Testimonials'
import Footer from '../../components/Footer'
const home = () => {
  return (
    <>
    <MainHeader/>
    <Programs/>
    <Values/>
    <FAQs/>
    <Testimonials/>
    <Footer/>
    </>

  )
}

export default home