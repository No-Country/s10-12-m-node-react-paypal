'use client'
import React from "react";
import Link from "next/link";

export function NavLinks({ isUserAuthenticated, navbar }) {
    return (
      <>
        {isUserAuthenticated ? (
          <ul className={`${ navbar ? "lg:flex lg:flex-row hidden lg:justify-evenly lg:items-center w-full" : "flex lg:flex-row flex-col justify-evenly items-start w-full" }`}>
            <li className={navbar ? "" : "w-full my-2"}>
              <Link href="/dashboard" className={`${ navbar  ? ("font-semibold text-Azul/800 border-b-2 border-transparent hover:border-b-Azul/600 duration-300") : "w-full text-left  text-Grises/500 font-semibold hover:text-Grises/600 duration-200" }`}>Home</Link>
            </li>
            <li className={navbar ? "" : "w-full my-2"}>
              <Link href="/dashboard/wallet" className={`${ navbar  ? "font-semibold text-Azul/800 border-b-2 border-transparent hover:border-b-Azul/600 duration-300" : "w-full text-left  text-Grises/500 font-semibold hover:text-Grises/600 duration-200" }`}>Cartera</Link>
            </li>
            <li className={navbar ? "" : "w-full my-2"}>
              <Link href="/dashboard/movimientos" className={`${ navbar  ? "font-semibold text-Azul/800 border-b-2 border-transparent hover:border-b-Azul/600 duration-300" : "w-full text-left  text-Grises/500 font-semibold hover:text-Grises/600 duration-200" }`}>Movimientos</Link>
            </li>
          </ul>
        ) : (
          <ul className={`${ navbar ? "lg:flex lg:space-x-10 lg:flex-row lg:justify-evenly h-full hidden lg:items-center": "flex lg:space-x-10 lg:flex-row flex-col justify-evenly h-full items-center"}`}>
            <li>
              <Link className={`${ navbar  ? "font-semibold text-Azul/800 border-b-2 border-transparent hover:border-b-Azul/600 duration-300" : "w-full text-left  text-Grises/500 font-semibold hover:text-Grises/600 duration-200" }`} href="/#caracteristicas">Características</Link>
            </li>
            <li>
              <Link className={`${ navbar  ? "font-semibold text-Azul/800 border-b-2 border-transparent hover:border-b-Azul/600 duration-300" : "w-full text-left  text-Grises/500 font-semibold hover:text-Grises/600 duration-200" }`} href="/#about">Sobre nosotros</Link>
            </li>
          </ul>
        )}
      </>
    );
  }