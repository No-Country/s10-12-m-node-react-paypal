'use client'
import { useContext } from "react";
import Link from "next/link";
import { AuthContext } from "../../../context/auth-context";

export default function InicioComp() {
  
  const authContext = useContext(AuthContext);
  const isUserAuthenticated = authContext.isUserAuthenticated();
  return (
    <section className="Inicio w-full  h-[665px]   md:bg-InicioPagePng bg-[#38353D] bg-cover  bg-center  flex md:flex-col justify-center  items-left  md:px-10  ">
      <div className="md:w-[488px] w-full relative">
        <div className="w-full h-[238.23px] bg-InicioPagePng bg-cover bg-center md:hidden"></div>
        <div className="w-full h-[100px] relative top-[-4.5rem] z-1 bg-gradient-to-t  from-[#38353D] via-[#4A4747] to-transparent md:hidden"></div>

        <div className="md:px-0 px-10">
          <h1 className="font-bold xl:text-6xl   text-4xl leading-[4.9rem] capitalize text-Grises/50 ">
            countrypay
          </h1>
          <p className="md:text-2xl text-xl text-Grises/50 my-6 ">
            Tu forma segura y sencilla de transferir dinero
          </p>

          <div className=" flex justify-start items-center w-full">
            <Link
              href={"/Signup"}
              className="w-[143px] h-[48px] rounded-md flex justify-center items-center mr-2 text-Grises/100 bg-Morado/700 hover:bg-Morado/800 duration-300  font-semibold"
            >
              Registrarme
            </Link>
            <Link
              href={isUserAuthenticated ? '/dashboard' : '/loginPage'}
              className="w-[143px] h-[48px] rounded-md flex justify-center items-center text-Grises/100 hover:bg-Azul/100 hover:text-Azul/900 duration-300 font-semibold"
            >
              Iniciar Sesion
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
