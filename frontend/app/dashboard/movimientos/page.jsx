"use client";
import React, { useContext, useState, useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
import Title from "@/app/Components/DashboadComp/Movimientos/Title";
import ButtonsCtn from "@/app/Components/DashboadComp/Movimientos/Botones";
import MovDetail from "@/app/Components/DashboadComp/Movimientos/MovDetail";
import { useRouter } from "next/navigation";
import { AuthContext } from "../../context/auth-context";
import BackBtn from "@/app/Components/BackBtn";
import { verMovimientos } from "@/app/Components/DashboadComp/api/VerMovimientos";
import { formatearFecha, traducirTipo, signo } from "./configuracionData";

function Movimientos() {
  const router = useRouter();
  const authContext = useContext(AuthContext);
  const userId = authContext.user?.id;
  const [movimientosFiltrados, setMovimientosFiltrados] = useState([]);
  const [filtro, setFiltro] = useState("todos");
  const [loading, setLoading] = useState(true);
  const [reverseOrder, setReverseOrder] = useState(false);

  const pagoServiciosMock = [
    {
      date: "2023-09-09T02:40:06.732Z",
      Detail_transaction: {
        amount: 100,
        payment_method: "pago servicios",
      },
    },
    {
      date: "2023-09-10T02:35:06.732Z",
      Detail_transaction: {
        amount: 150,
        payment_method: "pago servicios",
      },
    },
    {
      date: "2023-09-11T02:20:06.732Z",
      Detail_transaction: {
        amount: 50,
        payment_method: "pago servicios",
      },
    },
  ];

  const [movimientos, setMovimientos] = useState(pagoServiciosMock);

  

  useEffect(() => {
    // checks if the user is authenticated
    authContext.isUserAuthenticated()
      ? router.push("/dashboard/movimientos")
      : router.push("/");
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const data = await verMovimientos(authContext);
        //console.log(data);

        if (data !== null) {
          //setMovimientos(data.listTransactions);
          setMovimientos((prevMovimientos) => [
            ...prevMovimientos,
            ...data.listTransactions,
          ]);
          setLoading(false);
        } else {
          console.error("La respuesta de verMovimientos es null.");
          setLoading(false);
        }
      } catch (error) {
        console.error("Error al obtener movimientos:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, [authContext]);


  useEffect(() => {
    // Filtrar movimientos según el filtro seleccionado
    let filteredMovimientos = [...movimientos];

    if (filtro === "entradas") {
      filteredMovimientos = filteredMovimientos.filter(
        (mov) => mov.receiving_user == userId
      );
    } else if (filtro === "salidas") {
      filteredMovimientos = filteredMovimientos.filter(
        (mov) => mov.receiving_user != userId
      );
    }

    // Invierte el orden si reverseOrder es verdadero
    if (reverseOrder) {
      filteredMovimientos.reverse();
    }

    setMovimientosFiltrados(filteredMovimientos);
  }, [filtro, movimientos, userId, reverseOrder]);

  const handleFiltroClick = (filtro) => {
    setFiltro(filtro);
  };

  const handleTodosClick = () => {
    setReverseOrder(!reverseOrder);
    setFiltro("todos"); // También puedes establecer el filtro aquí si lo deseas
  };

  //console.log("movs", movimientosFiltrados);
  return (
    <div className="w-full h-full  flex justify-center relative ">
      <BackBtn />
      <div className="px-4 sm:px-14 py-12  md:w-4/6 lg:w-3/6 xl:w-3/6 mt-10 mb-10 border-rose-200 bg-slate-100 shadow-lg rounded-md">
        {/* Título */}
        <Title />

        {/* Botones */}
        <ButtonsCtn
          onFiltroClick={handleFiltroClick}
          handleTodosClick={handleTodosClick}
        />

        {loading ? (
          <div className="flex justify-center items-center mb-8 mt-12">
            <FaSpinner className="animate-spin" size={32} />
          </div>
        ) : (
          <ul>
            {/* Movimientos detalle */}
            {movimientosFiltrados.map((movimiento) => (
              <MovDetail
                key={movimiento.id}
                fecha={formatearFecha(movimiento.date)}
                concepto={traducirTipo(
                  movimiento.Detail_transaction.payment_method
                )}
                amount={(movimiento.Detail_transaction.amount).toFixed(2)}
                signo={
                  userId == movimiento.receiving_user ? "positivo" : "negativo"
                }
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Movimientos;
