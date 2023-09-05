import React from 'react'
import LogoCountryPay from '@/public/logos/logoCountryPay';
import { BsShop } from 'react-icons/bs';
import ButtonDashCompTr from '../button';

function SecondView({formData, handleButtonClick, handleButtonSecondClick}) {
  return (
    <div className='grid grid-rows-2 grid-flow-row justify-center items-center '>
    <div className='bg-white rounded-md w-full lg:max-w-[799px] h-full lg:max-h-[302px] max-h-[245px] flex flex-col justify-evenly items-center shadow-lg  lg:px-20 px-5 text-center  '>
      <section className='flex flex-col justify-evenly  h-2/3 w-full lg:p-10 p-5'>
        <div className='h-full flex w-full lg:justify-start justify-center items-center m-4'>
          <div className='w-[80px] flex justify-center items-center h-[70px]  mr-2 rounded-full bg-Morado/700 text-white font-bold'>J</div>
          <div className=' flex flex-col lg:w-full w-1/3 justify-center h-full  lg:items-center items-start'>
            {/* Aquí se esperaría respuesta del back */}
            <h3 className='capitalize  text-Grises/600 lg:font-medium font-bold tracking-wide lg:text-4xl text-base '>alejandra ramírez</h3>
            <h4 className='text-xl text-Grises/600 opacity-70'>{formData.username}</h4>
          </div>
        </div>
        <div className='flex justify-center items-end h-full'>
          <p className='font-medium lg:text-7xl md:text-5xl text-4xl mr-4 text-Morado/800'> {formData.select}</p> <p className='py-2 px-4 gap-2 bg-Morado/50 h-9 w-16 flex justify-center items-center rounded-3xl shadow-md text-Grises/600 font-semibold uppercase'>{formData.opcion}</p>
        </div>
      </section>
    </div>
    <div className='bg-white rounded-md w-full max-w-[792.97px] h-full flex flex-col justify-evenly items-start  shadow-lg  lg:py-12  py-8 lg:px-10 px-6'>
      <div className='flex w-full justify-start h-fit  items-center py-2  '>
          <div className='w-14 h-full rounded-[10px] shadow-md shadow-[#F3E8FF] mr-4 flex justify-center items-center'>
        <LogoCountryPay className="w-6" />

          </div>
        <h2 className='font-semibold text-2xl text-Azul/900'>Método de pago</h2>
      </div>
      <div className='py-2'>
        <select name="name" id="" className='text-Grises/600 bg-transparent'>
          <option value="SUSD">Saldo de CountryPay (USD)</option>
        </select>
      </div>
      <section className='my-4'>
        <div className='flex justify-left items-center py-2'>
          <BsShop className='mr-2 text-Azul/900 text-2xl' />
          <h3 className='font-semibold text-xl text-Azul/900 leading-7'>Pago de productos y servicios </h3>
        </div>
        <p className='w-[656px] mt-2 pb-8 border-b-Grises/300 border-b-2 '>
          Obtenga un reembolso completo si un artículo que reúne los requisitos se pierde o está dañado. El vendedor paga una pequeña comisión.
        </p>

        <div className='w-full flex justify-between items-center my-5'>
          <p className='font-medium text-xl text-Grises/600'>Comisión de CountryPay</p>
          <p className='font-medium text-xl  text-Grises/600'>$ 00,00</p>
        </div>
        <div className='w-full flex justify-between items-center my-5 text-Morado/800 font-bold'>
          <p className=' text-xl capitalize '>total</p>
          <p className=' text-xl  '>{formData.select}</p>
        </div>
        <ButtonDashCompTr texto="volver" onClick={handleButtonClick} />
        <ButtonDashCompTr texto="enviar" onClick={handleButtonSecondClick} />
      </section>
    </div>
  </div>
  )
}

export default SecondView