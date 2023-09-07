'use client'
import React, { useState } from 'react';

import FirstViewTransfer from './Firstview';
import { useForm } from './Firstview/data';
import { BsShop } from "react-icons/bs"
import ButtonDashCompTr from './button';
import { AiOutlineStar } from 'react-icons/ai';
import Link from 'next/link';
import SecondView from './SecondView/SecondView';
import ThirdView from './ThirdView/ThirdView';
import BackBtn from "@/app/Components/BackBtn";

function TransferComp() {
  const [firstviewtr, setFirstViewTr] = useState(true);
  const [secondviewTr, setSecondViewTr] = useState(false);
  const [showResultView, setShowResultView] = useState(false);
  const { formData, handleInputChange } = useForm();

  function handleButtonClick() {
    setFirstViewTr(!firstviewtr);
    setSecondViewTr(true);
  }

  function handleButtonSecondClick() {
    setSecondViewTr(!secondviewTr);
    setFirstViewTr(false);
    setShowResultView(true);
  }


  
  return (
    <div className='w-full flex h-full p-10 my-10 justify-center items-center relative'>
      <BackBtn />
      {firstviewtr ? (
        <FirstViewTransfer
          formData={formData}
          handleInputChange={handleInputChange}
          handleButtonClick={handleButtonClick}
        />
      ) : secondviewTr ? (
        // <div className='grid grid-rows-2 justify-center items-center '>
        //   <div className='bg-white rounded-md w-full max-w-[799px] h-full max-h-[302px] flex flex-col justify-evenly items-center shadow-lg py-2 px-20 '>
        //     <section className='flex flex-col justify-evenly h-2/3 w-full p-10'>
        //       <div className='h-full flex w-fit'>
        //         <div className='w-[80px] flex justify-center items-center h-[70px] relative mr-2 rounded-full bg-Morado/700 text-white font-bold'>J</div>
        //         <div className=' flex flex-col w-full justify-center '>
        //           {/* Aquí se esperaría respuesta del back */}
        //           <h3 className='capitalize  text-Grises/600 font-medium text-4xl'>alejandra ramírez</h3>
        //           <h4 className='text-xl text-Grises/600 opacity-70'>{formData.username}</h4>
        //         </div>
        //       </div>
        //       <div className='flex justify-center items-end h-full'>
        //         <p className='font-medium text-7xl text-Morado/800'> {formData.select}</p> <p className='py-2 px-4 gap-2 bg-Morado/50 h-9 w-16 flex justify-center items-center rounded-3xl shadow-md text-Grises/600 font-semibold uppercase'>{formData.opcion}</p>
        //       </div>
        //     </section>
        //   </div>
        //   <div className='bg-white rounded-md w-full max-w-[792.97px] h-full flex flex-col justify-evenly items-start  shadow-lg py-12  px-10'>
        //     <div className='flex w-full justify-start h-fit  items-center py-2  '>
        //         <div className='w-14 h-full rounded-[10px] shadow-md shadow-[#F3E8FF] mr-4 flex justify-center items-center'>
        //       <LogoCountryPay className="w-6" />

        //         </div>
        //       <h2 className='font-semibold text-2xl text-Azul/900'>Método de pago</h2>
        //     </div>
        //     <div className='py-2'>
        //       <select name="name" id="" className='text-Grises/600 bg-transparent'>
        //         <option value="SUSD">Saldo de CountryPay (USD)</option>
        //       </select>
        //     </div>
        //     <section className='my-4'>
        //       <div className='flex justify-left items-center py-2'>
        //         <BsShop className='mr-2 text-Azul/900 text-2xl' />
        //         <h3 className='font-semibold text-xl text-Azul/900 leading-7'>Pago de productos y servicios </h3>
        //       </div>
        //       <p className='w-[656px] mt-2 pb-8 border-b-Grises/300 border-b-2 '>
        //         Obtenga un reembolso completo si un artículo que reúne los requisitos se pierde o está dañado. El vendedor paga una pequeña comisión.
        //       </p>

        //       <div className='w-full flex justify-between items-center my-5'>
        //         <p className='font-medium text-xl text-Grises/600'>Comisión de CountryPay</p>
        //         <p className='font-medium text-xl  text-Grises/600'>$ 00,00</p>
        //       </div>
        //       <div className='w-full flex justify-between items-center my-5 text-Morado/800 font-bold'>
        //         <p className=' text-xl capitalize '>total</p>
        //         <p className=' text-xl  '>{formData.select}</p>
        //       </div>
        //       <ButtonDashCompTr texto="volver" onClick={handleButtonClick} />
        //       <ButtonDashCompTr texto="enviar" onClick={handleButtonSecondClick} />
        //     </section>
        //   </div>
        // </div>
        <SecondView formData={formData}
                      handleButtonClick={handleButtonClick}
                      handleButtonSecondClick={handleButtonSecondClick}
        />
      ) : (
        <ThirdView formData={formData} handleButtonClick={handleButtonClick}/>
      )}
    </div>
  );
}

export default TransferComp;
