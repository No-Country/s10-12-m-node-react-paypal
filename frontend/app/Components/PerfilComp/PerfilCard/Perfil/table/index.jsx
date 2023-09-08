'use client'
import { AuthContext } from '@/app/context/auth-context';
import React, { useContext } from 'react'




function TableId() {
    const authContext = useContext(AuthContext);

const user = authContext.user;
const isUserAuthenticated =  authContext.isUserAuthenticated()
const name = `${isUserAuthenticated ? ` ${user.name}` : "" }`
const lastName = `${isUserAuthenticated ? ` ${user.lastName}` : "" }`
const email = `${isUserAuthenticated ? `  ${user.email}` : "" }`
  return (
    <table className="md:table-auto ">
                    <tbody className="text-xs font-medium mx-8">
                        <tr className="md:table-row">
                            <td className="py-2 md:w-44 block md:table-cell">NOMBRE COMPLETO</td>
                            <td className="py-2 md:ml-4 block md:table-cell">{name} </td>
                        </tr>
                        <tr className="md:table-row">
                            <td className="py-2 block md:table-cell">NOMBRE DE USUARIO</td>                            
                            <td className="py-2 md:ml-4 block md:table-cell">@{lastName}</td>
                        </tr>
                        <tr className="md:table-row">
                            <td className="py-2 block md:table-cell">CORREO ELECTRÓNICO</td>
                            <td className="py-2 md:ml-4 block md:table-cell">{email}</td>
                        </tr>
                    </tbody>
                </table>
  )
}

export default TableId

export function ButtonLogOut() {
    const authContext = useContext(AuthContext);
    

    const  handleLogout = () => {
        if (typeof window !== 'undefined') {
          // Limpiar el token y la información del usuario del almacenamiento local
          window.location.href = "/"; 
    
          localStorage.removeItem("token");
          localStorage.removeItem("user");
    
          // Cerrar la sesión en el contexto de autenticación
          authContext.logout();
          setTimeout(() => {
            window.location.reload();
          }, 1000)
        }
      };
    return(
        <button onClick={handleLogout} className=" bg-Azul/700 w-41 h-10 rounded-md md:py-3.5 px-7 flex items-center justify-center text-white my-5">
        Cerrar Sesión
    </button>
    )
}