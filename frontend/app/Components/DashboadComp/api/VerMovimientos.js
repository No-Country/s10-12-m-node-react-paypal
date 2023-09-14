export async function verMovimientos(authContext) {
    const user = authContext.user;
    const url = `https://countrypay.onrender.com/api/transaction/get_transactions/`;
  
    try {
      // Obtener el token almacenado en localStorage
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
        return data;
      } else {
        const data = await response.json();
  
        console.error("Error al realizar la solicitud:", data);
        return null;
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
      return null;
    }
  }