'use client'
import Link from "next/link";
import { useState, useContext } from "react";
import { FaBars } from "react-icons/fa";
import { HiOutlineX } from "react-icons/hi";
import LogoPortalProps from "@/public/logos/Logo-CPweb";
import React from "react";
import { UserIcon } from "@heroicons/react/24/outline";
import { NavLinks } from "./funciones/NavLinks";
import { MobileMenu } from "./funciones/MobileMenu";
import { NavLinksMobile } from "./funciones/NavLinksMobile";
import { useClient } from "./Estados/useClient";
import { useAuth } from "./Estados/useAuth";




export function NavBar() {
  const { authContext, isUserAuthenticated } = useAuth(); 
  const { navbar, dropdown, setNavbar, setDropDown, toggleDesplegable, toggleNavbar , handleLogout } = useClient();


  return (
    <header className="flex w-full h-14 lg:h-24 lg:py-0 py-10">
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
                  className="p-1 ml-2 lg:w-64 lg:h-12 w-30 h-10"
                />
              </Link>
            </div>
            <div className=" relative w-1/3 h-full invisible flex lg:visible lg:items-center lg:justify-end lg:w-1/2">
              <NavLinks isUserAuthenticated={isUserAuthenticated} navbar={MobileMenu} />
              <button className="w-12 h-12 border-2 border-transparent hover:border-Morado/700 duration-200 rounded-full lg:block hidden  hover:text-Morado/700 hover:bg-Grises/100 " onClick={toggleDesplegable}>
                <UserIcon className="p-2 duration-300"/>
              </button>
              {dropdown &&(
                <div className="w-full rounded-[10px] shadow-md max-w-[196px] h-full  absolute right-[-20px] top-[5.86rem]  bg-[#fefeff] flex flex-col justify-evenly items-left  z-10 ">
                  <ul className="h-full flex flex-col justify-evenly items-center relative">
                    <li className="bg-white flex  rounded-t-[10px] items-center p-2  shadow-md hover:bg-Grises/150 duration-300 cursor-pointer  z-10  h-full w-full ">
                      <Link className="text-Grises/350 opacity-100 font-medium  w-full text-left" href="/dashboard/Perfil" onClick={toggleDesplegable}>Perfil</Link>
                    </li>
                    <li className="bg-white relative flex items-center  rounded-b-[10px] p-2 text-Morado/700 cursor-pointer shadow-md hover:bg-Grises/150 duration-300 z-10  h-full w-full ">
                      <button  className="font-semibold  w-full text-left  " onClick={handleLogout}>Cerrar Sesión</button>
                    </li>
                  </ul>
                  <span className="absolute w-10 h-10 bg-white shadow-md top-[-20px] right-[1.41rem] rotate-45 rounded-tl-md   "></span>
                </div>
              )}
            </div>
            <div className=" w-1/3 h-full flex justify-center items-center lg:invisible visibility:visible lg:w-1">
              <button className="w-fit h-fit" onClick={() => setNavbar(!navbar)}>
                {navbar ? <HiOutlineX  className="w-full text-2xl h-full" /> : <FaBars className="w-full text-2xl h-full"  />}
              </button>
            </div>
            <MobileMenu navbar={navbar} isUserAuthenticated={isUserAuthenticated} NavLinksMobile={<NavLinksMobile isUserAuthenticated={isUserAuthenticated} handleLogout={handleLogout} />} />
          </>
        ) : (
          <>
            <div className="flex w-1/3 h-full items-center justify-center lg:w-1/3 m-0 ml-2">
              <Link href={"/"}>
                <LogoPortalProps
                    src="/logos/Logo-CPweb.svg"
                    width={256}
                    height={48}
                    layout="responsive"
                    className="p-1 ml-2 lg:w-64 lg:h-12 w-30 h-10"
                />
              </Link>
            </div>
            <div className="w-1/3 h-full invisible flex lg:visible lg:items-center lg:justify-center lg:w-1/3">
              <NavLinks isUserAuthenticated={isUserAuthenticated} navbar={MobileMenu} />
            </div>
            <div className="hidden lg:block my-auto mx-auto justify-end items-center ">
              <Link href="./LoginPage">
                <button className="bg-Morado/700 lg:w-32 lg:h-12 rounded-md text-white whitespace-nowrap text-center ">
                  Iniciar sesión
                </button>
              </Link>
            </div>
            <MobileMenu navbar={navbar} isUserAuthenticated={isUserAuthenticated} NavLinksMobile={<NavLinksMobile isUserAuthenticated={isUserAuthenticated} handleLogout={handleLogout} />} />
            <div className="  w-1/3 h-full flex justify-center items-center lg:invisible visibility:visible lg:w-1">
              <button className="w-fit h-fit" onClick={() => setNavbar(!navbar)}>
                {navbar ? <HiOutlineX  className="w-full text-2xl h-full" /> : <FaBars className="w-full  text-2xl h-full" />}
              </button>
            </div>
          </>
        )}
      </nav>
    </header>
  );
}
