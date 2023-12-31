import { ArrowTrendingUpIcon, CreditCardIcon, ShieldCheckIcon, UserGroupIcon } from "@heroicons/react/24/outline"

const CARDS = [{
    id: 1,
    title: "sin cuenta bancaria, sin problema",
    icon: <CreditCardIcon/>,
     description: `Transfiere y recibe dinero sin la necesidad de una cuenta bancaria. ` + "   " +  ` ¡Simple y directo al punto!`
},
{
    id: 2,
    title: "protección de datos en primer lugar:",
    icon: <ShieldCheckIcon/>,
    description: "Medidas de seguridad más avanzadas para asegurarnos de que tus transacciones sean completamente confidenciales y protegidas."
},
{
    id: 3,
    title: "amigable para los novatos financieros",
    icon: <UserGroupIcon/>,
    description: "nuestra plataforma está diseñada de manera intuitiva, para que puedas manejar tus transferencias con facilidad."
},
{
    id: 4,
    title: "para jóvenes emprendedores:",
    icon: <ArrowTrendingUpIcon/>,
    description: "si tienes entre 15 y 25 años y estás listo para dar tus primeros pasos hacia la independencia financiera, ¡estás en el lugar correcto!"
}

]


export  function CardComponent() {
    return(
<>
        {CARDS.map(({id, title,icon, description}) => (
            <div className="md:w-[280px] w-full md:h-[320px] h-fit rounded-[20px] md:p-[24px] p-[30px]   duration-500  bg-Grises/50 shadow-lg" key={id}>
            <div className="h-fit w-full flex justify-center items-center">
                <span className="bg-Morado/700 w-[64px] h-[64px] rounded-full flex justify-center items-center text-white p-3">
                    {icon}
                </span>
            </div>
            <div className="h-full w-full mt-2">
                <h3 className="font-semibold text-xl leading-7 text-Azul/900 text-center mx-4 first-letter:capitalize ">{title}  </h3>
                <p className="text-Grises/550 text-center  text-base mt-2 first-letter:capitalize">{description}
</p>
            </div>
            </div>
        ))}
                
                </>
       
    )
}