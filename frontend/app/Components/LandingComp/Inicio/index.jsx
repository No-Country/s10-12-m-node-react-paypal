import Link from "next/link";



export default function InicioComp() {
  return(
    <section className="Inicio w-full  h-[665px]   bg-InicioPagePng bg-cover   flex flex-col justify-center  px-10 ">
    <div className="w-[488px]"> 
<h1 className="font-bold text-6xl leading-[4.9rem] capitalize text-Grises/50 ">countrypay</h1>  
<p className="text-2xl text-Grises/50 my-6 ">Tu forma segura y sencilla de transferir dinero</p>
<div className=" flex justify-start items-center w-full">
    <Link href={"/"} className="w-[143px] h-[48px] rounded-md flex justify-center items-center mr-2 text-Grises/100 bg-Morado/600 hover:bg-Azul/600 duration-700" >Registrarme</Link >
    <Link href={"/loginPage"} className="w-[143px] h-[48px] rounded-md flex justify-center items-center text-Grises/100 hover:bg-Morado/600 bg-Azul/600 duration-700" >Iniciar Sesion</Link >
</div>
</div>
</section>
  )
}