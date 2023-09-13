
export async function getTarjetas(authContext) {
  const user = authContext.user;
  const url = `https://countrypay.onrender.com/api/account/get_account/`;

  try {
    // Obtener el token almacenado en localStorage
    const token = localStorage.getItem("token");
    //console.log(token)

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

function getCreditCardType(cardNumber) {
  // Definir patrones para diferentes redes de tarjetas
  const cardPatterns = {
    visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    mastercard: /^5[1-5][0-9]{14}$/,
    americanexpress: /^3[47][0-9]{13}$/,
    // Agregar patrones para otras redes de tarjetas según sea necesario
  };

  // Comprobar cada patrón para determinar el tipo de tarjeta
  for (const cardType in cardPatterns) {
    if (cardPatterns[cardType].test(cardNumber)) {
      return cardType;
    }
  }

  // Si no coincide con ningún patrón, se considera desconocido
  return "desconocido";
}

export async function agregarTarjetas(
  values,
  setSubmitting,
  setFieldError,
  authContext,
  router
) {
  const userId = authContext.user;
  const url = `https://countrypay.onrender.com/api/card/create/`;
  //console.log(authContext ,'user!')
  try {
    // Obtener el token almacenado en localStorage
    const token = localStorage.getItem("token");
    //console.log('token',token)

    if (!token) {
      console.error("No se encontró el token en localStorage.");
      return;
    }

    const loginData = {
      number: values.numero,
      exp_date: values.fecha,
      security_code: values.cvv,
      type: "debito",
      name: values.titular,
      category: getCreditCardType(values.numero),
    };

    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    };

    const response = await fetch(`${url}${userId.id}`, requestOptions);

    if (response.status === 200) {
      const data = await response.json();
      //console.log("Datos obtenidos:", data);
      setSubmitting(false);
      router.push("/dashboard/wallet");
    } else {
      const data = await response.json();
      setFieldError("numero", "La tarjeta debe tener 16 números");
      setFieldError("cvv", "El CVV debe tener 3 números");
      setFieldError("titular", "El nombre debe tener entre 5 y 25 caracteres");
      setFieldError("fecha", "La fecha debe ser MM/AA");
      setFieldError("generalError", "Los datos ingresados no son válidos.");
      console.error("Error al realizar la solicitudd:", data);
      setSubmitting(false);
    }
  } catch (error) {
    console.error("Error al realizar la solicitudt:", error);
    setSubmitting(false);
  }
}
