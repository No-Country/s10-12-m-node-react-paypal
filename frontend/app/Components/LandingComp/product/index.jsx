
export default function DirectionPage() {

    return(
      <section className="AboutUs w-full h-full p-10 bg-Morado/100 border-2 flex justify-center items-center ">
      <div className=" flex justify-center items-center m-auto "> 

  <article className="ml-4 flex flex-col justify-center items-center h-full">
    <div className="w-2/3 h-fit flex flex-col ">
      <h2 className="text-Azul/800 text-5xl font-semibold text-center leading-[4.37rem] mb-2">Hemos creado una plataforma pensada especialmente para jóvenes.</h2>
      <p className="text-Grises/500 text-2xl leading-8 text-center">Podrás transferir dinero de manera segura y sin complicaciones</p>
      </div>

      <div className="mx-2  grid xl:grid-cols-4 xl:gap-5 lg:grid-cols-2 lg:gap-3 mt-2 duration-500 transition-all grid-cols-1 gap-2">
        {/* Aqui puedes implementar las cards  */}
 
        <div className="w-[280px] h-[320px] rounded-[20px] p-[24px] bg-Grises/100 shadow-lg">
            <div className="h-fit w-full flex justify-center items-center">
                <span className="bg-Morado/700 w-[64px] h-[64px] rounded-full"></span>
            </div>
            <div className="h-full w-full mt-2">
                <h3 className="font-semibold text-xl leading-7 text-Azul/900 text-center mx-4">Sin cuenta bancaria, sin problema   </h3>
                <p className="text-Grises/550 text-center  text-base mt-2">Transfiere y recibe dinero sin la necesidad de una cuenta bancaria.
¡Simple y directo al punto!</p>
            </div>

        </div>
        <div className="w-[280px] h-[320px] rounded-[20px] p-[24px] bg-Grises/100 shadow-lg">
            <div className="h-fit w-full flex justify-center items-center">
                <span className="bg-Morado/700 w-[64px] h-[64px] rounded-full"></span>
            </div>
            <div className="h-full w-full mt-2">
                <h3 className="font-semibold text-xl leading-7 text-Azul/900 text-center mx-4">Sin cuenta bancaria, sin problema   </h3>
                <p className="text-Grises/550 text-center  text-base mt-2">Transfiere y recibe dinero sin la necesidad de una cuenta bancaria.
¡Simple y directo al punto!</p>
            </div>

        </div>
        <div className="w-[280px] h-[320px] rounded-[20px] p-[24px] bg-Grises/100 shadow-lg">
            <div className="h-fit w-full flex justify-center items-center">
                <span className="bg-Morado/700 w-[64px] h-[64px] rounded-full"></span>
            </div>
            <div className="h-full w-full mt-2">
                <h3 className="font-semibold text-xl leading-7 text-Azul/900 text-center mx-4">Sin cuenta bancaria, sin problema   </h3>
                <p className="text-Grises/550 text-center  text-base mt-2">Transfiere y recibe dinero sin la necesidad de una cuenta bancaria.
¡Simple y directo al punto!</p>
            </div>

        </div>
        <div className="w-[280px] h-[320px] rounded-[20px] p-[24px] bg-Grises/100 shadow-lg">
            <div className="h-fit w-full flex justify-center items-center">
                <span className="bg-Morado/700 w-[64px] h-[64px] rounded-full"></span>
            </div>
            <div className="h-full w-full mt-2">
                <h3 className="font-semibold text-xl leading-7 text-Azul/900 text-center mx-4">Sin cuenta bancaria, sin problema   </h3>
                <p className="text-Grises/550 text-center  text-base mt-2">Transfiere y recibe dinero sin la necesidad de una cuenta bancaria.
¡Simple y directo al punto!</p>
            </div>

        </div>
      </div>
  </article>
  </div>
  </section>
    )
  }