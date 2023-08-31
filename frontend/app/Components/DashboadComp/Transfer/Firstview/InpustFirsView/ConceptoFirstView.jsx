'use client'
import React, { useState } from 'react'

function ConceptoFirstView({onConceptoChange}) {
  const [conecpto, setConcepto] = useState("");

  const handleConceptoChange = (event) => {
    // Remove any non-digit characters from the input value
    const inputValue = event.target.value;
    
    // Add the currency symbol and update the state
    const newConcepto  = inputValue;
    setConcepto(newConcepto)
    onConceptoChange(newConcepto)

};

  return (
    <div className='flex flex-col pt-2 w-full'>
    <label className=' first-letter:uppercase font-medium text-xl text-Azul/800 ' htmlFor="concept"> concepto</label>
    <input type="text" placeholder='Introduzca concepto de transacción' className='placeholder:font-semibold placeholder:text-Grises/500 placeholder:opacity-40 bg-gray-50 border text-gray-900 text-sm rounded-lg  block w-full p-2.5 border-Grises/500 ' onChange={handleConceptoChange} value={conecpto} />
</div>
  )
}

export default ConceptoFirstView