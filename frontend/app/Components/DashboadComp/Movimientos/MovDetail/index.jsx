import React from "react";

function MovDetail({ amount, signo }) {
    const color = signo === 'positivo'? 'text-Green/400' : 'text-Rojo/400';
  return (
    <div className="px-6 py-3 rounded-md mt-8 shadow-md flex">
      <div className="flex-1">
        <h2 className="text-xl font-medium">Concepto</h2>
        <p className="font-medium mt-3">Fecha de transacción</p>
      </div>
      <div className="flex items-center">
        <p className={`text-right text-3xl font-semibold ${color}`}>
          +${amount}
        </p>
      </div>
    </div>
  );
}

export default MovDetail;
