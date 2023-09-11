import Button from '@/app/Components/Button'
import { ExclamationCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'

function AlertLogOut({handleLogout, handleViewLogOutClose}) {
  return (
    <article className='absolute top-0 left-0   w-full h-full   flex  items-center justify-center'>
    <div className='relative flex justify-center items-center w-full h-full'>


  <div className="bg-Grises/50 p-7 rounded-lg z-10 w-login shadow-lg mt-16 duration-300 transition-all">
    <div className='w-full h-20 flex items-center justify-center my-4 '>
    <ExclamationCircleIcon className="bg-Rojo/500  rounded-full text-white w-full p-2  max-w-[65px] h-full max-h-[65px] animate-bounce"/>
    </div>
    <div>
     <h2 className='font-bold text-Azul/800 text-2xl text-center tracking-wider'>Cerrar sesión</h2>
     <p className='font-medium text-lg text-center mt-2'>¿Estas seguro que quieres cerrar sesión?</p>

    </div>
    <div className='mt-6 w-full flex justify-evenly items-center'>
      <span className='flex justify-evenly items-center'>
      <Button text="Cancelar"  variant="empty" className="mr-2"   onClick={handleViewLogOutClose}  />
      <Button text="Cerrar"  variant="filled"   onClick={handleLogout}  />
      </span>

    </div>

  </div>
<div className='absolute opacity-70 w-full h-full top-0 left-0 bg-Grises/600'></div>
</div>
  </article>
  )
}

export default AlertLogOut