import Link from "next/link";



export default function AboutUsComp() {
  return(
    <section id="about" className="AboutUs w-full h-fit py-10 border-2 flex justify-center items-center  bg-Morado/R200">
    <div className=" flex justify-center items-center m-auto xl:flex-row flex-col "> 
<div className="flex justify-center items-center">
    <img src="https://res.cloudinary.com/dhb9rdaoc/image/upload/v1692846188/bvggzs6850dkbzjuazh1.jpg" alt=""  className="lg:w-[590px] w-4/5  lg:h-[400.46px] h-full  rounded-md shadow-md"/>
</div>
<article className="ml-4 flex flex-col justify-center items-center  h-full ">
    <h2 className="text-Azul/800 lg:text-5xl text-4xl xl:text-left text-center w-full md:mt-0 mt-6 ">Sobre nosotros</h2>
    <div className="md:w-[590px] w-full md:h-[252px] h-full text-Grises/600 md:text-xl text-base xl:text-left text-center">
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