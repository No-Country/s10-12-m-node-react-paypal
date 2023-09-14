
import Link from "next/link";

export default function ButtonChangePass( ) {
    return (
        <Link href="./password">
            <button className=" bg-Azul/700 w-41 h-10 rounded-md md:py-3.5 px-7 flex items-center justify-center text-white my-5 whitespace-nowrap">Cambiar contraseña</button>
        </Link>
    );
  }