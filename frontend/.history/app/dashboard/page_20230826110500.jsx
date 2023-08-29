import React from 'react'
import ButtonDashCompIn from '../Components/DashboadComp/Inicio/button'

function DashboardPage() {
  return (
    <div className='flex justify-center items-center   h-fit'>
        <div className=' border-rose-200 grid grid-rows-2  gap-2 my-10 '>
                
                <div className='bg-slate-100  rounded-md w-[800px] h-[400px] shadow-lg flex justify-center  items-center flex-col '>
                <div className='text-left w-1/2 h-1/2 flex flex-col justify-center'>
                    <h2 className='font-bold text-4xl text-Azul/900' >Hola, Juan</h2>
                    <p className='font-medium text-2xl text-Grises/550 first-letter:uppercase'> tu saldo de CoutryPay</p>
                  
                    
                    <p className='font-medium text-8xl text-Morado/800 '> $ 40,00 <span className='  uppercase text-base font-semibold text-black py-2 px-4 bg-Morado/50 rounded-md' >usd</span> </p>
                
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