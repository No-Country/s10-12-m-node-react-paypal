'use client'
import Link from "next/link";
import { useState, useContext } from "react";
import { FaBars } from "react-icons/fa";
import { HiOutlineX } from "react-icons/hi";
import LogoPortalProps from "@/public/logos/Logo-CPweb";
import React from "react";
import { AuthContext } from "/app/context/auth-context.js";

export function NavBar() {
  const authContext = useContext(AuthContext);
  const isUserAuthenticated = authContext.isUserAuthenticated();

  const [navbar, setNavbar] = useState(false);

  const NavLinks = (
    <ul className="flex flex-col space-y-2 lg:space-x-10">
      <li>
        <Link href="/dashboard">Home</Link>
      </li>
      <li>
        <Link href="/dashboard/wallet">Cartera</Link>
      </li>
      <li>
        <Link href="/dashboard/movimientos">Movimientos</Link>
      </li>
      <li>
        <Link href="/Perfil">Perfil</Link>
      </li>
      <li>
        <Link href="/">Cerrar Sesión</Link>
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
    <div className="flex w-full h-14 lg:h-24">
      <nav className="bg-Morado/50 flex w-full lg:h-24">
        {isUserAuthenticated ? (
          <>
            <div className="flex w-1/3 h-full items-center justify-center lg:w-1/3 m-0 ml-2">
              <Link href={"/dashboard"}>
                <LogoPortalProps
                  src="/logos/Logo-CPweb.svg"
                  width={256}
                  height={48}
                  layout="responsive"
                  className="p-1 ml-2 lg:w-64 lg:h-12"
                />
              </Link>
            </div>
            <div className="w-1/3 h-full invisible flex lg:visible lg:items-center lg:justify-end lg:w-1/2">
              {NavLinks}
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
                  <Link href="/#caracteristicas">Características</Link>
                </li>
                <li>
                  <Link href="/#about">Sobre nosotros</Link>
                </li>
              </ul>
            </div>
            <div className="hidden lg:block my-auto mx-auto justify-end items-center ">
              <Link href="./loginPage">
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
    </div>
  );
}


