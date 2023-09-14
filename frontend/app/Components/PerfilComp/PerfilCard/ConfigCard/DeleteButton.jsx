import { AuthContext } from '@/app/context/auth-context';
import React, { useContext, useState } from 'react'
import AlertEliminar from './AlertEliminar';

export default function ButtonDeleteAccount() {
    const authContext = useContext(AuthContext);
    const [viewDeleteAccount, setViewDeleteAccount] = useState(false)


    const  handleDeleteAccount = () => {
        if (typeof window !== 'undefined') {
            //Para modificar
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
    
      const handleViewDeleteAccount = () => {
        setViewDeleteAccount(true);
      };
    
      const handleViewDeleteAccountClose = () => {
        setViewDeleteAccount(false);
      };
    
      
    return(
      <>
        <button onClick={handleViewDeleteAccount} className=" bg-Azul/700 w-41 h-10 rounded-md md:py-3.5 px-7 flex items-center justify-center text-white my-5 whitespace-nowrap">
        Eliminar Cuenta
        </button>
      { viewDeleteAccount ? ( 
        <AlertEliminar 
            handleDeleteAccount={handleDeleteAccount} 
            handleViewDeleteAccountClose={handleViewDeleteAccountClose} 
        /> 
        ) : ( "")}
      
      
      </>
    )
}