import React from 'react'
import CartItem from './CartItem'
import { Button } from '@mui/material'

const Cart = () => {
  return (
    <div>
        <div className='lg:grid grid-cols-3 lg:px-16 relative'>
        <div className='col-span-2'>
            {[1,1,1,1].map((item)=><CartItem  />)}
        </div>
        <div className='top-0 h-[100vh] px-5 sticky mt-5 lg:mt-0 '>
            <div className='border'>
                <p className='uppercase font-bold opacity-60 pb-4'>Price Details</p>
                <hr/>
                <div className='space-y-3 font-semibold mb-10'>
                    <div className='flex justify-between pt-3 text-black'>
                        <span>Price</span>
                        <span>$4145</span>
                    </div>
                    <div className='flex justify-between pt-3 '>
                        <span>Discount </span>
                        <span className='text-green-600'>-$4145</span>
                    </div>
                    <div className='flex justify-between pt-3 '>
                        <span>Delivery Charge</span>
                        <span className='text-green-600'>Free</span>
                    </div>
                    <div className='flex justify-between pt-3  text-green-600 font-bold'>
                        <span>Total AMount</span>
                        <span className='text-green-600'>$145</span>
                    </div>

                </div>
                <Button variant='contained' className='w-full' sx={{px:"2.7rem",py:'0.7rem',bgcolor:'#9155fd'}}>
                Check Out
              </Button>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default Cart