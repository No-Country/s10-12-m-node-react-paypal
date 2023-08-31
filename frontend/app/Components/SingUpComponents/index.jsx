"use client";
import Image from "next/image";
import signupImg from "@/public/images/Signup.jpg";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import handleSignup from "./data";
import { redirect } from "next/dist/server/api-utils";
import PageTitle from "../FormComp/Title";
import Button from "../Button";
import SubTitle from "../FormComp/SubTitle";
import FormInput from "../FormComp/Input";
import { useState } from "react";

export default  function SignupPageComp() {
    const [ViewRegister, setViewRegister] = useState(true)

  const signupSchema = () =>
    Yup.object().shape({
      name: Yup.string().required("Campo requerido"),
      lastName: Yup.string().required("Campo requerido"),
      password: Yup.string().required("Campo requerido"),
      email: Yup.string().required("Campo requerido"),
      phone: Yup.string().required("Campo requerido")


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
    
            <div className="min-h-screen w-full flex flex-col md:flex-row">
    <div className="w-full md:w-1/2">
      <Image
        src={signupImg}
        alt="signup image"
        className="w-full h-full object-cover"
      />
    </div>
    <Formik
      initialValues={{ name: "", lastName: "" }}
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

          <FormInput labelHtmlFor="phone" label="Telefono" />
          <Field
            type="phone"
            name="phone"
            placeholder="Ingresar telefono"
            className="w-full h-12 p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500 mt-2 text-lg placeholder-Grises/350 mb-2"
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
            <Button type="submit" text="registrar" variant="filled"    />

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
 
    </div>
 
  );
}
