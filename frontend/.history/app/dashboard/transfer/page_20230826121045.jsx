import ButtonDashCompIn from '@/app/Components/DashboadComp/Inicio/button'
import React from 'react'

function TransferPage() {
  return (
    <div className=' border-rose-200  flex min-h-screen  gap-4 my-10 justify-center items-center  '>
                
    <div className='bg-slate-100  rounded-md w-[54rem]  h-[30rem]  shadow-lg grid grid-flow-row items-center justify-center '>
    <div className='text-left w-full h-fit flex flex-col justify-center gap-6	'>
        <div className='flex justify-center items-center'>

            <div className='' >
                <span className='bg-Morado/900 w-[4.4rem] h-16 text-white flex justify-center items-center rounded-full' > j </span>
            </div>
            <div className='flex justify-center items-start flex-col ml-4 '>
        <h2 className=' text-black text-3xl  font-medium capitalize' >alejandra ramírez</h2>
        <p className='font-light text-xl text-black '> @alejandraramirez2112</p>

            </div>

        </div>
      
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