import React from "react";
import Image from "next/image";
import Button from "@/app/Components/Button";
import qrImg from "@/public/images/qr.png";

function QR() {
  return (
    <div className="w-full h-full  flex justify-center items-center">
      <div className="text-center px-14 py-12 w-11/12 sm:w-5/6 md:w-4/6 lg:w-3/6 xl:w-3/6 mt-10 mb-10 md:mt-10 md:mb-10  border-rose-200 bg-white shadow-lg rounded-md ">
        {/* Título */}
        <div className="flex flex-col mb-8 items-center justify-center">
          <h2 className="font-bold mb-8 text-3xl md:text-4xl  text-Azul/900">
            Código QR
          </h2>
          <Image
            src={qrImg}
            alt="qr"
            width={""}
            height={""}
            className="w-232 h-232"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="text-[14px] md:text-[20px] font-light mb-10">
            Muestra este código a los establecimientos autorizados para realizar
            un abono a tu cuenta.
          </div>
          <div className="w-1/2 ">
            <Button variant="filled" text="Finalizar" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QR;
