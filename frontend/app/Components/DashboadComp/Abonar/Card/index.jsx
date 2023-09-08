'use client'
import React from 'react';
import Button from "../../../Button";

function Card({ icon, buttonText, onClick }) {
  return (
    <div className="flex flex-col items-center md:items-start ml-0 md:ml-8 mt-10 md:mt-0">
      <div className="bg-Azul/50 border-Azul/800 border w-52 h-52 rounded-lg mb-4 md:mb-5 p-14">
        {icon}
      </div>
      <Button
        variant="filled"
        onClick={onClick}
        text={buttonText}
      />
    </div>
  );
}

export default Card;
