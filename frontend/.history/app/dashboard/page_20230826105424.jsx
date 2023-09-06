import React from 'react'
import ButtonDashCompIn from '../Components/DashboadComp/Inicio/button'

function DashboardPage() {
  return (
    <div className='flex justify-center items-center   h-fit'>
        <div className=' border-rose-200 grid grid-rows-2  gap-2 my-10 '>
                <div className='bg-slate-100  rounded-md w-[800px] h-[400px] shadow-lg flex justify-aruond items-center flex-col '>
                    <h2>Hola, Juan</h2>
                    <p>tu saldo de CoutryPay</p>
                    <p>$ 40,00 <span>usd</span> </p>
                <ButtonDashCompIn/>
                    
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