import { CardComponent } from "./cards";

export default function DirectionPage() {

    return(
      <section className="caracteristicas w-full h-full p-10 bg-Morado/100 flex justify-center items-center " id="caracteristicas">
      <div className=" flex justify-center items-center m-auto "> 

  <article className="ml-4 flex flex-col justify-center w-full items-center h-full">
    <div className="md:w-2/3   h-fit flex flex-col duration-300 transition-all ">
      <h2 className="text-Azul/800 xl:text-5xl lg:text-4xl md:text-3xl text-2xl   font-semibold text-center md:leading-[4.37rem] mb-2">Hemos creado una plataforma pensada especialmente para jóvenes.</h2>
      <p className="text-Grises/500 md:text-2xl text-lg  leading-8 text-center">Podrás transferir dinero de manera segura y sin complicaciones</p>
      </div>

      <div className="md:mx-2   grid xl:grid-cols-4 xl:gap-5 lg:grid-cols-2 lg:gap-3 mt-4 duration-500 transition-all grid-cols-1 gap-8">
        {/* Aqui puedes implementar las cards  */}
 
   <CardComponent/>
 
      </div>
  </article>
  </div>
  </section>
    )
  }