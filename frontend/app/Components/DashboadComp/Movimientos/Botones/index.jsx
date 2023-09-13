import React from 'react';
import Button from "@/app/Components/Button";
import { BsCalendar2DateFill } from "react-icons/bs";

function ButtonsCtn({ onFiltroClick, handleTodosClick }) {
  return (
    <div className="flex items-center justify-center mb-4 md:justify-end md:items-start">
    <Button text="Entradas" variant="empty"
    onClick={() => onFiltroClick("entradas")}
    >
      Entradas
    </Button>
    <Button text="Salidas" variant="empty"
    onClick={() => onFiltroClick("salidas")}
    >
      Salidas
    </Button>
    <button className="text-gray-900 text-sm ml-3 font-semibold px-2 py-1 sm:px-4 sm:py-2 border border-Morado/500 rounded hover:bg-purple-100 transition duration-300"
    onClick={handleTodosClick}
    >
      <div className="flex items-center">
        Por fecha
        <BsCalendar2DateFill className="ml-3" />
      </div>
    </button>
  </div>

  )
}

export default ButtonsCtn