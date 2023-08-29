'use client'
import React, {useContext, useEffect} from 'react'
import ButtonDashCompIn from '../Components/DashboadComp/Inicio/button'
import { useRouter } from 'next/navigation';
import MovimientComp from '../Components/LandingComp/Inicio/MovimientoRecientes';
import { AuthContext } from "../context/auth-context";

function DashboardPage() {
  const router = useRouter();
  const authContext = useContext(AuthContext);
  // const { user } = useaAuth(); // Obtén el estado de autenticación desde tu contexto o hook

  // useEffect(() => {
  //   if (!user) {
  //     router.push('/login'); // Redirige a la página de inicio de sesión si el usuario no está autenticado
  //   }
  // }, [user]);
  useEffect(() => {
    // checks if the user is authenticated
    authContext.isUserAuthenticated()
      ? router.push("/dashboard")
      : router.push("/loginPage");
  }, []);

  return (
    <div className='flex justify-center items-center   h-fit'>
        <div className=' border-rose-200 grid grid-rows-2  gap-4 my-10  '>
                
                <div className='bg-slate-100  rounded-md w-[54rem]  h-[26rem]  shadow-lg grid grid-flow-row items-center justify-center '>
                <div className='text-left w-full h-fit flex flex-col justify-center gap-2	'>
                    <h2 className='font-bold text-4xl text-Azul/900 mb-5' >Hola, Juan</h2>
                    <p className='font-medium text-2xl text-Grises/550 first-letter:uppercase'> tu saldo de CoutryPay</p>
                  
                  <div className='flex w-full items-end justify-start mt-5 mb-6'>
                    <p className='font-medium text-8xl text-Morado/800 '> $ 40,00  </p>
                    <span className='  uppercase text-base font-semibold text-black py-2 px-4 bg-Morado/50 rounded-md' >usd</span>
                  </div>
                    
                <ButtonDashCompIn/>
                </div>
                </div>
              <MovimientComp/>
        </div>
    </div>
  )
}

export default DashboardPage