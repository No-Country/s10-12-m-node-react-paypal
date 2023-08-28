
async function handleSignup(values, setSubmitting, setFieldError) {
    try {
        const signupData = {
            name: values.name,
            lastName: values.lastName,
            password: values.password,
            email: values.email,
            phone: values.phone,
        };

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(signupData),
        };

        const response = await fetch('https://backend-s10-12-m-paypal.onrender.com/api/v1/users/create', requestOptions);

        if (response.status === 200) {
            const data = await response.json();
            console.log('Usuario registrado exitosamente:', data);

            setSubmitting(false);
        } else {
            console.error('Error al registrarse: ', response.statusText);
            setFieldError('name', 'Campo repetido y/o invalido');
            setFieldError('lastName', 'Campo repetido y/o invalido');
            setSubmitting(false);
        }
    } catch (error) {
        console.error('Error al realizar la solicitud:', error);
        setSubmitting(false);
    }
}

export default handleSignup;

