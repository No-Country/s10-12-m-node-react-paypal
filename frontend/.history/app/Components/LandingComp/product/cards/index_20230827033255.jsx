const CARDS = [{
    id: 1,
    title: "sin cuenta bancaria, sin problema",
    description: `Transfiere y recibe dinero sin la necesidad de una cuenta bancaria. ` + "   " +  ` ¡Simple y directo al punto!`
},
{
    id: 2,
    title: "protección de datos en primer lugar:",
    description: "Medidas de seguridad más avanzadas para asegurarnos de que tus transacciones sean completamente confidenciales y protegidas."
},
{
    id: 3,
    title: "amigable para los novatos financieros",
    description: "nuestra plataforma está diseñada de manera intuitiva, para que puedas manejar tus transferencias con facilidad."
},
{
    id: 4,
    title: "para jóvenes emprendedores:",
    description: "si tienes entre 15 y 25 años y estás listo para dar tus primeros pasos hacia la independencia financiera, ¡estás en el lugar correcto!"
}

]


export  function CardComponent() {
    return(
<>
        {CARDS.map(({id, title, description}) => (
            <div className="w-[280px] h-[320px] rounded-[20px] p-[24px] opacity-70  hover:opacity-100 duration-500 bg-Grises/100 shadow-lg" key={id}>
            <div className="h-fit w-full flex justify-center items-center">
                <span className="bg-Morado/700 w-[64px] h-[64px] rounded-full"></span>
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