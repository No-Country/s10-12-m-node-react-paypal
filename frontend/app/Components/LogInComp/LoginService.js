

async function handleLogin(values, setSubmitting, setFieldError, authContext, router) {
  
    try {
      const loginData = { 
        email: values.email,
        password: values.password,
      };
  
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData),
      };
  
      const response = await fetch('https://backend-s10-12-m-paypal.onrender.com/api/user/login', requestOptions);
      // const data = await response.json()
      // console.log(data)

      if (response.status === 200) {
        const data = await response.json();
        //console.log('Usuario autenticado:', data);
        authContext.setAuthState(data);
        router.push('/dashboard');
        setSubmitting(false);
      } else {
        console.error('Error al iniciar sesión:', response.statusText);
        setFieldError('generalError', 'El usuario y/o contraseña son incorrectos.');
        //setFieldError('email', 'Credenciales inválidas');
        //setFieldError('password', 'Credenciales inválidas');
        setSubmitting(false);
      }
      
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
      setSubmitting(false);
    }
  }
  
  export default handleLogin;
  