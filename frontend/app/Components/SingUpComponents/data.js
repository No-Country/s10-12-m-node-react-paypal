async function handleSignup( values, setSubmitting, setFieldError, authContext, router) {
  try {
    const signupData = {
      name: values.name,
      lastName: values.lastName,
      password: values.password,
      email: values.email,
    };

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(signupData),
    };

    const response = await fetch("https://backend-s10-12-m-paypal.onrender.com/api/user/create", requestOptions);
    if (response.status === 200  ) {
      const data = await response.json();
      console.log(data)
      return data, true;
    } else if (response.status === 400) {
      const errorData = await response.json(); // Si la API devuelve detalles del error en JSON
      
      if (errorData && errorData.errors) {
        errorData.errors.forEach((error) => {
          if (error.field) {
            setFieldError(error.field, error.message);
          }
        });
      } else {
        setFieldError('email', 'Correo existente');
      }

      setSubmitting(false);
    } else {
      console.error('Error al iniciar sesión:', response.statusText);
      setSubmitting(false);
    }
  } catch (error) {
    setSubmitting(false);
    return false
  }

}
// const result = await handleSignup(values, setSubmitting, setFieldError, authContext, router);

// // Comprobar si la función devolvió datos exitosos
// if (result && result.success) {
//   // Aquí puedes acceder a los datos exitosos
//   const userData = result.data;
//   console.log('Datos exitosos:', userData);
// } else {
//   // La función no fue exitosa, puedes manejar el error aquí
//   console.error('Error:', result.error);
// }
export default handleSignup;


// async function CrearCuenta() {
//   const [isAccountCreated, setIsAccountCreated] = useState(false);
//   const url = `https://countrypay.onrender.com/api/account/`;

//   useEffect(() => {
//     if (!isAccountCreated && user && !user.Account) {
//       async function createAccount() {
//         try {
//           const token = localStorage.getItem("token");
//           if (!token) {
//             console.error("No se encontró el token en localStorage.");
//             return;
//           }

//           const requestOptions = {
//             method: "POST",
//             headers: {
//               Authorization: `Bearer ${token}`,
//               "Content-Type": "application/json",
//             },
//           };

//           const response = await fetch(`${url}${user.id}`, requestOptions);

//           if (response.status === 200) {
//             const data = await response.json();
//             console.log("Datos obtenidos:", data);
//             setIsAccountCreated(true);
//           } else {
//             const data = await response.json();
//             console.error("Error al realizar la solicitud:", data);
//           }
//         } catch (error) {
//           console.error("Error al realizar la solicitud:", error);
//         }
//       }

//       createAccount();
//     }
//   }, [isAccountCreated, user, url]);
// }