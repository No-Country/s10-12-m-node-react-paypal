"use client";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaSpinner } from "react-icons/fa";
import { AuthContext } from "../../../context/auth-context";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import BackBtn from "@/app/Components/BackBtn";
import Button from "@/app/Components/Button";
import FormInput from "@/app/Components/FormComp/Input";
import { agregarTarjetas } from "@/app/Components/DashboadComp/api/AgregarTarjeta";

const VincularTarjeta = () => {
  const router = useRouter();
  const authContext = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const cardSchema = Yup.object().shape({
    titular: Yup.string().required("Campo requerido"),
    numero: Yup.number().required("Campo requerido"),
    fecha: Yup.string().required("Campo requerido"),
    cvv: Yup.number().required("Campo requerido"),
    generalError: Yup.string(),
  });

  useEffect(() => {
    // checks if the user is authenticated
    authContext.isUserAuthenticated()
      ? router.push("/dashboard/abonar/vincularTarjeta")
      : router.push("/");
  }, []);

  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    //console.log('contexto', user)
    setIsLoading(true); // Mostrar el círculo de carga

    await agregarTarjetas(
      values,
      setFieldError,
      setFieldError,
      authContext,
      router
    );

    setIsLoading(false); // Ocultar el círculo de carga
    setSubmitting(false); // Fin de la solicitud
  };

  //console.log("contexto", authContext);
  return (
    <div className="w-full h-full  flex justify-center relative">
      <BackBtn />

      <div className=" px-14 py-12 ml-8 mr-4 lg:w-3/6 mt-10 mb-10 md:mt-10 md:mb-10 md:pl-40 md:pr-40 border-rose-200 bg-white shadow-lg rounded-md ">
        <Formik
          initialValues={{
            titular: "",
            numero: "",
            fecha: "",
            cvv: "",
            generalError: "",
          }}
          validationSchema={cardSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            {/* Título */}
            <h2 className="font-bold text-2xl md:text-4xl flex justify-center items-center text-Azul/900 mb-14 md:mb-10">
              Vincular tarjeta
            </h2>

            {isLoading && (
              <div className="flex justify-center items-center mb-8">
                <FaSpinner className="animate-spin" size={32} />
              </div>
            )}
            <ErrorMessage
              name="generalError"
              component="p"
              className="text-red-500 text-sm mb-4"
            />

            <FormInput
              labelHtmlFor="titular"
              label="Nombre del titular de tarjeta"
            />
            <Field
              type="text"
              name="titular"
              placeholder="Introducir nombre completo"
              className="w-full h-9 p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500 mt-2 text-sm  md:text-lg placeholder-Grises/350 mb-8 md:mb-6"
            />
            <ErrorMessage
              name="titular"
              component="p"
              className="text-red-500 text-sm mb-4"
            />
            <FormInput labelHtmlFor="numero" label="Numero de tarjeta" />
            <Field
              type="text"
              name="numero"
              placeholder="Introduzca los 16 digitos de la tarjeta"
              className="w-full h-9 p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500 mt-2  text-xs  md:text-lg placeholder-Grises/350 mb-8 md:mb-6"
            />
            <ErrorMessage
              name="numero"
              component="p"
              className="text-red-500 text-sm mb-4"
            />
            <div className="md:flex md:flex-row">
              <div>
                <FormInput labelHtmlFor="fecha" label="Fecha de vencimiento" />
                <Field
                  type="text"
                  name="fecha"
                  placeholder="MM/AAAA"
                  className="w-44 h-9 p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500 mt-2  text-sm  md:text-lg placeholder-Grises/350 mb-8 md:mb-6"
                />
                <ErrorMessage
                  name="fecha"
                  component="p"
                  className="text-red-500 text-sm mb-4"
                />
              </div>
              <div className="md:ml-8">
                <FormInput labelHtmlFor="cvv" label="CVV" />
                <Field
                  type="text"
                  name="cvv"
                  placeholder="CVV"
                  className="w-24 h-9 p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500 mt-2  text-sm  md:text-lg placeholder-Grises/350 mb-4"
                />
                <ErrorMessage
                  name="cvv"
                  component="p"
                  className="text-red-500 text-sm mb-4"
                />
              </div>
            </div>
            <div className="flex mt-8 md:mt-4 w-64 mx-auto">
              <Button type="submit" text="Agregar" variant="filled" />
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default VincularTarjeta;
