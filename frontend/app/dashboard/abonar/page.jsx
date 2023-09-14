"use client";
import React, {useContext, useEffect} from "react";
import { useRouter } from 'next/navigation';
import { AuthContext } from "../../context/auth-context";
import Card from "@/app/Components/DashboadComp/Abonar/Card";
import { CreditCardIcon } from "@heroicons/react/24/outline";
import { QrCodeIcon } from "@heroicons/react/24/outline";
import BackBtn from "@/app/Components/BackBtn";


function Abonar() {
  const router = useRouter();
  const authContext = useContext(AuthContext);
  const handleQRClick = () => {
    //console.log("Botón Código QR clickeado");
    router.push('/dashboard/abonar/codigoQR');
  };

  const handleTarjetaClick = () => {
    //console.log("Botón Vincular tarjeta clickeado");
    router.push('/dashboard/abonar/vincularTarjeta');
  };
  
  useEffect(() => {
    // checks if the user is authenticated
    authContext.isUserAuthenticated()
      ? router.push("/dashboard/abonar")
      : router.push("/");
  }, []);

  
  
  return (
    <div className="w-full h-full  flex justify-center relative">
      <BackBtn />
      <div className="px-4 sm:px-14 py-12  md:w-4/6 lg:w-3/6 xl:w-3/6 mt-10 mb-10 border-rose-200 bg-slate-100 shadow-lg rounded-md">
      {/* <div className="text-center px-14 py-12 w-11/12 sm:w-5/6 md:w-4/6 lg:w-3/6 xl:w-3/6 mt-10 mb-10 md:mt-20 md:mb-20  border-rose-200 bg-white shadow-lg rounded-md"> */}
        {/* Título */}
        <h2 className="font-bold text-3xl md:text-4xl flex justify-center items-center text-Azul/900 mb-5">
          Abonar a cuenta
        </h2>

        {/* Contenedor principal */}
        <div className="flex flex-col items-center md:flex-row md:justify-center md:mt-14">
          {/* Código QR */}
          <Card
            icon={<QrCodeIcon className="h-full w-full text-Azul/800" />}
            buttonText="Código QR"
            onClick={handleQRClick}
          />

          {/* Vincular tarjeta */}
          <Card
            icon={<CreditCardIcon className="h-full w-full text-Azul/800" />}
            buttonText="Vincular tarjeta"
            onClick={handleTarjetaClick}
          />
        </div>
      </div>
    </div>
  );
}

export default Abonar;
