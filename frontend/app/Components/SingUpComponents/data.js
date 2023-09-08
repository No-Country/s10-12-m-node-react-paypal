async function handleSignup(values, setSubmitting, setFieldError, authContext, router) {
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
    const data = await response.json();
    console.log('Usuario registrado exitosamente:', data);
    if (response.status === 200) {
      const data = await response.json();
      console.log('Usuario registrado exitosamente:', data);
      authContext.setAuthState(data);
      router.push('/dashboard');
      setSubmitting(false);
    } else if (response.status === 400) {
      const errorData = await response.json(); // Si la API devuelve detalles del error en JSON
      console.error('Error al Crear Cuenta:', response.statusText, errorData);

      // Aquí puedes manejar los errores específicos devueltos por la API
      if (errorData && errorData.errors) {
        errorData.errors.forEach((error) => {
          if (error.field) {
            setFieldError(error.field, error.message);
          }
        });
      } else {
        setFieldError('email', 'Credenciales inválidas');
        setFieldError('password', 'Credenciales inválidas');
        setFieldError('name', 'Credenciales inválidas');
        setFieldError('lastName', 'Credenciales inválidas');
      }

      setSubmitting(false);
    } else {
      console.error('Error desconocido:', response.status, response.statusText);
      setSubmitting(false);
    }
  } catch (error) {
    console.error('Error al realizar la solicitud:', error);
    setSubmitting(false);
  }
}

export default handleSignup;
