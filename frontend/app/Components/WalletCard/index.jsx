import Image from "next/image";
import React from "react";
import cardImg from "../../../public/images/walletCard.png";
import Button from "../Button";
import Link from "next/link";
import { HiOutlinePlusCircle } from "react-icons/hi";

const WalletCard = ({ amount }) => {
  const handleTrans = () => {
    console.log("Saldo transferido");
  };

  return (
    <div className="flex flex-col w-3/4 md:w-1/2  bg-white rounded-xl pt-6  justify-center items-center shadow-gray-400 shadow-lg">
      <div className="w-5/6">
        <Image
          src={cardImg}
          alt="photo"
          width={""}
          height={""}
          className="w-full h-full"
        />
      </div>

      <Link
        href={""}
        className="text-blue-800 font-semibold mr-20 mb-10 self-end"
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
