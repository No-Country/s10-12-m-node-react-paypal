'use client'
import Link from 'next/link'
import React from 'react'

function ButtonDashCompIn() {
  return (
    <div>
        <Link  className='py-[14px] px-6 bg-Morado/700 mx-2 w-[17.5rem] rounded-md shadow-lg hover:opacity-50 duration-300 uppercase text-white '>
            Cargar
        </Link >
        <Link href={"/dashboard/transfer"} className='py-[14px] px-6 bg-Morado/700 mx-2 w-[17.5rem] rounded-md shadow-lg hover:opacity-50 duration-300 uppercase text-white  ' >
            Transferir
        </Link >
    </div>
  )
}


export default ButtonDashCompIn