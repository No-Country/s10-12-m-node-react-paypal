'use client'
import React from "react";

export function MobileMenu({ navbar, NavLinksMobile, isUserAuthenticated }) {
  return (
    <div
      id="menu"
      className={`${
        navbar ? "p-10 block transition-all " : "hidden"
      } absolute z-50 top-14 md:right-14 right-1 transform translate-x-1  rounded-md  shadow-2xl bg-white lg:hidden transition-all ${isUserAuthenticated ? "py-10" : "py-4 flex flex-col justify-center items-center "}`}
    >
      {NavLinksMobile}
    </div>
  );
}

