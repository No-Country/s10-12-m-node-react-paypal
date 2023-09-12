import { AuthContext } from "@/app/context/auth-context";
import { useContext } from "react";

async function TransferApi() {
    const authContext = useContext(AuthContext);
    const user = authContext.user;
    const url = `https://countrypay.onrender.com/api/transaction/`
    try {

      // Obtener el token almacenado en localStorage
      const token = localStorage.getItem("token");
      console.log(token)
        
      if (!token) {
        console.error("No se encontró el token en localStorage.");
        return;
      }
  
      const requestOptions = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
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
  
  export default TransferApi;
  