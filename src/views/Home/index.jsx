import React from 'react'
import Header from '../../components/Header'
import Services from '../../components/Services'
import Facts from '../../components/Facts'
import Carousel from '../../components/Carousel'

const Home = () => {
  return (
    <div>
        <Header />
        <Services />
        <Facts />
        <Carousel />
    </div>
  )
}

export default Home