import { CheckIcon } from "@heroicons/react/24/outline";
import React from "react";
import Button from "../../../../Button";
import { CiFaceFrown } from "react-icons/ci";
import Link from "next/link";

function AlertSaldo({ handleButtonCloseView, handleButtonAbonarView }) {
  return (
    <article className="absolute top-0 left-0   w-full h-full   flex  items-center justify-center">
      <div className="relative flex justify-center items-center w-full h-full">
        <div className="bg-Grises/50 p-7 rounded-lg z-10 w-login shadow-lg duration-300 transition-all">
          <div className="w-full h-20 flex items-center justify-center my-4 ">
            <CiFaceFrown className="bg-Azul/800 rounded-full text-white w-full p-2  max-w-[65px] h-full max-h-[65px] animate-bounce" />
          </div>
          <div>
            <h2 className="font-bold text-Azul/800 text-2xl text-center tracking-wider">
              ¡Ups!
            </h2>
            <p className="font-medium text-lg text-center mt-2">
              No hay saldo suficiente para realizar una transferencia{" "}
            </p>
          </div>
          <div className="mt-6 w-full flex justify-center items-center">
            <span className="w-1/2 mr-4">
              <button onClick={handleButtonCloseView}  className=" text-gray-900 text-sm ml-3 font-semibold px-2 w-full py-1 sm:px-4 sm:py-2 border border-Morado/500 rounded hover:bg-purple-100 transition duration-300">Cancelar</button>
            </span>
            <span className="w-1/2">
              <Button
                text="Abonar"
                variant="filled"
                className="w-1/2"
                onClick={handleButtonAbonarView}
              />
            </span>
          </div>
        </div>
        <div className="absolute opacity-70 w-full h-full top-0 left-0 bg-Grises/600"></div>
      </div>
    </article>
  );
}

export default AlertSaldo;
