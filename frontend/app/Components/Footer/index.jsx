import Link from "next/link";
import Image from "next/image";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { BiLogoInstagram, BiLogoLinkedinSquare } from "react-icons/bi";
import LogoPortalProps from "@/public/logos/Logo-CPweb";


const FOOTERLINKS = [
  {
    label: "Inicio",
    route: "/#inicio",
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
  },
];

export function FooterComp() {
  return ( 
    <div className="w-full h-full relative bottom-0">
      <div className="w-full flex md:justify-around items-center md:flex-row flex-col justify-center py-10 ">
        <div className="md:w-1/3 flex justify-center items-center  w-full  p-4 md:p-0">
          <Link href={"/"}>
            <LogoPortalProps className="xl:w-[20rem] lg:[18rem] md:[15rem] w-[10rem] h-fit  text-xl"   />
          </Link>
        </div>
       
          <div className="w-full flex items-center h-full justify-center md:p-0 p-10">
            <ul className="capitalize flex justify-around items-center  xl:w-2/3 flex-row md:text-base text-xs  w-full">
              {FOOTERLINKS.map(({ label, route }) => (
                <li key={route} className="flex justify-center items-end break-after-auto p-2 ">
                  <Link href={route} className="hover:text-Morado/400 duration-300">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
           
          </div>
       
        <div className="md:w-1/4 w-1/2 h-full flex items-center justify-evenly">
          <span className="w-full h-full flex justify-center items-center">
            <BiLogoInstagram className="w-[40px] h-[40px] hover:text-Morado/500 transition-colors duration-500 cursor-pointer" />
          </span>
          <span className="w-full h-full flex justify-center items-center">
            <BiLogoLinkedinSquare className="w-[40px] h-[40px] hover:text-Morado/500 transition-colors duration-500 cursor-pointer" />
          </span>
        </div>
        <p className="flex items-center w-full justify-center text-Grises/500 absolute bottom-0 mt-10">
              <AiOutlineCopyrightCircle className="mr-2" /> 2022 Bonnie Hong. All Rights Reserved.
            </p>
      </div>
    </div>
  );
}
