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

        console.log("Updated FormData:", formData);
    };

    return {
        formData,
        handleInputChange
    };
}