
async function TransferApi(token, formData, updateFormData, authContext) { 
    const user = authContext.user;
    const url = `https://countrypay.onrender.com/api/transaction/`;

    try {
      console.log(token); // Asegúrate de que token sea el que pasaste como argumento
        
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
        body: JSON.stringify(formData),
      };
  
      const response = await fetch(
        `${url}${user.id}`,
        requestOptions
      );
  
      if (response.status === 200) {
        const data = await response.json();
        console.log("Datos obtenidos:", data);
        updateFormData(data); 
      } else {
        const data = await response.json();
        console.error("Error al realizar la solicitud:", data);
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
}

export default TransferApi;
