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
     <WalletIzqError className={`md:w-full md:h-full w-32 h-32 ${viewLoaded ? 'lg:animate-lg-left md:animate-md-left' : ''}`} /> 
     {/* className="rotate-[20deg]" */}
    </div>

      <h3 className='font-bold text-Morado/700 lg:text-7xl md:text-6xl text-4xl   text-center md:w-[185px] w-1/3'>Error 404</h3>
    <div className=' flex justify-center items-start h-full '>
       <WalletDerError  className={`md:w-full md:h-full w-32 h-32  ${viewLoaded ? 'lg:animate-lg-right md:animate-md-right' : ''}`} />
    </div>
    </div>
  )
}

export default CardAnimation