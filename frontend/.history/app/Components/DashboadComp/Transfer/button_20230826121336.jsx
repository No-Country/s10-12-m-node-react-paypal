'use client'
import Link from 'next/link'
import React from 'react'

function ButtonDashCompTr() {
  return (
    <div className='w-full h-14  flex justify-center'>
 
        <button className='bg-Morado/700 mx-2 w-[17.5rem] h-14 hover:opacity-50 shadow-2xl  duration-300 rounded-md  '>
        <Link href={"/dashboard/transfer"} className='   uppercase text-white '>
            confirmar
        </Link >
        </button>
    </div>
  )
}


export default ButtonDashCompTr