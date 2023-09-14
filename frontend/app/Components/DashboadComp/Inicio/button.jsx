'use client'
import Link from 'next/link'
import React, {useState} from 'react'
import AlertSaldo from '@/app/Components/SingUpComponents/cards/Alert/Fail/AlertSaldo';
import { useRouter } from "next/navigation";

function ButtonDashCompIn({balance}) {
  const [showInsufficientBalanceModal, setShowInsufficientBalanceModal] = useState(false);
  const router = useRouter();
  const handleButtonCloseView = ()=>{
    setShowInsufficientBalanceModal(false)
  } 
  const handleButtonAbonarView = ()=>{
    setShowInsufficientBalanceModal(false)
    router.push('dashboard/abonar')
  }
  const handleTransferClick = () => {
    if (balance <= 0) {
      // El saldo es insuficiente, muestra el modal
      setShowInsufficientBalanceModal(true);
    } else {
      // El saldo es suficiente, redirige a la funcionalidad de transferencia
      router.push('/dashboard/transfer'); 
    }
  };

  return (
    <div className='w-full h-14 flex justify-evenly items-center '>
        <button className='bg-Morado/700 hover:bg-Morado/900 duration-300 mx-2 lg:w-[17.5rem] md:w-[14rem] w-[6rem] h-14 rounded-md shadow-lg '>
        <Link href={"/dashboard/abonar"} className=' hover:opacity-50 duration-300 uppercase text-white lg:text-base md:text-sm text-xs   '>
            abonar
        </Link >
        </button>
        <button onClick={handleTransferClick} className='bg-Morado/700 hover:bg-Morado/900 duration-300 mx-2 lg:w-[17.5rem] md:w-[14rem] w-[6rem]  h-14 rounded-md shadow-lg uppercase text-white lg:text-base md:text-sm text-xs'>
        {/* <Link className=' hover:opacity-50 duration-300 uppercase text-white lg:text-base md:text-sm text-xs  '> */}
            transferir
        {/* </Link > */}
        </button>
        {showInsufficientBalanceModal && (
          <AlertSaldo handleButtonCloseView={handleButtonCloseView} handleButtonAbonarView={handleButtonAbonarView}/>
        )}
    </div>
  )
}


export default ButtonDashCompIn