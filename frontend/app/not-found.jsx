import Link from 'next/link'
import React from 'react'

function NoFoundPage() {
  return (
    <div className='min-h-screen flex items-center justify-center  ' >
        <div className='h-full w-2/3 flex justify-center items-center flex-col '>
        <h2 className='uppercase font-bold text-Morado/800 text-8xl'>Error 404</h2>
        <p className='text-Azul/500 first-letter:uppercase font-medium mt-2'>la pagina que quiere encontrar aun no esta disponible porfavor <Link href={"/"} className='hover:underline cursor-pointer text-Morado/700 uppercase'>vuelva mas tarde</Link></p>

        </div>

        

    </div>
  )
}

export default NoFoundPage