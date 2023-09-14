import { AuthContext } from "@/app/context/auth-context";
import { useContext, useState, useEffect } from "react";

async function GetAccount() {
  const authContext = useContext(AuthContext);
  const user = authContext.user;
  const url = `https://countrypay.onrender.com/api/account/get_account/`;

       
        try {
          const token = localStorage.getItem("token");
          if (!token) {
            console.error("No se encontró el token en localStorage.");
            return;
          }

          const requestOptions = {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          };

          const response = await fetch(`${url}${user.id}`, requestOptions);

          if (response.status === 200) {
            const data = await response.json();
            console.log("Datos obtenidos:", data);
          } else {
            const data = await response.json();
            console.error("Error al realizar la solicitud:", data);
          }
        } catch (error) {
          console.error("Error al realizar la solicitud:", error);
        }
      
    

    
    
  
}

export default GetAccount;
