import React from 'react'
import Navbar from './Components/Navbar'
import Herosection from './Components/Herosection'
import Howitworks from './Components/Howitworks'
import Keyfeatures from './Components/Keyfeatures'
import PricingPlans from './Components/PricingPlans'
import Testimonials from './Components/Testimonials'
import Footer from './Components/Footer'

const App = () => {
  return (
    <main className='text-sm text-neutral-300 antialiased'>
      <Navbar />
      <Herosection />
      <Howitworks />
      <Keyfeatures />
      <PricingPlans/>
      <Testimonials />
      <Footer />
    </main>
  )
}

export default App