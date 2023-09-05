'use client'
import Image from "next/image";
import React from "react";
import Button from "../../Button";
import Link from "next/link";
import { HiOutlinePlusCircle } from "react-icons/hi";
import WalletCardImg from "@/public/images/walletCard";
import BackBtn from "@/app/Components/BackBtn";

const WalletCard = ({ amount }) => {
  const handleTrans = () => {
    console.log("Saldo transferido");
  };

  return (
    <div className="flex relative flex-col w-3/4 md:w-1/2  bg-white rounded-xl pt-6  justify-center items-center shadow-gray-400 shadow-lg">
      <BackBtn />
      <div className="h-full py-10 ">
        
        <h2 className="font-bold text-4xl text-Azul/900">Cartera</h2>
      </div>
      <div className="w-fit  relative">
       
       <WalletCardImg className="w-full  relative" />
    

      
       <p className="absolute top-2/4 left-8  mt-4  z-10 text-2xl text-white">0-0000-0000-000</p>
      </div>

      <Link
        href={""}
        className="text-blue-800 font-semibold mr-20 mb-10 self-end mt-2 border-2  hover:border-Azul/600 rounded-3xl hover:border-2 py-2 px-6"
      >
        <HiOutlinePlusCircle size={24} className="inline mr-2" /> Nueva Tarjeta
      </Link>

      <div className="flex flex-row w-full justify-around items-center pt-14 pb-28 border-t-2 border-gray-400">
        <div className="flex flex-col justify-center items-center gap-1 md:gap-4">
          <h3 className="text-lg md:text-xl font-semibold">
            Saldo de CountryPay
          </h3>
          <p className="text-xl md:text-6xl font-semibold">$ {amount}</p>
        </div>
        <div>
          <Button
            text="Transferir saldo"
            variant="filled"
            onClick={handleTrans}
            type={"button"}
          />
        </div>
      </div>
    </div>
  );
};

export default WalletCard;
