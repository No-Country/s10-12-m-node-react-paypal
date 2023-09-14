
import Testimonials from "./testimonials"


export default function Stories (){
    return(
        <section className="h-full w-full p-1 py-20 lg:px-28 gap-14 bg-Grises/150" layout="responsive">

            <div className="m-auto w-11/12 lg:w-5/6">
                <h2 className="text-Azul/900 text-4xl md:text-5xl font-semibold text-center leading-[4.37rem] mb-2">
                Historias de Éxito Financiero
                </h2>
                <p className="text-Grises/600 text-base font-normal md:text-xl  text-center">
                Sus historias de éxito son la razón por la que estamos aquí, y nos ayudan a entender cómo podemos hacer tu experiencia aún mejor. ¡Descubre por qué sus opiniones nos importan tanto!
                </p>
            </div>

            <div className=" w-full mx-auto mt-5 flex ">
                <div className="w-full h-80 ">
                    <Testimonials />
                </div>
            </div>
            
        </section>
      )
    }
