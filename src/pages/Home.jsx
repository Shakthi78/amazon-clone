import React from 'react'
import Banner from '../Components/Home/Banner'
import Products from '../Components/Home/Products'

const Home = () => {
  return (
    <div>
        <Banner/>
        <div className='w-full -mt-10 md:-mt-20 xl:-mt-80'>
          <Products/>
        </div>
    </div>
  )
}

export default Home