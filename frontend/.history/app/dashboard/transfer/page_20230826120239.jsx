import ButtonDashCompIn from '@/app/Components/DashboadComp/Inicio/button'
import React from 'react'

function TransferPage() {
  return (
    <div className=' border-rose-200  flex  gap-4 my-10 justify-center items-center  '>
                
    <div className='bg-slate-100  rounded-md w-[54rem]  h-[26rem]  shadow-lg grid grid-flow-row items-center justify-center '>
    <div className='text-left w-full h-fit flex flex-col justify-center gap-2	'>
        <h2 className='font-bold text-4xl text-Azul/900 mb-5' >Hola, Juan</h2>
        <p className='font-medium text-2xl text-Grises/550 first-letter:uppercase'> tu saldo de CoutryPay</p>
      
      <div className='flex w-full items-end justify-start mt-5 mb-6'>
        <p className='font-medium text-8xl text-Morado/800 '> $ 40,00  </p>
        <span className='  uppercase text-base font-semibold text-black py-2 px-4 bg-Morado/50 rounded-md' >usd</span>
      </div>
        
    <ButtonDashCompIn/>
    </div>
    </div>
    </div>
  )
}

export default TransferPage