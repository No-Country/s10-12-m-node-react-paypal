'use client'
import   { useState } from 'react';
import React from 'react';

export function useForm() {
    const [formData, setFormData] = useState("");

    const handleInputChange = (inputType, newValue) => {
        setFormData(prevData => ({
            ...prevData,
            [inputType]: newValue
        }));

    };

    return {
        formData,
        handleInputChange
    };
}