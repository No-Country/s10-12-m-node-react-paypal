'use client'
import React, { useState } from 'react';

function SelectFirsView({ onSelectionChange, onOptionChange }) {
  const [selectedCurrency, setSelectedCurrency] = useState('-');
  const [select, setSelect] = useState('');

  const currencyFormats = {
    usd: { currency: 'USD', style: 'currency', minimumFractionDigits: 0 },
    mxn: { currency: 'MXN', style: 'currency', minimumFractionDigits: 0 },
    eur: { currency: 'EUR', style: 'currency', minimumFractionDigits: 0 },
    brl: { currency: 'BRL', style: 'currency', minimumFractionDigits: 0 },
    arg: { currency: 'ARG', style: 'currency', minimumFractionDigits: 0 },
    uyu: { currency: 'UYU', style: 'currency', minimumFractionDigits: 0 },
    cop: { currency: 'COP', style: 'currency', minimumFractionDigits: 0 },
    clp: { currency: 'CLP', style: 'currency', minimumFractionDigits: 0 },
    pen: { currency: 'PEN', style: 'currency', minimumFractionDigits: 0 },
    nio: { currency: 'NIO', style: 'currency', minimumFractionDigits: 0 },
    vef: { currency: 'VEF', style: 'currency', minimumFractionDigits: 0 },
  };

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

    if (currencyFormats[selectedCurrency]) {
      formattedValue = new Intl.NumberFormat('en-US', currencyFormats[selectedCurrency]).format(sanitizedValue);
    }

    setSelect(formattedValue);
    onSelectionChange(formattedValue);
  };

  const isCurrencySelected = selectedCurrency !== '-';
  const inputPlaceholder = isCurrencySelected ? selectedCurrency : '';

  return (
    <div className='flex items-center lg:mt-0 md:mt-2 mt-4'>
      <select
        required
        name='username'
        id='Monto'
        onChange={handleCurrencyChange}
        value={selectedCurrency}
        className='placeholder:font-semibold appearance-none placeholder:text-Grises/500 placeholder:opacity-40 bg-[#F8FAFC] opacity-75 border border-gray-300 text-Grises/600 text-sm rounded-tl-lg rounded-bl-lg block lg:p-2.5 p-4 border-t-Grises/500 border-l-Grises/500 border-r-Grises/350 border-b-Grises/500 focus:bg-transparent'
      >
        <option value='-' className='text-Grises/500'>-</option>
        {Object.keys(currencyFormats).map((currencyCode) => (
          <option key={currencyCode} value={currencyCode} className='text-Grises/500'>
            {currencyCode.toUpperCase()}
          </option>
        ))}
      </select>
      <input
        type='text'
        placeholder={inputPlaceholder}
        value={isCurrencySelected ? select : ''}
        onChange={isCurrencySelected ? handleAmountChange : null}
        readOnly={!isCurrencySelected}
        className={`placeholder:uppercase placeholder:font-semibold placeholder:text-Grises/500 placeholder:opacity-40 bg-transparent border border-t-Grises/500 border-r-Grises/500 border-l-Grises/350 border-b-Grises/500 text-Grises/600 text-sm rounded-br-lg rounded-tr-lg block w-full lg:p-2.5 p-4 ${
          isCurrencySelected ? '' : 'pointer-events-none'
        }`}
      />
    </div>
  );
}

export default SelectFirsView;
