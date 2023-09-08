'use client'
import React, { useState } from 'react';
import PageTitle from "../FormComp/Title";
import SubTitle from "../FormComp/SubTitle";
import { ErrorMessage, Field, Form, Formik } from "formik";
import handleSignup from "./data";
import * as Yup from "yup";
import FirstView from './cards/FirstView';
import SecondView from './cards/SecondView';
import FormInput from '../FormComp/Input';
import Button from '../Button';
import { AuthContext } from '@/app/context/auth-context';
import { useRouter } from 'next/navigation';

function FormSinIn() {
  const router = useRouter();
  const [ViewRegister, setViewRegister] = useState(true);

  const signupSchema = () =>
    Yup.object().shape({
      name: Yup.string().matches(/^[a-zA-Z\s']{2,30}$/, 'El nombre no es válido').required("El nombre es obligatorio"),
      lastName: Yup.string().matches(/^[a-zA-Z0-9_]{4,20}$/, 'El nombre de usuario no es válido').required("El nombre de usuario requerido"),
      password: Yup.string().matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        'La contraseña no es válida. Debe contener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial.'
      ).required("Con requerido"),
      email: Yup.string().matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        'La dirección de correo electrónico no es válida'
      ).required("Campo requerido"),
      phone: Yup.string().matches(
        /^[\d\s()+-]*$/,
        'El número de teléfono no es válido'
      )
    });
    
    const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
      await handleSignup(values, setSubmitting, setFieldError, AuthContext, router);
      setTimeout(() => {
        window.location.reload();
      }, 1000)
    };
    

  const handleButtonClick = () => {
    setViewRegister(false);
  };

  const handleButtonReturnClick = () => {
    setViewRegister(true);
  };

  return (
    <Formik
      initialValues={{ name: "", lastName: "", password: "", email: ""}}
      validationSchema={signupSchema}
      onSubmit={handleSubmit}
    >
      <Form className="w-full md:w-1/2 bg-Morado/100 flex flex-col items-center p-8">
        <PageTitle title={"Regístrate"} />
        {ViewRegister ? (
        <FirstView handleButtonClick={handleButtonClick}/>
        ) : (
            
    <SecondView handleButtonReturnClick={handleButtonReturnClick}/>
        )}
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
