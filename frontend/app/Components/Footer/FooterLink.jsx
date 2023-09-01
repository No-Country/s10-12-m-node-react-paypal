'use client'
import { AuthContext } from '@/app/context/auth-context';
import Link from 'next/link';
import React, { useContext } from 'react'


const FOOTERLINKSLOGIN = [
    {
      label: "Inicio",
      route: "/",
    },
    {
      label: "Caracteristicas",
      route: "/#caracteristicas",
    },
    {
      label: "Sobre Nosotros",
      route: "/#about",
    },
    {
      label: "Terminos",
      route: "/terms",
    },
    {
      label: "Privacidad",
      route: "/privacy",
    }
  ];
  const FOOTERLINKSNOLOGIN = [
  
    {
      label: "Sobre Nosotros",
      route: "/#about",
    },
    {
      label: "Terminos",
      route: "/terms",
    },
    {
      label: "Privacidad",
      route: "/privacy",
    },
  ];
function FooterLink() {
    const authContext = useContext(AuthContext);
    const isUserAuthenticated = authContext.isUserAuthenticated();
  return (
    <ul className="capitalize flex justify-around items-center  xl:w-2/3 flex-row md:text-base text-xs  w-full">
    {isUserAuthenticated
      ? FOOTERLINKSNOLOGIN.map(({ label, route }) => (
          <li key={route} className="flex justify-center items-end break-after-auto p-2 ">
            <Link href={route} className="hover:text-Morado/400 duration-300">
              {label}
            </Link>
          </li>
        ))
      : FOOTERLINKSLOGIN.map(({ label, route }) => (
          <li key={route} className="flex justify-center items-end break-after-auto p-2 ">
            <Link href={route} className="hover:text-Morado/400 duration-300">
              {label}
            </Link>
          </li>
        ))}

    </ul>

  )
}

export default FooterLink