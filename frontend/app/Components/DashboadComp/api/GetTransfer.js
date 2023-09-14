import { AuthContext } from "@/app/context/auth-context";
import { useContext } from "react";

async function GetTransfer() {
    const authContext = useContext(AuthContext);
    const user = authContext.user;
    const url = `https://countrypay.onrender.com/api/transaction/get_transactions/2`
    try {

      // Obtener el token almacenado en localStorage
      const token = localStorage.getItem("token");
      console.log(token)
        
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
        body: JSON.stringify()
      };
  
      const response = await fetch(
        `${url}${user.id}`,
        requestOptions
      );
  
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
  
  export default GetTransfer;
  