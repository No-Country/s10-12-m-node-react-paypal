'use client'
import React, { useState } from 'react';

function SelectFirsView({ onSelectionChange, onOptionChange }) {
  const [selectedCurrency, setSelectedCurrency] = useState('-'); // Valor predeterminado
  const [select, setSelect] = useState('');

  const handleCurrencyChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedCurrency(selectedOption);
    onOptionChange(selectedOption);

    if (selectedOption === '-') {
      setSelect('');
      onSelectionChange('');
    }
  };

  const handleAmountChange = (event) => {
    const inputValue = event.target.value;
    const sanitizedValue = inputValue.replace(/\D/g, '');

    let formattedValue = '';

    if (selectedCurrency === 'usd' || selectedCurrency === 'arg') {
      formattedValue = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
      }).format(sanitizedValue);
    } else if (selectedCurrency === 'eu') {
      formattedValue = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 0,
      }).format(sanitizedValue);
    }

    setSelect(formattedValue);
    onSelectionChange(formattedValue);
  };

  return (
    <div className='flex items-center lg:mt-0 md:mt-2 mt-4'>
      <select
        required
        name='username'
        id='Monto'
        onChange={handleCurrencyChange}
        value={selectedCurrency}
        className='placeholder:font-semibold appearance-none  placeholder:text-Grises/500 placeholder:opacity-40 bg-[#F8FAFC] opacity-75 border border-gray-300 text-Grises/600 text-sm rounded-tl-lg rounded-bl-lg  block  lg:p-2.5 p-4   border-t-Grises/500 border-l-Grises/500 border-r-Grises/350 border-b-Grises/500 focus:bg-transparent '
      >
        <option value='-' className='text-Grises/500'>-</option>
        <option value='usd' className='text-Grises/500'>USD</option>
        <option value='arg'>ARG</option>
        <option value='eu'>EU</option>
      </select>
      <input
        type='text'
        placeholder={selectedCurrency === '-' ? '' : selectedCurrency}
        value={selectedCurrency === '-' ? '' : select}
        onChange={selectedCurrency === '-' ? null : handleAmountChange}
        readOnly={selectedCurrency === '-'}
        className={selectedCurrency === '-' ? 'placeholder:uppercase placeholder:font-semibold placeholder:text-Grises/500 placeholder:opacity-40 bg-transparent border border-t-Grises/500 border-r-Grises/500 border-l-Grises/350 border-b-Grises/500 text-Grises/600 text-sm rounded-br-lg rounded-tr-lg  block w-full  lg:p-2.5 p-4  pointer-events-none': 'placeholder:uppercase placeholder:font-semibold placeholder:text-Grises/500 placeholder:opacity-40 bg-transparent border border-t-Grises/500 border-r-Grises/500 border-l-Grises/350 border-b-Grises/500 text-Grises/600 text-sm rounded-br-lg rounded-tr-lg  block w-full lg:p-2.5 p-4 '}
      />
    </div>
  );
}

export default SelectFirsView;
