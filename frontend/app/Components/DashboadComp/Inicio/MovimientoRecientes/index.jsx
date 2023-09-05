'use client'
import React from 'react'
import Link from 'next/link';
import { AiOutlineUnorderedList } from 'react-icons/ai';

const MOVIMENTAPI = [{
    id: 1,
    nombre: "maria alejandra suarez",
    date: "20 ago",
    success: "Dinero Enviado",
    money: "20.00"
},
{
    id: 2,
    nombre: "Jose Juan Viñeda",
    date: "20 ago",
    success: "Dinero recibido",
    money: "20.00"
}
]


function MovimientComp() {

    




  return (
  

    <div className='bg-white  xl:w-1/2 lg:w-2/3   w-fit h-[22rem]  rounded-md  p-4  mt-10  shadow-lg   flex justify-center items-center  '>
    <div className='flex flex-col h-2/3 lg:w-3/4 md:w-4/5  justify-between items-start'>
        <div className='flex justify-center items-center'>
            <AiOutlineUnorderedList className='mr-2 text-Azul/900 lg:text-xl md:text-base text-sm lg:block hidden '/>
        <h3 className='lg:text-2xl md:text-xl text-base  font-semibold text-Azul/900 first-letter:uppercase text-center'>  movimientos recientes</h3>

        </div>
     <div className='flex justify-between items-center w-full flex-col gap-4 ' >
        {MOVIMENTAPI.map(({id, date, success, nombre, money}) => 
              <div key={id} className='flex justify-start items-center w-full '>

              <div className='lg:w-16 md:w-12 w-10 lg:h-14 md:h-10 h-8  rounded-full bg-Morado/700 flex justify-center items-center mr-2 '>
                  <span className='lg:text-2xl md:text-base text-sm  uppercase text-white'>j</span>
              </div>
              <div className=' flex flex-col justify-start items-start tracking-wide w-1/2'>
     
              <h4 className='capitalize font-bold  lg:text-base md:text-sm text-xs '> {nombre}</h4>
              <div className='flex justify-left items-center w-full '>
              <span className='lg:text-base md:text-sm text-xs'>{date}</span> <ul className='ml-6'><li className='list-disc lg:text-base md:text-sm text-xs '>{success}</li></ul>
     
              </div>
              </div>
              <div className='flex justify-end  w-1/2'>
             <span className='font-bold lg:text-[1.5rem] md:text-[1rem] text-xs tracking-wide text-Morado/700 leading-6'>-${money}</span>
             </div>
              </div>
        
        )}
   
        
     </div>
     
     <Link href='/dashboard/movimientos' className='leading-5 text-Azul/500 first-letter:uppercase cursor-pointer hover:underline'>mostrar todos</Link>
     </div>
 </div>                       
                  

           
   
  )
}

export default MovimientComp