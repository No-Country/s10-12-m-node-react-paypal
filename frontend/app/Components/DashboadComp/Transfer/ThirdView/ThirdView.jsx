import React, { useState } from 'react';
import ButtonDashCompTr from '../button';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import Link from 'next/link';

function ThirdView({ formData, handleButtonClick, userdata }) {
  const [selectedStar, setSelectedStar] = useState(null);
  
  const user1 = userdata ? userdata.user : {};

  const handleStarClick = (starId) => {
    setSelectedStar(starId);
  };

  return (
    <div className='h-full flex flex-col justify-evenly'>
      <div className='bg-white rounded-md w-full max-w-[792.97px] h-full max-h-[364px]  flex-col  shadow-lg py-24  lg:px-28 md:px-24 px-16 flex justify-center items-center'>
        <h3 className='font-medium md:text-[32px] text-2xl leading-10 text-center'>
          
          Se ha enviado el dinero a <span className='capitalize'> {user1.name}</span>
        </h3>
        <p className='lg:my-12 md:my-6 my-4 text-Grises/600 opacity-70 text-xl text-center'>
          Le avisaremos a {user1.name} que has realizado esta transacción
        </p>

        <div className='flex justify-evenly w-full items-center'>
          
          <ButtonDashCompTr texto={"realizar otra transferencia"} onClick={handleButtonClick} className=" hover:bg-Morado/900 w-20 "/>
          <Link href={"/dashboard/movimientos"} className='bg-Morado/700 hover:bg-Morado/900  w-full flex justify-center md:text-base text-sm  items-center text-white capitalize font-bold mx-2  h-14  shadow-2xl  duration-300 rounded-md'>
          ver movimientos
          </Link>
        </div>
      </div>
      <div className='h-full my-10'>
        <h4 className='text-2xl text-center leading-8 font-normal'>¿Qué tal fue tu experiencia?</h4>
        <div className='w-full flex justify-center items-center'>
          <ul className='flex justify-around w-1/3 mt-2'>
            {[1, 2, 3, 4, 5].map((starId) => (
              <li
                key={starId}
                className='w-fit h-fit flex justify-center items-center'
                onClick={() => handleStarClick(starId)}
              >
                {starId <= selectedStar ? (
                  <AiFillStar className='text-Morado/500 text-4xl w-full h-full cursor-pointer' />
                ) : (
                  <AiOutlineStar className='text-Morado/500 text-4xl w-full h-full cursor-pointer' />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='w-full flex justify-center items-center'>
      <Link href={'/dashboard'} className='text-center font-semibold text-Azul/800 text-base  w-fit border-2 p-3 border-transparent hover:border-Azul/900 duration-200 rounded-full'>

        Regresar a inicio
      </Link>

      </div>
    </div>
  );
}

export default ThirdView;
