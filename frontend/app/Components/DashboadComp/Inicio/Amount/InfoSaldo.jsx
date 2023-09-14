'use client'
import { AuthContext } from '@/app/context/auth-context';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react'

function InfoSaldo() {
  const router = useRouter();
  const authContext = useContext(AuthContext);
  const balance = authContext.user?.Account?.balance;
  return (
    <div className='flex  lg:items-end items-center  justify-start mt-5 mb-6'>
    <p className='font-medium lg:text-8xl md:text-5xl text-2xl text-Morado/800  mr-2'> ${balance == null? '00,00' : balance}  </p>
    <span className='  uppercase text-base font-semibold text-black py-2 px-4 bg-Morado/50 rounded-full shadow-md ' >usd</span>
  </div>
  )
}

export default InfoSaldo