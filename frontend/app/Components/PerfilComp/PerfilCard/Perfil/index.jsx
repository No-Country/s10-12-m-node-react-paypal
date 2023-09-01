//Solo maquetado

export default function PerfilCard (){
    return(
        <div className="flex-col w-7/12 h-80 bg-Grises/50 shadow rounded-xl py-14 px-20 gap-10" >
            <h1 className="flex text-Morado/900 font-bold text-4xl my-3">Perfil</h1>
            <div className="gap-6 my-3">
                <table className="table-auto">
                    <tbody className="text-xs font-medium mx-8">
                        <tr>
                            <td className="py-2 w-44">NOMBRE COMPLETO</td>
                            <td className="py-2 ml-4">Juan López </td>
                        </tr>
                        <tr>
                            <td className="py-2">NOMBRE DE USUARIO</td>                            
                            <td className="py-2 ml-4">@juanito.lopez123</td>
                        </tr>
                        <tr>
                            <td className="py-2">CORREO ELECTRÓNICO</td>
                            <td className="py-2 ml-4">user1@gmail.com</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <button className="bg-Morado/700  w-41 h-10 rounded-md py-3.5 px-7 flex items-center justify-center text-white my-5">
                Cerrar Sesión
            </button>
            
        </div>
    )
}