'use client'
import React from 'react'
import PageTitle from "../FormComp/Title";
import SubTitle from "../FormComp/SubTitle";
import { useState } from "react";
import {  Form, Formik } from "formik";
import handleSignup from "./data";
import * as Yup from "yup";
import FirstView from './cards/FirstView';
import SecondView from './cards/SecondView';

function FormSinIn() {
    const [ViewRegister, setViewRegister] = useState(true)

    const signupSchema = () =>
      Yup.object().shape({
        name: Yup.string().required("Campo requerido"),
        lastName: Yup.string().required("Campo requerido"),
        password: Yup.string().required("Campo requerido"),
        email: Yup.string().required("Campo requerido"),
  
  
      });
  
    const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
      await handleSignup(values, setSubmitting, setFieldError);
      console.log(values);
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
       <Form className="w-full md:w-1/2 bg-Morado/100 flex flex-col items-center p-8">
      <PageTitle title={"Registrate"} />
  { ViewRegister ? ( 



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


   
   <div className="flex mt-8 justify-evenly items-center w-full  ">
   <div className="w-1/2 mr-2">

   <Button text="volver"  variant="filled"  onClick={handleButtonReturnClick}  />

   </div>
   <div className="w-1/2 ml-2">
   <Button type="submit" text="registrar" variant="filled"   />

   </div>
 </div>
 </div>
      

          
) }

<SubTitle
        subTitleText="¿Ya tienes una cuenta?"
        linkText="Iniciar sesion"
        linkUrl="/LoginPage"
      />
</Form>
  </Formik>
  )
}

export default FormSinIn