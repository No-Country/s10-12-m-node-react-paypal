
import React from 'react'
import Link from 'next/link';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import ApiMovimiento from './data';




function MovimientComp() {

    




  return (
  

    <div className='bg-white  w-full  xl:max-w-[800px] lg:max-w-[708px]  md:max-w-[600px] max-w-[288px] h-[22rem]  rounded-md  p-4  mt-10  shadow-lg   flex justify-center items-center  '>
    <div className='flex flex-col h-2/3 lg:w-3/4 md:w-4/5  justify-between items-start'>
        <div className='flex justify-center items-center'>
            <AiOutlineUnorderedList className='mr-2 text-Azul/900 lg:text-xl md:text-base text-sm lg:block hidden '/>
        <h3 className='lg:text-2xl md:text-xl text-base  font-semibold text-Azul/900 first-letter:uppercase text-center'>  movimientos recientes</h3>

        </div>
     <div className='flex justify-between items-center w-full flex-col gap-4 ' >
       <ApiMovimiento/>
   
        
     </div>
     
     <Link href='/dashboard/movimientos' className='leading-5 text-Azul/500 first-letter:uppercase cursor-pointer hover:underline'>mostrar todos</Link>
     </div>
 </div>                       
                  

           
   
  )
}

export default MovimientComp