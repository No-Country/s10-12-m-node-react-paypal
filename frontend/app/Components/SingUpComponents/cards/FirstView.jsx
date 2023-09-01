// 'use client'
import React, { useState } from 'react'
import FormInput from '../../FormComp/Input'
import { ErrorMessage, Field } from 'formik'
import Button from '../../Button'

function FirstView({handleButtonClick}) {
  // const [username, setUserName] = useState("")
  // const [name, setName] = useState("")


  // const handleFirstViewChange  = (event) => {
  //   const inputValue = event.target.value;

  //   const newUsername

  // }
  return (
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
  )
}

export default FirstView