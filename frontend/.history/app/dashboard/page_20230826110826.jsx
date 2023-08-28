import React from 'react'
import ButtonDashCompIn from '../Components/DashboadComp/Inicio/button'

function DashboardPage() {
  return (
    <div className='flex justify-center items-center   h-fit'>
        <div className=' border-rose-200 grid grid-rows-2  gap-2 my-10 '>
                
                <div className='bg-slate-100  rounded-md w-[800px] h-[400px] shadow-lg grid grid-flow-row items-center justify-center '>
                <div className='text-left w-full h-1/2 flex flex-col justify-center gap-2	'>
                    <h2 className='font-bold text-4xl text-Azul/900' >Hola, Juan</h2>
                    <p className='font-medium text-2xl text-Grises/550 first-letter:uppercase'> tu saldo de CoutryPay</p>
                  
                  <div className='flex w-full items-end justify-start my-auto'>
                    <p className='font-medium text-8xl text-Morado/800 '> $ 40,00  </p>
                    <span className='  uppercase text-base font-semibold text-black py-2 px-4 bg-Morado/50 rounded-md' >usd</span>
                  </div>
                    
                
                <ButtonDashCompIn/>
                </div>
                </div>
                <div className='bg-slate-100  rounded-md w-[800px] h-[400px] shadow-lg flex justify-between items-center flex-col '>
                    <h3>movimientos recientes</h3>
                    <div>
                        <div>

                        <h4 className='capitalize'> maria alejandra suarez</h4>
                        <span>20 ago</span> <ul><li className='list-disc'>Dinero enviado</li></ul>
                        </div>
                        <div>
                            <span>-$20,00</span>
                        </div>
                    </div>
                    <p>mostrar todos</p>
                </div>
        </div>
    </div>
  )
}

export default DashboardPage