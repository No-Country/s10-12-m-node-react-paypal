'use client'
import { WalletDerError, WalletIzqError } from '@/public/images/cardError/WalletIzqError'
import React, { useEffect, useState } from 'react'

function CardAnimation() {
    const [viewLoaded, setViewLoaded] = useState(false);

  useEffect(() => {

    setViewLoaded(true);
  }, []); 
  return (
    <div className='flex items- justify-evenly mt-10'>
    <div className=' flex justify-center items-start h-full '>
     <WalletIzqError className={`w-full h-full  ${viewLoaded ? 'lg:animate-lg-left animate-md-left' : ''}`} /> 
     {/* className="rotate-[20deg]" */}
    </div>

      <h3 className='font-bold text-Morado/700 lg:text-7xl md:text-6xl text-4xl   text-center w-[185px]'>Error 404</h3>
    <div className=' flex justify-center items-start h-full '>
       <WalletDerError  className={`w-full h-full  ${viewLoaded ? 'lg:animate-lg-right animate-md-right' : ''}`} />
    </div>
    </div>
  )
}

export default CardAnimation