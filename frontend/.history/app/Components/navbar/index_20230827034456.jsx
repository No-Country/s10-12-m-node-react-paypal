'use client'
import LogoPortalProps from "@/public/logos/Logo-CPweb"
import Image from "next/image"
import Link from "next/link"
import { useState} from "react"
import { FaBars} from "react-icons/fa"
import { HiOutlineX } from "react-icons/hi"

export function NavBar(){
    const [navbar, setNavbar] = useState(false);

    return(

        <div className="flex w-full h-14 lg:h-24 ">
            <nav className="bg-Morado/50 flex w-full lg:h-24 ">
                
                <div className=" flex w-1/3 h-full items-center justify-center lg:w-1/3 m-0  ">
                    <Link href={"/"}>
                        <LogoPortalProps  className="w-24 h-4 p-2 lg:w-64 lg:h-12"/>
                    </Link>
                </div>

                <div className=" w-1/3 h-full invisible flex lg:visible lg:items-center lg:justify-center lg:w-1/3   ">   
                    <ul className="flex space-x-10">
                        <li> 
                            <Link href="/#caracteristicas"onClick={()=> setNavbar(!navbar)}>Características</Link>
                        </li>
                        <li>
                            <Link href="/#about" onClick={()=> setNavbar(!navbar)}>Sobre nosotros</Link>   
                        </li>
                    </ul>
                </div>

                <div className="hidden lg:block my-auto mx-auto  justify-end items-center ">
                    <button className="bg-Morado/700 lg:w-32 lg:h-12 rounded-md text-white whitespace-nowrap text-center ">
                        Iniciar sesión
                    </button>
                </div>

                <div className="p-4 w-1/3 h-full flex justify-end items-center lg:invisible visibility:visible lg:w-1">
                    <button className=" w-6 h-4 " onClick={()=> setNavbar(!navbar)}>
                        {navbar? (
                            <HiOutlineX />
                            ) : (
                            <FaBars />
                            )
	                     }
                    </button>
                </div>
                

            </nav>
        </div>
    )
}

{/* <Link href="#caracteristicas"onClick={()=> setNavbar(!navbar)}>Características</Link>
                    <Link href="#about" onClick={()=> setNavbar(!navbar)}>Sobre nosotros</Link> */}