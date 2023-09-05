'use client'
import React, {useContext, useState, useEffect} from "react";
import Title from "@/app/Components/DashboadComp/Movimientos/Title";
import ButtonsCtn from "@/app/Components/DashboadComp/Movimientos/Botones";
import MovDetail from "@/app/Components/DashboadComp/Movimientos/MovDetail";
import { useRouter } from 'next/navigation';
import { AuthContext } from "../../context/auth-context";


function Movimientos() {
  const router = useRouter();
  const authContext = useContext(AuthContext);
  const [movimientosFiltrados, setMovimientosFiltrados] = useState([]);
  const [filtro, setFiltro] = useState("todos");
  const movimientosEjemplo = [
    { id: 1, concepto: "Transferencia", fecha: "Dom Jun 18 2023 07:24", amount: "000.00", signo: "positivo" },
    { id: 2, concepto: "Pago de servicios", fecha: "Sab May 13 2023 01:25", amount: "000.00", signo: "negativo" },
    { id: 3, concepto: "Pago de servicios", fecha: "Dom Jun 18 2023 07:24", amount: "000.00", signo: "negativo" },
    { id: 4, concepto: "Transferencia", fecha: "Vier Mar 17 2023 00:49", amount: "000.00", signo: "positivo" },
  ];

  useEffect(() => {
    // checks if the user is authenticated
console.log("esta aut", authContext.isUserAuthenticated())
    authContext.isUserAuthenticated()
      ? router.push("/dashboard/movimientos")
      : router.push("/loginPage");
  }, []);

  useEffect(() => {
    // Filtrar movimientos según el filtro seleccionado
    if (filtro === "entradas") {
      setMovimientosFiltrados(movimientosEjemplo.filter((mov) => mov.signo === "positivo"));
    } else if (filtro === "salidas") {
      setMovimientosFiltrados(movimientosEjemplo.filter((mov) => mov.signo === "negativo"));
    } else {
      setMovimientosFiltrados(movimientosEjemplo);
    }
  }, [filtro]);

  const handleFiltroClick = (filtro) => {
    setFiltro(filtro);
  };
  
  return (
    <div className="w-full  flex justify-center ">
      <div className="px-4 sm:px-14 py-12  md:w-4/6 lg:w-3/6 xl:w-3/6 mt-10 mb-10 border-rose-200 bg-slate-100 shadow-lg rounded-md">
        {/* Título */}
        <Title accNumber="00000000" />

        {/* Botones */}
        <ButtonsCtn onFiltroClick={handleFiltroClick}/>

        {/* Movimientos detalle */}
        {movimientosFiltrados.map((movimiento) => (
          <MovDetail
            key={movimiento.id}
            fecha={movimiento.fecha}
            concepto={movimiento.concepto}
            amount={movimiento.amount}
            signo={movimiento.signo}
          />
        ))}
      </div>
    </div>
  );
}

export default Movimientos;
