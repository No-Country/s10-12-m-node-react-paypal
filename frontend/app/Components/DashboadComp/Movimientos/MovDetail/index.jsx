import React from "react";

function MovDetail({ concepto, fecha, amount, signo }) {
    const color = signo === 'positivo'? 'text-Green/400' : 'text-Rojo/400';
  return (
    <div className="px-6 py-3 rounded-md mt-2 md:mt-6 shadow-md flex">
      <div className="flex-1">
        <h2 className=" text-sm md:text-xl font-medium">{concepto}</h2>
        <p className="text-sm md:text-sm md:font-medium mt-3">{fecha}</p>
      </div>
      <div className="flex items-center">
        <p className={`text-right text-2x1 md:text-3xl font-semibold ${color}`}>
          {signo == "positivo" ? "+" : "-"} ${amount}
        </p>
      </div>
    </div>
  );
}

export default MovDetail;
