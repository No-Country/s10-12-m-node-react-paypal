'use client'
import { AuthContext } from '@/app/context/auth-context';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect } from 'react'
import MovimientComp from './MovimientoRecientes';
import ButtonDashCompIn from './button';
import BackBtn from "@/app/Components/BackBtn";

function CompDashboardInicio() {
    const router = useRouter();
    const authContext = useContext(AuthContext);
    const user = authContext.user;
    useEffect(() => {
      // checks if the user is authenticated
  console.log("esta aut", authContext.isUserAuthenticated())
      authContext.isUserAuthenticated()
        ? router.push("/dashboard")
        : router.push("/LoginPage");
    }, []);
  
    return (
      <div className='flex  justify-center items-center w-full   h-full relative'>
        <BackBtn ruta="/"/>
          <div className=' flex flex-col justify-evenly items-center h-full p-10 w-full '>
                  
                  <div className='bg-white  rounded-md w-full xl:max-w-[800px] lg:max-w-[708px] md:max-w-[600px] max-w-[288px] p-6 lg:h-[28rem] md:h-[24rem]   shadow-lg grid grid-flow-row items-center justify-center '>
                  <div className='text-left w-full h-fit flex flex-col justify-center gap-2 	'>
                      <h2 className='font-bold lg:text-4xl md:text-3xl  text-2xl text-Azul/900 mb-5' >Hola, {user.name}</h2>
                      <p className='font-medium lg:text-2xl text-lg text-Grises/550 first-letter:uppercase'> tu saldo de CoutryPay</p>
                    
                    <div className='flex  lg:items-end items-center  justify-start mt-5 mb-6'>
                      <p className='font-medium lg:text-8xl md:text-5xl text-2xl text-Morado/800  mr-2'> $ 40,00  </p>
                      <span className='  uppercase text-base font-semibold text-black py-2 px-4 bg-Morado/50 rounded-full shadow-md ' >usd</span>
                    </div>
                      
                  <ButtonDashCompIn/>
                  </div>
                  </div>
                <MovimientComp/>
          </div>
      </div>
    )
}

export default CompDashboardInicio