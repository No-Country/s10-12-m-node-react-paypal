//Solo maquetado

export default function PerfilCard (){
    return(
        <div className="flex-col w-72 md:w-7/12 md:h-80 bg-Grises/50 shadow rounded-xl py-5 md:py-14 px-4 md:px-20 mt-5 gap-10">
            <h1 className="flex text-Morado/900 font-bold text-2xl md:text-4xl md:my-3">Perfil</h1>
            <div className="gap-6 my-3">
                <table className="md:table-auto ">
                    <tbody className="text-xs font-medium mx-8">
                        <tr className="md:table-row">
                            <td className="py-2 md:w-44 block md:table-cell">NOMBRE COMPLETO</td>
                            <td className="py-2 md:ml-4 block md:table-cell">Juan López </td>
                        </tr>
                        <tr className="md:table-row">
                            <td className="py-2 block md:table-cell">NOMBRE DE USUARIO</td>                            
                            <td className="py-2 md:ml-4 block md:table-cell">@juanito.lopez123</td>
                        </tr>
                        <tr className="md:table-row">
                            <td className="py-2 block md:table-cell">CORREO ELECTRÓNICO</td>
                            <td className="py-2 md:ml-4 block md:table-cell">user1@gmail.com</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <button className=" bg-Azul/700 w-41 h-10 rounded-md md:py-3.5 px-7 flex items-center justify-center text-white my-5">
                Cerrar Sesión
            </button>
            
        </div>
    )
}