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
      initialValues={{ name: "", lastName: "", password: "", email: "", phone : "" }}
      validationSchema={signupSchema}
      onSubmit={handleSubmit}
    >
      <Form className="w-full md:w-1/2 bg-Morado/100 flex flex-col items-center p-8">
        <PageTitle title={"Regístrate"} />
        {ViewRegister ? (
         <div className="bg-Grises/50 p-7 rounded-lg w-login shadow-lg mt-16 duration-300 transition-all">
         <FormInput labelHtmlFor="text" label="Nombre completo" />
         <Field
           type="text"
           name="name"
           placeholder="Ingresar nombre"
           className="w-full h-12 p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500 mt-2  text-lg placeholder-Grises/350 mb-4"
         />
         
         <ErrorMessage
           name="name"
           component="p"
           className="text-red-500 text-sm mb-4"
         />
         
         <FormInput labelHtmlFor="text" label="Nombre de usuario" />
         <Field
           type="text"
           name="lastName"
           placeholder="@username"
           className="w-full h-12 p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500 mt-2 text-lg placeholder-Grises/350 mb-2"
         />
         
         <ErrorMessage
           name="lastName"
           component="p"
           className="text-red-500 text-sm mb-4"
         />
         
         
         
         <div className="flex mt-8">
           <Button  text="continuar" variant="filled" onClick={handleButtonClick} />
         </div>
         </div>
        ) : (
            
    <div className="bg-Grises/50 p-7 rounded-lg w-login shadow-lg mt-16 transition-all duration-300">
    <FormInput labelHtmlFor="password" label="Contraseña" />
   <Field
     type="password"
     name="password"
     placeholder="Ingresar contraseña"
     className="w-full h-12 p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500 mt-2 text-lg placeholder-Grises/350 mb-2"
   />

   <ErrorMessage
     name="password"
     component="p"
     className="text-red-500 text-sm mb-4"
   />

   <FormInput labelHtmlFor="email" label="Correo electrónico" />
   <Field
     type="email"
     name="email"
     placeholder="Ingresar correo electrónico"
     className="w-full h-12 p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500 mt-2 text-lg placeholder-Grises/350 mb-2"
   />

   <ErrorMessage
     name="email"
     component="p"
     className="text-red-500 text-sm mb-4"
   />
     <FormInput labelHtmlFor="number" label="Numero de Telefono(Opcional)" />
   <Field
     type="tel"
     name="phone"
     placeholder="Ingresar tu numero"
     className="w-full h-12 p-2 rounded border border-gray-300 focus:outline-none appearance-none focus:border-blue-500 mt-2 text-lg placeholder-Grises/350 mb-2"
   />

   <ErrorMessage
     name="phone"
     component="p"
     className="text-red-500 text-sm mb-4"
   />

  
     
     <div className="flex mt-8 justify-evenly items-center w-full  ">
     <div className="w-1/2 mr-2">

     <Button text="volver"  variant="filled"  onClick={handleButtonReturnClick}  />

     </div>
     <div className="w-1/2 ml-2">
     <Button type="submit" text="registrar" variant="filled"   />

     </div>
   </div>
   </div>
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
