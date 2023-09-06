'use client'
import Link from 'next/link'
import React from 'react'

function ButtonDashCompIn() {
  return (
    <div className='w-full h-14 border-2'>
        <button className='bg-Morado/700 mx-2 w-[17.5rem] h-14 rounded-md shadow-lg '>
        <Link href={"/dashboard"} className=' hover:opacity-50 duration-300 uppercase text-white '>
            Cargar
        </Link >
        </button>
        <Link href={"/dashboard/transfer"} className=' bg-Morado/700 mx-2 w-[17.5rem] h-14 rounded-md shadow-lg hover:opacity-50 duration-300 uppercase text-white  ' >
            Transferir
        </Link >
    </div>
  )
}


export default ButtonDashCompIn