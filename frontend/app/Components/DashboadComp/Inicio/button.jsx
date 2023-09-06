'use client'
import Link from 'next/link'
import React from 'react'

function ButtonDashCompIn() {
  return (
    <div className='w-full h-14 flex justify-evenly items-center '>
        <button className='bg-Morado/700 hover:bg-Morado/900 duration-300 mx-2 lg:w-[17.5rem] md:w-[14rem] w-[6rem] h-14 rounded-md shadow-lg '>
        <Link href={"/dashboard/abonar"} className=' hover:opacity-50 duration-300 uppercase text-white lg:text-base md:text-sm text-xs   '>
            abonar
        </Link >
        </button>
        <button className='bg-Morado/700 hover:bg-Morado/900 duration-300 mx-2 lg:w-[17.5rem] md:w-[14rem] w-[6rem]  h-14 rounded-md shadow-lg '>
        <Link href={"/dashboard/transfer"} className=' hover:opacity-50 duration-300 uppercase text-white lg:text-base md:text-sm text-xs  '>
            transferir
        </Link >
        </button>
    </div>
  )
}


export default ButtonDashCompIn