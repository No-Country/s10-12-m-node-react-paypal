"use client";
import Image from "next/image";
import React, {useContext, useEffect} from "react";
import { AuthContext } from "../../../context/auth-context";
import Button from "../../Button";
import Link from "next/link";
import { HiOutlinePlusCircle } from "react-icons/hi";
import WalletCardImg from "@/public/images/walletCard";
import BackBtn from "@/app/Components/BackBtn";
import { useRouter } from 'next/navigation';

const WalletCard = ({ amount }) => {
  const router = useRouter();
  const authContext = useContext(AuthContext);
  const handleTrans = () => {
    router.push("/dashboard/transfer");
    console.log("Saldo transferido");
  };

  useEffect(() => {
    // checks if the user is authenticated
    authContext.isUserAuthenticated()
      ? router.push("/dashboard/wallet")
      : router.push("/");
  }, []);

  return (
    <div className="flex relative md:min-h-screen justify-center items-start py-14">
      <BackBtn />
      <div className="flex flex-col md:pl-12 md:pr-12 w-3/4 md:w-1/2  md:bg-white rounded-xl pt-6  justify-center items-center md:shadow-gray-400 md:shadow-lg">
        <div className="h-full py-5 md:py-10 hidden md:block">
          <h2 className="font-bold text-3xl md:text-4xl  text-Azul/900 mb-5">
            Cartera
          </h2>
        </div>
        <div className="w-fit relative max-h-[fit-content]">
          <WalletCardImg className="w-full h-auto relative" />

          <p className="absolute top-2/4 left-8  mt-4  z-10 text-2xl text-white">
            0-0000-0000-000
          </p>
        </div>

        <Link
          href={"/dashboard/abonar/vincularTarjeta"}
          className="text-blue-800 font-semibold mr-20 mb-10 mt-10 self-end  px-6 hidden md:block"
        >
          <HiOutlinePlusCircle size={24} className="inline mr-2" /> Nueva
          Tarjeta
        </Link>

        <div className="flex flex-col w-full md:flex-row justify-center items-center gap-4 md:gap-24 md:gap-x-26 md:gap-y-4 mt-8 md:mt-0 pt-8 md:pt-14 md:pb-14 border-t-2 border-gray-400">
          <div className="text-left md:w-1/3">
            <h3 className="text-lg md:text-xl ">Saldo de CountryPay</h3>
            <p className="text-3xl md:text-5xl md:mt-4 font-semibold">
              $ {amount}
            </p>
          </div>
          <div className="text-center md:w-1/3">
            <Button
              text="Transferir saldo"
              variant="filled"
              onClick={handleTrans}
              type={"button"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletCard;
