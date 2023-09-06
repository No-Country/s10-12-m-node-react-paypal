async function handleSignup(signupData, apiUrl, setSubmitting, setFieldError) {
    try {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(signupData),
      };
  
      const response = await fetch(apiUrl, requestOptions);
  
      if (response.status === 201) {
        const data = await response.json();
        console.log('Usuario registrado exitosamente:', data);
        setSubmitting(false);
      } else if (response.status === 400) {
        const validationErrors = await response.json();
        console.error('Error de validación:', validationErrors);
        
        // Puedes personalizar los mensajes de error para cada campo aquí
        setFieldError('name', validationErrors.name || 'Campo inválido');
        setFieldError('lastName', validationErrors.lastName || 'Campo inválido');
        setFieldError('password', validationErrors.password || 'Campo inválido');
        setFieldError('email', validationErrors.email || 'Campo inválido');
        setFieldError('phone', validationErrors.phone || 'Campo inválido');
        
        setSubmitting(false);
      } else {
        console.error('Error al registrarse: ', response.statusText);
        setSubmitting(false);
      }
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
      setSubmitting(false);
    }
  }
  
  export default handleSignup;
  