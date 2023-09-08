'use client'
import Link from "next/link";
import { useState, useContext } from "react";
import { FaBars } from "react-icons/fa";
import { HiOutlineX } from "react-icons/hi";
import LogoPortalProps from "@/public/logos/Logo-CPweb";
import React from "react";
import { AuthContext } from "/app/context/auth-context.js";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { UserIcon } from "@heroicons/react/24/outline";

export function NavBar() {
  const authContext = useContext(AuthContext);
  const isUserAuthenticated = authContext.isUserAuthenticated();
  const user = authContext.user;
  const  handleLogout = () => {
    if (typeof window !== 'undefined') {
      // Limpiar el token y la información del usuario del almacenamiento local
      window.location.href = "/"; 

      localStorage.removeItem("token");
      localStorage.removeItem("user");

      // Cerrar la sesión en el contexto de autenticación
      authContext.logout();
      setTimeout(() => {
        window.location.reload();
      }, 1000)
    }
  };
  const [navbar, setNavbar] = useState(false);
  const [dropdown, setDropDown] = useState(false)

  const toggleDesplegable = () => {
    setDropDown(!dropdown);
  };
  const img = `${isUserAuthenticated ? `${user.avatar}` : "" }`

  const NavLinks = (
    <ul className="flex lg:flex-row flex-col justify-evenly items-center  w-full">
      <li>
        <Link href="/dashboard" className="font-semibold text-Azul/800 border-b-2 border-transparent hover:border-b-Azul/600 duration-300">Home</Link>
      </li>
      <li>
        <Link href="/dashboard/wallet" className="font-semibold text-Azul/800 border-b-2 border-transparent hover:border-b-Azul/600 duration-300">Cartera</Link>
      </li>
      <li>
        <Link href="/dashboard/movimientos" className="font-semibold text-Azul/800 border-b-2 border-transparent hover:border-b-Azul/600 duration-300">Movimientos</Link>
      </li>
    
    </ul>
  );

  const MobileMenu = (
    <div
      id="menu"
      className={`${
        navbar ? "p-12 block" : "hidden"
      } absolute z-50 top-10 right-2 transform translate-x-1 border-2 rounded-md p-8 bg-Grises/100 lg:hidden`}
    >
      {NavLinks}
    </div>
  );

  return (
    <header className="flex w-full h-14 lg:h-24">
      <nav className="bg-Morado/50 flex w-full lg:h-24">
        {isUserAuthenticated ? (
          <>
            <div className="flex w-1/3 h-full items-center justify-center lg:w-1/3 m-0 ml-2">
              <Link href={"/"}>
                <LogoPortalProps
                  src="/logos/Logo-CPweb.svg"
                  width={256}
                  height={48}
                  layout="responsive"
                  className="p-1 ml-2 lg:w-64 lg:h-12"
                />
              </Link>
            </div>
            <div className=" relative w-1/3 h-full invisible flex lg:visible lg:items-center lg:justify-end lg:w-1/2">
              {NavLinks}
              
              <button className="w-12 h-12 border-2 border-transparent hover:border-Morado/700 duration-200 rounded-full  hover:text-Morado/700 hover:bg-Grises/150 " onClick={toggleDesplegable}>
              <UserIcon className="p-2 duration-300"/>
              </button>
              {dropdown &&(
                
                <ul className="w-full rounded-[10px] shadow-md max-w-[196px] h-full absolute right-0 top-[5.86rem] bg-[#F5F7FD] flex flex-col justify-evenly items-left  ">
                  <li className="bg-white flex items-center p-2  shadow-md hover:bg-Grises/200 duration-300 cursor-pointer  h-full w-full">
        <Link className="text-Grises/350 opacity-60 font-medium z-10 w-full text-left" href="/Perfil" >Perfil</Link>
      </li>
      <li className="bg-Grises/100 flex items-center p-2 text-Morado/700 cursor-pointer shadow-md hover:bg-Grises/200 duration-300   h-full w-full">
        <button  className="font-semibold cursor-pointer w-full text-left z-10 " onClick={handleLogout}>Cerrar Sesión</button>
      </li>
                </ul>
              ) 

              }
            </div>
            <div className="p-4 w-1/3 h-full flex justify-end items-center lg:invisible visibility:visible lg:w-1">
              <button className="w-6 h-4" onClick={() => setNavbar(!navbar)}>
                {navbar ? <HiOutlineX /> : <FaBars />}
              </button>
            </div>
            {MobileMenu}
          </>
        ) : (
          <>
            <div className="flex w-1/3 h-full items-center justify-center lg:w-1/3 m-0 ml-2">
              <Link href={"/"}>
                <LogoPortalProps
                  src="/logos/Logo-CPweb.svg"
                  className="w-24 h-full p-1 ml-2 lg:w-64 lg:h-12"
                />
              </Link>
            </div>
            <div className="w-1/3 h-full invisible flex lg:visible lg:items-center lg:justify-center lg:w-1/3">
              <ul className="flex space-x-10">
                <li>
                  <Link className="font-semibold text-Azul/800 border-b-2 border-transparent hover:border-b-Azul/600 duration-300" href="/#caracteristicas">Características</Link>
                </li>
                <li>
                  <Link className="font-semibold text-Azul/800 border-b-2 border-transparent hover:border-b-Azul/600 duration-300" href="/#about">Sobre nosotros</Link>
                </li>
              </ul>
            </div>
            <div className="hidden lg:block my-auto mx-auto justify-end items-center ">
              <Link href="./LoginPage">
                <button className="bg-Morado/700 lg:w-32 lg:h-12 rounded-md text-white whitespace-nowrap text-center ">
                  Iniciar sesión
                </button>
              </Link>
            </div>
            {MobileMenu}
            <div className="p-4 w-1/3 h-full flex justify-end items-center lg:invisible visibility:visible lg:w-1">
              <button className="w-6 h-4" onClick={() => setNavbar(!navbar)}>
                {navbar ? <HiOutlineX /> : <FaBars />}
              </button>
            </div>
          </>
        )}
      </nav>
    </header>
  );
} 