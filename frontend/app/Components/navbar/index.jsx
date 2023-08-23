import Image from "next/image";
import Link from "next/link";

export function NavBar() {
  return (
    <div className="bg-Morado/50 w-full h-24 flex items-center ">
      <div className="basis-1/3 place-content-center p-12">
        <Link href={"/"}>
        <Image src="/logos/Logo-CPweb.svg" width={255.64} height={46} />
        </Link>
      </div>
      <div className="basis-1/3 space-x-10 text-base place-content-center">
        <a src="/pages/index.js">Sobre nosotros</a>
        <a src="/pages/cartera.js">Características</a>
      </div>
      <div className="flex basis-1/3 place-content-center">
        <Link href="/loginPage">
          <button className=" bg-Morado/700 w-34 h-12 rounded-md py-3.5 px-7 flex items-center justify-center text-white ">
            Iniciar sesión
          </button>
        </Link>
      </div>
    </div>
  );
}
