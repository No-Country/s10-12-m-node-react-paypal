'use client'
import React, { useState } from 'react';
import PageTitle from "../FormComp/Title";
import SubTitle from "../FormComp/SubTitle";
import { Form, Formik } from "formik";
import handleSignup from "./data";
import * as Yup from "yup";
import FirstView from './cards/FirstView';
import SecondView from './cards/SecondView';
import { AuthContext } from '@/app/context/auth-context';
import { useRouter } from 'next/navigation';
import AlertView from './cards/Alert/Succes/AlertView';
import AlertViewSuccess from './cards/Alert/Succes/AlertView';
import AlertViewFail from './cards/Alert/Fail/AlertView';
import CrearCuenta from '../DashboadComp/api/CrearAccount';

function FormSinIn() {
  const router = useRouter();
  const [ViewRegister, setViewRegister] = useState(true);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [registrationFail, setRegistrationFail] = useState(false);

  const signupSchema = () =>
    Yup.object().shape({
      name: Yup.string()
        .matches(/^[a-zA-ZáéíóúÁÉÍÓÚ\s']{3,30}$/, 'El nombre no es válido')
        .notOneOf(['1234567890'], 'El nombre no puede contener números')
        .required("El nombre es obligatorio"),
        lastName: Yup.string().matches(/^[a-zA-Z0-9_]{4,20}$/, 'El nombre de usuario no es válido').required("El nombre de usuario requerido"),
        password: Yup.string().matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          'La contraseña no es válida. Debe contener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial.'
        ).required("Contraseña requerido"),
        email: Yup.string().matches(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          'La dirección de correo electrónico no es válida'
        ).required("Correo requerido"),
      // ... other validation rules for other fields
    });
    
  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    const success = await handleSignup(values, setSubmitting, setFieldError, AuthContext, router);
   if(!success){

    setRegistrationFail(true)
    
   }else {
    console.log("Datos del Succes:" ,success)
     setRegistrationSuccess(true)
   }
  };

  const handleButtonClick = () => {
    setViewRegister(false);
  };

  const handleButtonReturnClick = () => {
    setViewRegister(true);
  };

  const handleButtonReloadPage = () => {
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  const handleButtonCloseView = () => {
    setRegistrationFail(false)
  }
  return (
    <Formik
      initialValues={{ name: "", lastName: "", password: "", email: ""}}
      validationSchema={signupSchema}
      onSubmit={handleSubmit}
    >
      <Form className="  w-full md:w-1/2 bg-Morado/100 flex flex-col items-center p-8">
        <PageTitle title={"Regístrate"} />
       
         
            {ViewRegister ? (
              <FirstView handleButtonClick={handleButtonClick} />
            ) : (
              <SecondView handleButtonReturnClick={handleButtonReturnClick} />
            )}
         
         {registrationSuccess ? (
          <AlertViewSuccess handleButtonReloadPage={handleButtonReloadPage} />
        ) : ("") }
          {registrationFail ? (
          <AlertViewFail handleButtonCloseView={handleButtonCloseView} />
        ) : ("") }
        <SubTitle
          subTitleText="¿Ya tienes una cuenta?"
          linkText="Iniciar sesión"
          linkUrl="/LoginPage"
        />
      </Form>
    </Formik>
  );
}

export default FormSinIn;
