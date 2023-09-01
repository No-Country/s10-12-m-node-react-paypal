
import Testimonials from "./testimonials"


export default function Stories (){
    return(
        <section className="h-full w-full py-20 px-28 gap-14 bg-Grises/150" layout="responsive">

            <div className="m-auto w-5/6">
                <h2 className="text-Azul/900 text-5xl font-semibold text-center leading-[4.37rem] mb-2">
                Historias de Éxito financiero
                </h2>
                <p className="text-Grises/500 text-xl leading-8 text-center">
                Sus historias de éxito son la razón por la que estamos aquí, y nos ayudan a entender cómo podemos hacer tu experiencia aún mejor. ¡Descubre por qué sus opiniones nos importan tanto!
                </p>
            </div>

            <div className=" w-11/12 mx-auto mt-5 flex ">
                <div className="w-full mx-auto ">
                    <Testimonials />
                </div>
            </div>
            
        </section>
      )
    }
