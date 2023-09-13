import Button from '@/app/Components/Button'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'


function ConfirmDelete () {
    const  handleLogout = () => {
        if (typeof window !== 'undefined') {
          // Limpiar el token y la información del usuario del almacenamiento local
          window.location.href = "/"; 
    
          localStorage.removeItem("token");
          localStorage.removeItem("user");
    
          // Cerrar la sesión en el contexto de autenticación
          authContext.logout();
          setTimeout(() => {
            window.location.reload();
          }, 1000)
        }
      };
    
  return (
    <article className='absolute top-0 left-0   w-full h-full   flex  items-center justify-center'>
        <div className='relative flex justify-center items-center w-full h-full'>
            <div className="bg-Grises/50 p-7 rounded-lg z-10 w-login shadow-lg mt-16 duration-300 transition-all">
                <div className='w-full h-20 flex items-center justify-center my-4 '>
                    <CheckCircleIcon className="bg-Green/400  rounded-full text-white w-full p-2  max-w-[65px] h-full max-h-[65px] animate-bounce"/>
                </div>
                <div>
                    <h2 className='font-bold text-Azul/800 text-2xl text-center tracking-wider'>Cuenta eliminada</h2>
                    <p className='font-medium text-lg text-center mt-2'>Su cuenta ha sido eliminada con éxito.</p>
                </div>
                <div className='mt-6 w-full flex justify-evenly items-center'>
                    <span className='flex justify-evenly items-center space-x-4'>
                        <Button text="Salir"  variant="filled" onClick={handleLogout}/> 
                    </span>
                </div>
            </div>
            <div className='absolute opacity-70 w-full h-full top-0 left-0 bg-Grises/600'></div>
        </div>
    </article>
  )
}

export default ConfirmDelete