import { Button, IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const CartItem = () => {
  return (
    <div className='p-5 shadow-lg  border rounded-md '>
        <div className='flex item-center'>
            <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                <img className='w-full h-full object-cover object-top' src='https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70' alt='' />

            </div>
            <div className='ml-5 space-y-1'>
                <p className='font-semibold'>Men Slim Mid Rise Black</p>
                <p className='opacity-70'>Size : L</p>
                <p className='opacity-70 mt-2'>Seller:Maha</p>
                <div className='flex space-x-5 items-center text-gray-900 mt-6'>
                <p className='font-semibold'>$199</p>
                <p className='opacity-50 line-through'>$299</p>
                <p className='text-green-600 font-semibold'>5% Off</p>
            </div>

            </div>
        </div>
        <div className='lg:flex item-center lg:space-x-10 pt-4'>
                <div className='flex item-center space-x-2'>
                    <IconButton sx={{color:'RGB(145 85 253)'}}>
                        <RemoveCircleOutlineIcon/>
                    </IconButton>
                    <span className='py-1 px-7 border rounded-sm'>3</span>
                    <IconButton sx={{color:'RGB(145 85 253)'}}>
                        <AddCircleOutlineIcon/>
                    </IconButton>
                </div>
                <div>
                    <Button sx={{color:'RGB(145 85 253)'}}>Remove </Button>
                </div>

            </div>
    </div>

  )
}

export default CartItem;