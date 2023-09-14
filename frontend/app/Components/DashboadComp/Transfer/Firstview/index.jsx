import React, { useState, useEffect, useContext } from 'react';
import UserNameFirstView from './InpustFirsView/UserNameFirstView';
import SelectFirsView from './InpustFirsView/SelectFirsView';
import ConceptoFirstView from './InpustFirsView/ConceptoFirstView';
import ButtonDashCompTr from '../button';
import { AuthContext } from '@/app/context/auth-context';

function FirstViewTransfer({ formData, handleInputChange, handleButtonClick, updateFormData }) {
  
  const [isNicknameConfirmed, setIsNicknameConfirmed] = useState(false);
  const authContext = useContext(AuthContext);
  const user = authContext.user;



  return (
    <div className='bg-[#fff] rounded-md w-full max-w-[792.97px] h-[39rem] flex flex-col justify-evenly items-center shadow-lg lg:py-8 py-2  lg:px-40 md:px-30 px-15'>
      <h2 className='font-bold text-Azul/900 text-4xl text-center'>Transferencia</h2>
      <form className='lg:w-5/6 md:w-2/3 w-3/4'>
        <UserNameFirstView
          formData={formData}
          onUsernameChange={(newUsername) => handleInputChange('nickName', newUsername)}
        />
        <div className='flex flex-col pt-2 w-full'>
          <label className='first-letter:uppercase font-medium text-xl text-Azul/800' htmlFor='Monto'>
            monto a transferir
          </label>
          <SelectFirsView
            formData={formData}
            onSelectionChange={(newSelect) => handleInputChange('amount', `${newSelect}`)}
            onOptionChange={(newSelect) => handleInputChange('opcion', `${newSelect}`)}
          />
        </div>
        <ConceptoFirstView formData={formData} onConceptoChange={(newConcept) => handleInputChange('concept', newConcept)} />
      </form>
      <div className='w-full flex justify-center'>
        <ButtonDashCompTr onClick={handleButtonClick} texto='confirmar' disabled={!isNicknameConfirmed} />
      </div>
    </div>
    
  );
}

export { FirstViewTransfer};
