import Button from '@/app/Components/Button'
import { ExclamationCircleIcon } from '@heroicons/react/24/outline'
import React, {useState} from 'react'
import ConfirmDelete from './ConfirmDelete'

function AlertDeleteAccount({handleViewDeleteAccountClose}) {
    const [viewConfirmDelete, setViewConfirmDelete] = useState(false)

    const handleViewConfirmDelete = ()=>{
        setViewConfirmDelete(true)
        console.log('confirmar')
    }
    const handleViewConfirmDeleteClose = ()=>{
        setViewConfirmDelete(false)
        console.log('cerrar')
    }

    return (
    <article className='absolute top-0 left-0   w-full h-full   flex  items-center justify-center'>
        <div className='relative flex justify-center items-center w-full h-full'>

            <div className="bg-Grises/50 p-7 rounded-lg z-10 w-login shadow-lg mt-16 duration-300 transition-all">
                <div className='w-full h-20 flex items-center justify-center my-4 '>
                <ExclamationCircleIcon className="bg-Rojo/500  rounded-full text-white w-full p-2  max-w-[65px] h-full max-h-[65px] animate-bounce"/>
            </div>
            <div>
                <h2 className='font-bold text-Azul/800 text-2xl text-center tracking-wider'>Eliminar cuenta</h2>
                <p className='font-medium text-lg text-center mt-2'>Todos los datos almacenados a tu nombre se eliminaran de manera permanente.</p>

            </div>
            <div className='mt-6 w-full flex justify-evenly items-center'>
                <span className='flex justify-evenly items-center space-x-4'>
                    <Button text="Cancelar"  variant="empty" className="mr-2"   onClick={handleViewDeleteAccountClose}  />
                    <Button text="Confirmar"  variant="filled"   onClick={handleViewConfirmDelete}  />
                    { viewConfirmDelete ? ( <ConfirmDelete handleViewConfirmDelete={handleViewConfirmDelete} handleViewConfirmDeleteClose={handleViewConfirmDeleteClose}/> ) : ("")}
                </span>
            </div>

        </div>
        <div className='absolute opacity-70 w-full h-full top-0 left-0 bg-Grises/600'></div>
        </div>
    </article>
    )
    }

export default AlertDeleteAccount