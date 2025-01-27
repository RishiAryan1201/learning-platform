import React from 'react'
import Header from '../components/Header/Header'
import Panel from '../components/Panel/Panel'
import AboutUs from '../components/About-Us/AboutUs'
import Courses from '../components/Course-Section/Courses'
import Footer from '../components/Footer/Footer'
import Importance from '../components/Importance/Importance'


const Home = () => {
  return (
    <>
    <Header />
    <Panel />
    <Importance />
    <Courses />
    <AboutUs />
    <Footer />
    </>
  )
}

export default Home
