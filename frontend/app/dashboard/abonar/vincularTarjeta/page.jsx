"use client";
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import BackBtn from "@/app/Components/BackBtn";
import Button from "@/app/Components/Button";
import FormInput from "@/app/Components/FormComp/Input";

const VincularTarjeta = () => {
  const cardSchema = Yup.object().shape({
    titular: Yup.string().required("Campo requerido"),
    numero: Yup.number().required("Campo requerido"),
    fecha: Yup.string().required("Campo requerido"),
    cvv: Yup.number().required("Campo requerido"),
  });

  const handleSubmit = () => {
    console.log("Tarjeta agregada")
  };

  return (
    <div className="w-full h-full  flex justify-center relative">
      <BackBtn />

      <div className=" px-14 py-12 ml-8 mr-4 lg:w-3/6 mt-10 mb-10 md:mt-10 md:mb-10 md:pl-40 md:pr-40 border-rose-200 bg-white shadow-lg rounded-md ">
        <Formik
          initialValues={{ titular: "", numero: "", fecha: "", cvv: "" }}
          validationSchema={cardSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            {/* Título */}
            <h2 className="font-bold text-2xl md:text-4xl flex justify-center items-center text-Azul/900 mb-14 md:mb-10">
              Vincular tarjeta
            </h2>
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
            <FormInput labelHtmlFor="numero" label="Numero de tarjeta" />
            <Field
              type="text"
              name="numero"
              placeholder="Introduzca los 16 digitos de la tarjeta"
              className="w-full h-9 p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500 mt-2  text-xs  md:text-lg placeholder-Grises/350 mb-8 md:mb-6"
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
              </div>
              <div className="md:ml-8">
                <FormInput labelHtmlFor="cvv" label="CVV" />
                <Field
                  type="text"
                  name="cvv"
                  placeholder="CVV"
                  className="w-24 h-9 p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500 mt-2  text-sm  md:text-lg placeholder-Grises/350 mb-4"
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
