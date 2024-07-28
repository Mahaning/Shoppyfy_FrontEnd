import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { HomeSectionCard } from '../HomeSectionCard/HomeSectionCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Button from '@mui/material/Button';

const HomeSectionCarousel = ({data=[],sectionName}) => {
    const [activeIndex,setActiveIndex]=useState(0);
    const slidePrev=()=>setActiveIndex(activeIndex-1);
    const slideNext=()=>setActiveIndex(activeIndex+1);

    const syncActiveIndex=({item})=>{setActiveIndex(item)};
    const responsive = {
        0: { 
            items: 1
        },
        568: { 
            items: 2
        },
        720: { 
            items: 3
        },
        1024: {
            items: 5.5, 
            // itemsFit: 'contain'
        },
    };

    const items=data.slice(0,10).map((item)=><HomeSectionCard product={item}/>)
  return (
   <div className='border'>
    <h2 className='text-2xl font-extrabold text-gray-800'>{sectionName}</h2>
    <div className='relative p-5'>
    <AliceCarousel
        items={items}
        disableButtonsControls
        disableDotsControls
        
        responsive={responsive}
        onSlideChanged={syncActiveIndex}
        activeIndex={activeIndex} 
    />
    <Button onClick={slidePrev} variant='contained' className='z-50 bg-white' sx={{position:'absolute',top:'8rem',right:'0rem',transform:'translateX(-50%) rotate(-90deg)',bgcolor:'white',}} aria-label='next'>
        <KeyboardArrowLeftIcon sx={{transform:'rotate(-90deg)',color:'black'}}/>
    </Button>

    <Button onClick={slideNext} variant='contained' className='z-50 bg-white' sx={{position:'absolute',top:'8rem',left:'0rem',transform:'translateX(50%) rotate(-90deg)',bgcolor:'white',}} aria-label='next'>
        <KeyboardArrowRightIcon sx={{transform:'rotate(-90deg)',color:'black'}}/>
    </Button>
    </div>
   </div>
  )
}

export default HomeSectionCarousel