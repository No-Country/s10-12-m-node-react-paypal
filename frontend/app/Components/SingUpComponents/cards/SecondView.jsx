import React from 'react'
import FormInput from '../../FormComp/Input'
import { ErrorMessage, Field } from 'formik'
import Button from '../../Button'
import AlertView from './Alert/Succes/AlertView'

function SecondView({handleButtonReturnClick}) {
  return (
  
    <div className="bg-Grises/50 p-7 rounded-lg w-login shadow-lg mt-16 transition-all duration-300">
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

  
     {/* <FormInput labelHtmlFor="number" label="Numero de Telefono(Opcional)" />
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
   /> */}

  
     
     <div className="flex mt-8 justify-evenly items-center w-full  ">
     <div className="w-1/2 mr-2">

     <Button text="volver"  variant="filled"  onClick={handleButtonReturnClick}  />

     </div>
     <div className="w-1/2 ml-2">
     <Button type="submit" text="registrar" variant="filled"   />

     </div>
   </div>
   </div>
  )
}

export default SecondView