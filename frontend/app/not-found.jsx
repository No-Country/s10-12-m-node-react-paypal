import React from 'react'
import ButtonNotFound from './Components/Not-Found-Comp/cards/ButtonNotFound';
import CardAnimation from './Components/Not-Found-Comp/cards/CardAnimation';

function NoFoundPage() {
 
  return (
    <div className='min-h-screen flex items-center justify-center bg-Morado/100  ' >
        <div className='h-full w-2/3 flex justify-evenly items-center flex-col duration-400 '>
          <div className='text-center w-full'>
          <h2 className='font-bold lg:text-6xl md:text-5xl text-4xl text-Morado/700'>¡Ups! </h2>
          <p className='lg:text-4xl  md:text-3xl text-2xl font-medium text-Azul/900 mt-10 '>La pagina que estas buscando no esta disponible.</p>

          </div>
          <CardAnimation/>
          <div className='w-[160px] py-2 mt-2' >
          <ButtonNotFound text={"regresar"} variant={"filled"}  />

          </div>
        </div>

        

    </div>
  )
}

export default NoFoundPage