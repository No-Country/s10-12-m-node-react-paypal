'use client'
import   { useState } from 'react';
import React from 'react';

export function useForm() {
    const [formData, setFormData] = useState({
        amount: 0, 
        nickName: '',
        concept: '',
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
    

    return {
        formData,
        handleInputChange,
        updateFormData 
    };
}