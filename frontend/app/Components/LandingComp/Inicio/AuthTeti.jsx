'use client'
import { AuthContext } from '@/app/context/auth-context';
import Link from 'next/link';
import React, { useContext } from 'react'

function AuthTetiInicio() {

    const authContext = useContext(AuthContext);
    const isUserAuthenticated = authContext.isUserAuthenticated();
  return (
    <div className=" flex justify-start items-center w-full">
    <Link
      href={"/Signup"}
      className={isUserAuthenticated ?   'hidden' : "w-[143px] h-[48px] rounded-md flex justify-center items-center mr-2 text-Grises/100 bg-Morado/700 hover:bg-Morado/800 duration-300  font-semibold"}
    >
      Registrarme
    </Link>
    <Link
      href={isUserAuthenticated ? '/dashboard' : '/loginPage'}
      className= 'w-[143px] h-[48px] rounded-md flex justify-center capitalize items-center text-Grises/100 hover:bg-Azul/100 hover:text-Azul/900 duration-300 font-semibold'
   
   >
    {isUserAuthenticated ?  '' : 'iniciar sesion'}
    </Link>
  </div>
  )
}

export default AuthTetiInicio