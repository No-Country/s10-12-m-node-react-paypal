import React from 'react'
import ButtonDashCompIn from '../Components/DashboadComp/Inicio/button'

function DashboardPage() {
  return (
    <div className='h-fit'>
        <div className='flex justify-center items-center border-rose-200'>
                <div>
                    <h2>Hola, Juan</h2>
                    <p>tu saldo de CoutryPay</p>
                    <p>$ 40,00 <span>usd</span> </p>
                <ButtonDashCompIn/>
                    
                </div>
                <div>
                    <h3>movimientos recientes</h3>
                    <div>
                        <h4 className='capitalize'> maria alejandra suarez</h4>
                        <span>20 ago</span> <ul><li className='list-disc'>Dinero enviado</li></ul>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default DashboardPage