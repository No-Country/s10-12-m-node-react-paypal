'use client'
import React, {useContext, useEffect} from "react";
import Title from "@/app/Components/DashboadComp/Movimientos/Title";
import ButtonsCtn from "@/app/Components/DashboadComp/Movimientos/Botones";
import MovDetail from "@/app/Components/DashboadComp/Movimientos/MovDetail";
import { useRouter } from 'next/navigation';
import { AuthContext } from "../../context/auth-context";


function Movimientos() {
  const router = useRouter();
  const authContext = useContext(AuthContext);
  const movimientosEjemplo = [
    { id: 1, amount: "000.00", signo: "positivo" },
    { id: 2, amount: "000.00", signo: "negativo" },
    { id: 3, amount: "000.00", signo: "negativo" },
    { id: 4, amount: "000.00", signo: "positivo" },
  ];

  useEffect(() => {
    // checks if the user is authenticated
console.log("esta aut", authContext.isUserAuthenticated())
    authContext.isUserAuthenticated()
      ? router.push("/dashboard/movimientos")
      : router.push("/loginPage");
  }, []);

  return (
    <div className="w-full  flex justify-center ">
      <div className=" px-14 py-12 w-11/12 sm:w-5/6 md:w-4/6 lg:w-3/6 xl:w-3/6 mt-10 mb-10  border-rose-200 bg-slate-100 shadow-lg rounded-md">
        {/* Título */}
        <Title accNumber="00000000" />

        {/* Botones */}
        <ButtonsCtn />

        {/* Movimientos detalle */}
        {movimientosEjemplo.map((movimiento) => (
          <MovDetail
            key={movimiento.id}
            amount={movimiento.amount}
            signo={movimiento.signo}
          />
        ))}
      </div>
    </div>
  );
}

export default Movimientos;
