'use client'
import   { useState } from 'react';
import React from 'react';

export function useForm() {
    const [formData, setFormData] = useState({
        amount: '', // Campo para el monto
        nickName: '',
        concept: '',
        accountNumber: '',
    });
    const handleInputChange = (inputType, newValue) => {
        setFormData(prevData => ({
            ...prevData,
            [inputType]: newValue
        }));
    };
    const updateFormData = (data) => {
        setFormData(data);
      };
    

    console.log("FormData:", formData)

    return {
        formData,
        handleInputChange,
        updateFormData 
    };
}