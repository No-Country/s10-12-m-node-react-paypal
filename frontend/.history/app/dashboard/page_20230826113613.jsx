import React from 'react'
import ButtonDashCompIn from '../Components/DashboadComp/Inicio/button'

function DashboardPage() {
  return (
    <div className='flex justify-center items-center   h-fit'>
        <div className=' border-rose-200 grid grid-rows-2  gap-4 my-10 '>
                
                <div className='bg-slate-100  rounded-md w-[800px]  h-[26rem]  shadow-lg grid grid-flow-row items-center justify-center '>
                <div className='text-left w-full h-1/2 flex flex-col justify-center gap-2	'>
                    <h2 className='font-bold text-4xl text-Azul/900 mb-5' >Hola, Juan</h2>
                    <p className='font-medium text-2xl text-Grises/550 first-letter:uppercase'> tu saldo de CoutryPay</p>
                  
                  <div className='flex w-full items-end justify-start mt-5 mb-6'>
                    <p className='font-medium text-8xl text-Morado/800 '> $ 40,00  </p>
                    <span className='  uppercase text-base font-semibold text-black py-2 px-4 bg-Morado/50 rounded-md' >usd</span>
                  </div>
                    
                
                <ButtonDashCompIn/>
                </div>
                </div>
                <div className='bg-slate-100  rounded-md w-[800px] h-[26rem]  shadow-lg   flex justify-center items-center  '>
                   <div className='flex flex-col h-2/3 w-3/4 justify-between items-start'>
                    <h3 className='text-2xl font-medium text-Grises/600 first-letter:uppercase text-center'>movimientos recientes</h3>
                    <div className='flex justify-between items-center w-full border-2' >
                        <div className='flex justify-start items-center w-full'>

                        <div className='w-[3.6rem] h-14 rounded-full bg-Morado/700 flex justify-center items-center mr-2'>
                            <span className='text-2xl uppercase text-white'>j</span>
                        </div>
                        <div className=''>

                        <h4 className='capitalize'> maria alejandra suarez</h4>
                        <div className='flex justify-center items-center'>
                        <span>20 ago</span> <ul><li className='list-disc'>Dinero enviado</li></ul>

                        </div>
                        </div>
                        </div>
                        <div>
                            <span>-$20,00</span>
                        </div>
                    </div>
                    <p>mostrar todos</p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default DashboardPage