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
                </div>
        </div>
    </div>
  )
}

export default DashboardPage