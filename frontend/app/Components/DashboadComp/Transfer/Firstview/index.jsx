'use client'
import React from 'react'
import UserNameFirstView from './InpustFirsView/UserNameFirstView'
import SelectFirsView from './InpustFirsView/SelectFirsView'
import ConceptoFirstView from './InpustFirsView/ConceptoFirstView'
import ButtonDashCompTr from '../button'

function FirstViewTransfer({ formData, handleInputChange, handleButtonClick }) {
    
  return (
    <div className='bg-slate-100 rounded-md w-full max-w-[792.97px] h-[39rem] flex flex-col justify-evenly items-center shadow-lg py-8 px-40'>
                <h2 className='font-bold text-Azul/900 text-4xl text-center'>Transferencia</h2>
                <div className='w-5/6 border-2'>
                    <UserNameFirstView onUsernameChange={(newUsername) => handleInputChange('username', newUsername)} />
                    <div className='flex flex-col pt-2 w-full'>
                        <label className='first-letter:uppercase font-medium text-xl text-Azul/800' htmlFor="Monto">monto a transferir</label>
                        <SelectFirsView onSelectionChange={(newSelect) => handleInputChange('select', `${newSelect}`)} onOptionChange={(newSelect) => handleInputChange('opcion', `${newSelect}`)} />
                    </div>
                    <ConceptoFirstView onConceptoChange={(newConcept) => handleInputChange('concept', newConcept)} />
                </div>
                <div className='w-full flex justify-center'>
                    <ButtonDashCompTr onClick={handleButtonClick} texto="confirmar" />
                </div>
            </div>
  )
}

export default FirstViewTransfer