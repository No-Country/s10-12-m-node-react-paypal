import {WalletIzqError , WalletDerError } from '@/public/images/cardError/WalletIzqError'
import Link from 'next/link'
import React from 'react'
import ButtonNotFound from './Components/ButtonNotFound';

function NoFoundPage() {
 
  return (
    <div className='min-h-screen flex items-center justify-center bg-Morado/100  ' >
        <div className='h-full w-2/3 flex justify-evenly items-center flex-col  '>
          <div className='text-center'>
          <h2 className='font-bold text-6xl text-Morado/700'>¡Ups! </h2>
          <p className='text-4xl font-medium text-Azul/900 mt-10 '>La pagina que estas buscando no esta disponible.</p>

          </div>
          <div className='flex items- justify-evenly mt-10'>
          <div className=' flex justify-center items-center h-full'>
           <WalletIzqError /> 
           {/* className="rotate-[20deg]" */}
          </div>

            <h3 className='font-bold text-Morado/700 text-7xl leading-[4.5rem] text-center w-[185px]'>Error 404</h3>
          <div className=' flex justify-center items-center h-full'>
             <WalletDerError/>
          </div>
          </div>
          <div className='w-[160px] py-2 mt-2' >
          <ButtonNotFound text={"regresar"} variant={"filled"}  />

          </div>
        </div>

        

    </div>
  )
}

export default NoFoundPage