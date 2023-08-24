'use client'
import Image from "next/image"
import Link from "next/link"
import { useState} from "react"
import {RxHamburgerMenu} from 'react-icons/fa'

export function NavBar(){
    const [navbar, setNavbar] = useState(false);

    return(
        <div>
            <nav className="bg-Morado/50 w-full h-24 flex items-center ">
                <div className="basis-1/3 place-content-center">
                    <Link href={"/"}>
                    <Image src="/logos/Logo-CPweb.svg" width={255.64} height={46} />
                    </Link>
                </div>
                <div className="basis-1/3 space-x-10 text-base place-content-center lg:items-center lg:w-auto">   
                    <Link href="/pages/index.js" onClick={()=> setNavbar(!navbar)}>Sobre nosotros</Link>
                    <Link href="/pages/cartera.js"onClick={()=> setNavbar(!navbar)}>Características</Link>
                </div>
                <div className="flex basis-1/3 place-content-center">
                    <button className=" bg-Morado/700 w-32 h-12 rounded-md py-3.5 px-7 flex items-center justify-center text-white ">Iniciar sesión</button>
                </div>
                <div className="md:hidden">
                    <button className="p-2 text-black rounded-md outline-none focus:border-gray-400" onClick={()=> setNavbar(!navbar)}>
                        {/* {navbar? (
                            <RxHamburgerMenu width={30} height={30} />
                        ):(
                            <RxHamburgerMenu width={30} height={30} className="focus: border-none active:border-none" />
                        )} */}
                    </button>
                </div>
            </nav>
        </div>
    )
}
