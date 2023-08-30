import React from 'react';
import Button from "@/app/Components/Button";
import { BsCalendar2DateFill } from "react-icons/bs";

function ButtonsCtn() {
  return (
    <div className="flex justify-end mb-4">
    <Button text="Entradas" variant="empty">
      Entradas
    </Button>
    <Button text="Salidas" variant="empty">
      Salidas
    </Button>
    <button className="text-gray-900 text-sm ml-3 font-semibold px-4 py-2 border border-Morado/500 rounded hover:bg-purple-100 transition duration-300">
      <div className="flex items-center">
        Por fecha
        <BsCalendar2DateFill className="ml-3" />
      </div>
    </button>
  </div>

  )
}

export default ButtonsCtn