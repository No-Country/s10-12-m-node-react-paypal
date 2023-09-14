'use client'
import React, { useContext, useEffect } from 'react';
import LogoCountryPay from '@/public/logos/logoCountryPay';
import { BsShop } from 'react-icons/bs';
import ButtonDashCompTr from '../button';
import { AuthContext } from '@/app/context/auth-context';
import Link from 'next/link';
import TransferApi from '../../api/TransfertoApi';

function SecondView({ formData, handleButtonClick, handleButtonSecondClick, updateFormData, userdata }) {
  const user1 = userdata ? userdata.user : {};

  const authContext = useContext(AuthContext);
  const user = authContext.user;
  const token = localStorage.getItem("token");
  const handleSubmit = async (event) => {
    event.preventDefault(); // Evita que se envíe el formulario automáticamente
  
    try {
      // Llamada a la función TransferApi
      await TransferApi(token, formData, updateFormData, authContext);
  
      handleButtonSecondClick();
    } catch (error) {
      console.error("Error al realizar la transferencia:", error);
    }
  };
  



  return (
    <form onSubmit={handleSubmit}>
      <div className='bg-white rounded-md w-full max-w-[799px] h-full max-h-[302px] flex flex-col justify-center items-center shadow-lg my-2 lg:px-20 md:px-10 px-5 py-10 text-center'>
        <section className='flex flex-col justify-evenly h-2/3 w-full max-w-[799px] items-center'>
          <div className='h-full flex w-full  justify-center items-center  '>
            <div className='w-fit h-full'>
              <span className="lg:w-[5rem]  w-[4rem]  flex justify-center items-center lg:h-[5rem] h-[4rem]  mr-2 rounded-full  text-white font-bold">
               {userdata ? <img src={user1.avatar} alt={user1.name}/> :  ""}
              </span>
            </div>
            <div className='flex flex-col w-fit justify-center h-full items-start md:my-0 my-4'>
              <h3 className='capitalize text-Grises/600 lg:font-medium font-bold tracking-wide lg:text-4xl md:text-2xl text-xl text-left'>
              {userdata ? user1.name : 'No Hay Usuario Valido'}
              </h3>
          
                <h4 className='text-xl text-Grises/600 opacity-70'> @{userdata ? user1.nickName : ''}</h4>
           
            </div>
          </div>
          <div className='flex justify-center items-end h-full'>
            <p className='font-medium lg:text-5xl md:text-4xl text-2xl mr-4 text-Morado/800'> { userdata ? `$${formData.amount} `: ""}</p>
            <p className={userdata ? 'py-2 px-4 gap-2 bg-Morado/50 h-9 w-16 flex justify-center items-center rounded-3xl shadow-md text-Grises/600 font-semibold uppercase'  : 'hidden'}>{formData.opcion}</p>
          </div>
        </section>
      </div>
      <div className='bg-white rounded-md w-full max-w-[799px]  h-full flex flex-col justify-evenly items-start  shadow-lg  lg:py-12  py-8 lg:px-10 px-6'>
        <div className='flex w-full justify-start h-fit  items-center py-2  '>
          <div className='w-14 h-full rounded-[10px] shadow-md shadow-[#F3E8FF] mr-4 flex justify-center items-center'>
            <LogoCountryPay className="w-6"  />
          </div>
          <h2 className='font-semibold text-2xl text-Azul/900'>Método de pago</h2>
        </div>
        <div className='py-2 w-fit'>
          <select name="name" id="" className='text-Grises/600 bg-transparent w-fit text-sm'>
            <option value="SUSD">Saldo de CountryPay (USD)</option>
          </select>
        </div>
        <section className='my-4'>
          <div className='flex justify-left items-center py-2'>
            <BsShop className='mr-2 text-Azul/900 text-2xl' />
            <h3 className='font-semibold text-xl text-Azul/900 leading-7'>Pago de productos y servicios </h3>
          </div>
          <p className='w-full mt-2 pb-8 border-b-Grises/300 border-b-2 '>
            Obtenga un reembolso completo si un artículo que reúne los requisitos se pierde o está dañado. El vendedor paga una pequeña comisión.
          </p>
          <div className='w-full flex justify-between items-center my-5'>
            <p className='font-medium md:text-xl text-[14px] text-Grises/600'>Comisión de CountryPay</p>
            <p className='font-medium md:text-xl  text-base text-Grises/600'>$ 00,00</p>
          </div>
          <div className='w-full flex justify-between items-center my-5 text-Morado/800 font-bold'>
            <p className=' md:text-xl text-[14px] capitalize '>total</p>
            <p className=' md:text-xl text-base  '>$ {formData.amount}</p>
          </div>
          { userdata ?  <ButtonDashCompTr texto="enviar" type="submit"   /> : <Link href={"/"} className="uppercase text-Morado/600 hover:underline duration-200 "> No se puede Realizar Su Transferencia</Link> }
         
        </section>
      </div>
    </form>
  );
}

export default SecondView;
