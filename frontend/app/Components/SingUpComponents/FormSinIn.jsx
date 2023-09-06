'use client'
import React from 'react'
import PageTitle from "../FormComp/Title";
import SubTitle from "../FormComp/SubTitle";
import { useState } from "react";
<<<<<<< HEAD
import {  Form, Formik, ErrorMessage, Field } from "formik";
=======
import {   Form, Formik } from "formik";
>>>>>>> Front
import handleSignup from "./data";
import * as Yup from "yup";

import FirstView from './cards/FirstView';
import SecondView from './cards/SecondView';
import FormInput from '../FormComp/Input';
import Button from '../Button';

function FormSinIn() {
    const [ViewRegister, setViewRegister] = useState(true)
    const apiUrl = 'http://localhost:3000/api/user/create';

    const signupSchema = () =>
      Yup.object().shape({
        name: Yup.string().matches(/^[a-zA-Z\s']{2,30}$/, 'El nombre no es válido').required("El nombre es obligatorio"),
        lastName: Yup.string().matches(/^[a-zA-Z0-9_]{4,20}$/, 'El nombre de usuario no es válido').required("El nombre de usuario requerido"),
        password: Yup.string() .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          'La contraseña no es válida. Debe contener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial.'
        ).required("Con requerido"),
        email: Yup.string().matches(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          'La dirección de correo electrónico no es válida'
        ).required("Campo requerido"),
  
  
      });
  
  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    
    await handleSignup(values, apiUrl, setSubmitting, setFieldError);
  };
    const handleButtonClick = () =>{
      setViewRegister(false)
    }
    const handleButtonReturnClick = () => {
      setViewRegister(true)
    }

  return (
    <Formik
    initialValues={{ name: "", lastName: "", password: "", email: "" }}
    validationSchema={signupSchema}
    onSubmit={handleSubmit}
  >
       <Form className="w-full md:w-1/2 bg-Morado/100 flex flex-col items-center p-8" onSubmit={handleSubmit}>
      <PageTitle title={"Registrate"} />
  { ViewRegister ? ( 

<FirstView handleButtonClick={handleButtonClick}/>

    
    
 ) : (
  
 <SecondView handleButtonReturnClick={handleButtonReturnClick}/>
  

      

          
) }

<SubTitle
        subTitleText="¿Ya tienes una cuenta?"
        linkText="Iniciar sesion"
        linkUrl="/loginPage"
      />
</Form>
  </Formik>
  )
}

export default FormSinIn