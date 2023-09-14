"use client";
import React, {useContext} from "react";
import MovimientComp from "./MovimientoRecientes";
import ButtonDashCompIn from "./button";
import BackBtn from "@/app/Components/BackBtn";
import InfoAccount from "./Amount/InfoAccount";
import InfoSaldo from "./Amount/InfoSaldo";
import CrearCuenta from "../api/CrearAccount";
import { AuthContext } from '@/app/context/auth-context';

function CompDashboardInicio() {
  const authContext = useContext(AuthContext);
  const balance = authContext.user?.Account?.balance;
  CrearCuenta();

  return (
    <div className="flex  justify-center items-center w-full   h-full relative">
      <BackBtn ruta="/" />
      <div className=" flex flex-col justify-evenly items-center h-full p-10 w-full ">
        <div className="bg-white  rounded-md w-full xl:max-w-[800px] lg:max-w-[708px] md:max-w-[600px] max-w-[288px] p-6 lg:h-[28rem] md:h-[24rem]   shadow-lg grid grid-flow-row md:items-center justify-center ">
          <div className="text-left w-full h-fit flex flex-col justify-center  gap-2 	">
            <InfoAccount />
            <p className="font-medium lg:text-2xl text-lg text-Grises/550 first-letter:uppercase">
              {" "}
              tu saldo de CoutryPay
            </p>

            <InfoSaldo balance={balance}/>
            <ButtonDashCompIn balance={balance}/>
          </div>
        </div>
        <MovimientComp />
      </div>
    </div>
  );
}

export default CompDashboardInicio;
