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
    <Formik
    initialValues={{ name: "", lastName: "" }}
    validationSchema={signupSchema}
    onSubmit={handleSubmit}
  >
       <Form className="w-full md:w-1/2 bg-Morado/100 flex flex-col items-center p-8">
      <PageTitle title={"Registrate"} />
  { ViewRegister ? ( 



     <FirstView handleButtonClick={handleButtonClick}  />
    
    
 ) : (
 <SecondView handleButtonReturnClick={handleButtonReturnClick}/>
      

          
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