'use client'
import React from "react";
import Link from "next/link";
import { NavLinks } from "./NavLinks";

export function NavLinksMobile({ isUserAuthenticated, handleLogout }) {
  return (
    <ul className="flex flex-col justify-evenly items-start h-[8rem] text-left w-full">
      <NavLinks isUserAuthenticated={isUserAuthenticated} />
      {isUserAuthenticated ? (
        <>
          <li className="w-full my-2">
            <Link href="/dashboard/Perfil" className=" w-full text-left  text-Grises/500 font-semibold hover:text-Grises/600 duration-200   capitalize">perfil</Link>
          </li>
          <li className="w-full my-2">
            <button href="/dashboard/movimientos" className=" w-full text-left  text-Grises/500 font-semibold hover:text-Grises/600 duration-200  " onClick={handleLogout}>Cerrar Sesión</button>
          </li>
        </>
      ) : (
        <li>
          <Link href="/LoginPage" className="w-full text-left  text-Grises/500 font-semibold hover:text-Grises/600 duration-200 ">Iniciar Sesión</Link>
        </li>
      )}
    </ul> 
  );
}


