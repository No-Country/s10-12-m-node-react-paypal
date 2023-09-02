"use client";
import React from "react";
import { useRouter } from 'next/navigation';
import Card from "@/app/Components/DashboadComp/Abonar/Card";
import { CreditCardIcon } from "@heroicons/react/24/outline";
import { QrCodeIcon } from "@heroicons/react/24/outline";

function Abonar() {
  const router = useRouter();

  const handleQRClick = () => {
    console.log("Botón Código QR clickeado");
    router.push('/dashboard/abonar/codigoQR');
  };

  const handleTarjetaClick = () => {
    console.log("Botón Vincular tarjeta clickeado");
  };
  
  return (
    <div className="w-full h-full  flex justify-center ">
      <div className="text-center px-14 py-12 w-11/12 sm:w-5/6 md:w-4/6 lg:w-3/6 xl:w-3/6 mt-10 mb-10 md:mt-20 md:mb-20  border-rose-200 bg-white shadow-lg rounded-md">
        {/* Título */}
        <h2 className="font-bold text-3xl md:text-4xl  text-Azul/900 mb-5">
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