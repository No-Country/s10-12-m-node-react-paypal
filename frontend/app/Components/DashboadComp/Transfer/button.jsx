'use client'
import React from 'react'

function ButtonDashCompTr({onClick, texto}) {
  return (
    <div className='w-full h-14  flex justify-center'>
 
        <button onClick={onClick} className='bg-Morado/700 text-white first-letter:uppercase md:text-base  text-sm font-bold hover:bg-Morado/900 mx-2 w-full max-w-[17.5rem] h-14  shadow-2xl  duration-300 rounded-md  '>
         
           {texto}
      
      
        </button>
    </div>
  )
}


export default ButtonDashCompTr