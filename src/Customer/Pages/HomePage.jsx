import React from 'react'
import MainCarousel from '../Components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../Components/HomeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from '../../Data/mens_Kurta'

export const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCarousel data={mens_kurta} sectionName={'Mens'}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={'Mens Shoes'} />
        <HomeSectionCarousel data={mens_kurta} sectionName={'Mens shirts'} />
        <HomeSectionCarousel  data={mens_kurta} sectionName={'Womens Saree'}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={'Womens Dress'} />
      </div>
    </div>

  )
}
