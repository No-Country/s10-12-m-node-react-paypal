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
    console.error('Error al iniciar sesión:', error);
    setSubmitting(false);
    return false
  }

}

export default handleSignup;
