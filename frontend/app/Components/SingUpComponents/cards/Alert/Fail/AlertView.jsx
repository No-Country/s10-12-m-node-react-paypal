import { CheckIcon } from '@heroicons/react/24/outline'
import React from 'react'
import Button from '../../../../Button'
import { RxCross1 } from 'react-icons/rx'
import Link from 'next/link'

function AlertViewFail({handleButtonCloseView}) {
  return (
    <article className='absolute top-0 left-0   w-full h-full   flex  items-center justify-center'>
      <div className='relative flex justify-center items-center w-full h-full'>


    <div className="bg-Grises/50 p-7 rounded-lg z-10 w-login shadow-lg mt-16 duration-300 transition-all">
      <div className='w-full h-20 flex items-center justify-center my-4 '>
       <RxCross1 className="bg-Rojo/500 rounded-full text-white w-full p-2  max-w-[65px] h-full max-h-[65px] animate-bounce"/>

      </div>
      <div>
       <h2 className='font-bold text-Azul/800 text-2xl text-center tracking-wider'>Ups Error al Crear</h2>
       <p className='font-medium text-lg text-center mt-2'>No es posible realizar el registro. Por favor inténtalo de nuevo. </p>

      </div>
      <div className='mt-6 w-full flex justify-center items-center'>
        <span className='w-1/2'>
        <Button text="Cerrar"  variant="filled" className="w-1/2"  onClick={handleButtonCloseView}  />
        </span>

      </div>

    </div>
<div className='absolute opacity-70 w-full h-full top-0 left-0 bg-Grises/600'></div>
</div>
    </article>
  )
}

export default AlertViewFail