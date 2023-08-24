import Testimonials from "./testimonials"

export default function Stories (){
    return(
        <section className=" w-full h-full py-20 px-28 gap-14 bg-Morado/100 border-2 flex justify-center items-center ">
            <div className=" flex justify-center items-center m-auto "> 
                <article className="ml-4 flex flex-col justify-center items-center h-full">
                    <div className="w-2/3 flex flex-col gap-12 h-36">
                        <h2 className="text-Azul/900 text-5xl font-semibold text-center leading-[4.37rem] mb-2">Historias de Éxito financiero</h2>
                        <p className="text-Grises/500 text-xl leading-8 text-center">Sus historias de éxito son la razón por la que estamos aquí, y nos ayudan a entender cómo podemos hacer tu experiencia aún mejor. ¡Descubre por qué sus opiniones nos importan tanto!</p>
                    </div>
    
                    <div className="flex flex-col md:flex-row h-52 w-3/4 gap-8 md:gap-0 md:space-x-8 md:items-center my-16">
                            <Testimonials />
                    </  div>
                </article>
            </div>
        </section>
      )
    }
