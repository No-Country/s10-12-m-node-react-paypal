import React, { useState } from 'react';
import ButtonDashCompTr from '../button';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import Link from 'next/link';

function ThirdView({ formData, handleButtonClick }) {
  const [selectedStar, setSelectedStar] = useState(null);

  const handleStarClick = (starId) => {
    setSelectedStar(starId);
  };

  return (
    <div className='h-full flex flex-col justify-evenly'>
      <div className='bg-white rounded-md w-full max-w-[792.97px] h-full max-h-[364px]  flex-col  shadow-lg py-24  px-28 flex justify-center items-center'>
        <h3 className='font-medium text-[32px] leading-10 text-center'>
          Has enviado <span className='text-Morado/800'>{formData.select}</span>{' '}
          <span className='uppercase'>{formData.opcion}</span> a Alejandra Ramírez
        </h3>
        <p className='my-12 text-Grises/600 opacity-70 text-xl text-center'>
          Le avisaremos a Alejandra que has realizado esta transacción
        </p>

        <div className='flex justify-evenly w-full items-center'>
          
          <ButtonDashCompTr texto={"realizar otra transferencia"} onClick={handleButtonClick}/>
          <Link href={"/dashboard/movimientos"} className='bg-Morado/700  w-full flex justify-center items-center text-white capitalize font-bold hover:bg-Morado/900 mx-2  h-14  shadow-2xl  duration-300 rounded-md'>
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
                  <AiFillStar className='text-Morado/500 text-4xl w-full h-full' />
                ) : (
                  <AiOutlineStar className='text-Morado/500 text-4xl w-full h-full' />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Link href={'/dashboard'} className='text-center font-semibold text-Azul/800 text-base'>
        Regresar a inicio
      </Link>
    </div>
  );
}

export default ThirdView;
