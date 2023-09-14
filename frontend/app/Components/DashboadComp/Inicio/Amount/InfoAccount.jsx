'use client'
import React from 'react'
import { useCompDashboardInicioState } from '../UserAu';
import ButtonDashCompIn from '../button';


function InfoAccount() {
const { text } = useCompDashboardInicioState();

  return (
   
    <h2 className='font-bold lg:text-4xl md:text-3xl  text-2xl text-Azul/900 mb-5 capitalize' >  {text}    </h2>
   
  )
}

export default InfoAccount