import Link from "next/link";



export default function AboutUsComp() {
  return(
    <section id="about" className="AboutUs w-full h-[560.46px]  border-2 flex justify-center items-center bg-Morado/R200">
    <div className=" flex justify-center items-center m-auto "> 
<div>
    <img src="https://res.cloudinary.com/dhb9rdaoc/image/upload/v1692846188/bvggzs6850dkbzjuazh1.jpg" alt=""  className="w-[590px] h-[400.46px] rounded-md shadow-md"/>
</div>
<article className="ml-4 flex flex-col justify-center items-start h-full">
    <h2 className="text-Azul/800 text-5xl">Sobre nosotros</h2>
    <div className="w-[590px] h-[252px] text-Grises/600 text-xl">
        <p className="my-4">Nacimos con una misión clara: facilitar el acceso de los jóvenes a servicios financieros seguros y simples. Inspirados por nuestras propias experiencias, creamos esta plataforma para eliminar las complicaciones de las transferencias de dinero tradicionales. 

</p>
<p>
Ofrecemos una solución moderna, sin la necesidad de cuentas bancarias, y así empoderar a la generación que está dando sus primeros pasos en el mundo financiero.
</p>
    </div>
</article>
</div>
</section>
  )
}