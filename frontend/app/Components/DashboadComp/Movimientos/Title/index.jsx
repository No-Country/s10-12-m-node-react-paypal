import React from "react";

function Title({ accNumber }) {
  return (
    <h1 className="text-3xl tracking-6 font-medium mb-4">
      Cuenta: {accNumber}
    </h1>
  );
}

export default Title;
