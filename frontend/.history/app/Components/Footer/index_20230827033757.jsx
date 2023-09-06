import Link from "next/link";
import Image from "next/image";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { BiLogoInstagram, BiLogoLinkedinSquare } from "react-icons/bi";

const FOOTERLINKS = [
  {
    label: "Inicio",
    route: "/",
  },
  {
    label: "Caracteristicas",
    route: "/feature",
  },
  {
    label: "Sobre Nosotros",
    route: "/aboutUs",
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
      <div className="w-full flex justify-around items-center">
        <div className="xl:w-1/3 w-full  p-0 xl:p-12">
          <Link href={"/"}>
            <Image alt="contry-pay" src="/logos/Logo-CPweb.svg" width="w-[3rem]" height={46} />
          </Link>
        </div>
        <div className="w-full">
          <div className="w-full flex flex-col items-center justify-evenly">
            <ul className="capitalize flex justify-around items-center w-1/2">
              {FOOTERLINKS.map(({ label, route }) => (
                <li key={route}>
                  <Link href={route} className="hover:text-Morado/400 duration-500">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="flex items-center w-1/3 text-Grises/500 relative top-6">
              <AiOutlineCopyrightCircle className="mr-2" /> 2022 Bonnie Hong. All Rights Reserved.
            </p>
          </div>
        </div>
        <div className="w-1/4 flex items-center justify-evenly">
          <span className="w-full h-full flex justify-center items-center">
            <BiLogoInstagram className="w-[40px] h-[40px] hover:text-Morado/500 transition-colors duration-500 cursor-pointer" />
          </span>
          <span className="w-full h-full flex justify-center items-center">
            <BiLogoLinkedinSquare className="w-[40px] h-[40px] hover:text-Morado/500 transition-colors duration-500 cursor-pointer" />
          </span>
        </div>
      </div>
    </div>
  );
}
