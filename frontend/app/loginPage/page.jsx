"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import leftImage from "../../public/images/rectangle.jpg";
import PageTitle from "../Components/FormComp/Title"
import SubTitle from "../Components/FormComp/SubTitle"
import FormInput from "../Components/FormComp/Input"
import ErrorMessage from "../Components/FormComp/ErrorMsg"
import Button from "../Components/Button"

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = () => {
    if (!email) {
      setEmailError("Por favor, ingresá tu email.");
    } else {
      setEmailError("");
    }
    if (!password) {
      setPasswordError("Por favor, ingresá tu contraseña.");
    } else {
      setPasswordError("");
    }
    if (!emailError && !passwordError) {
      // nos logueamos
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Mitad Izquierda */}
      <div className="md:w-1/2">
        <Image
          src={leftImage}
          alt="Imagen"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Mitad Derecha */}
      <div className="md:w-1/2 bg-Morado/100 flex flex-col items-center p-8">
        <PageTitle title={"Inicia sesión"}/>
        <SubTitle subTitleText="¿No tienes una cuenta aún?" linkText="Regístrate" linkUrl="/" />
        

        <div className="bg-Grises/50 p-7 rounded-lg w-login h-login shadow-lg">
          {/* input de Correo Electrónico */}
          <FormInput 
          labelHtmlFor="email"
          label="Correo electrónico"
          inputType="email"
          inputId="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />

          {/* Mensaje de Error email*/}
          {emailError && (
            <ErrorMessage message={emailError}/>
          )}

          {/* input de Contraseña */}
          <FormInput 
          labelHtmlFor="password"
          label="Contraseña"
          inputType="password"
          inputId="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />


          {/* Mensaje de Error contraseña*/}
          {passwordError && (
            <ErrorMessage message={passwordError}/>
          )}

          <div className="text-right">
            <a href="#" className="text-Grises/350 text-sm underline">
              Olvidé mi contraseña
            </a>
          </div>

          {/* Botones */}
          <div className="flex mt-8">
            <Button 
            text="Iniciar"
            variant="filled"
            onClick={handleLogin}
            />
           
            <Button 
            text="Registrar"
            variant="empty"
            onClick={handleLogin}
            />
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
