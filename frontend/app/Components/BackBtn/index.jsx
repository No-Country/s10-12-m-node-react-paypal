import React from "react";
import { useRouter } from 'next/navigation';
import {ArrowSmallLeftIcon} from "@heroicons/react/24/outline";

function BackBtn({ruta}) {
    const router = useRouter();
    const handleClick = () => {
        if (ruta) {
          router.push(ruta);
        } else {
          window.history.back();
        }
      };
    
  return (
    <button
        onClick={handleClick}
      className="absolute top-2 left-4 w-6 h-6 md:left-40 md:top-10 md:w-8 md:h-8 focus:outline-none hover:border-2 border-2 duration-300 border-Morado/R200 rounded-full hover:border-Grises/550"
    >
      <ArrowSmallLeftIcon />
    </button>
  );
}

export default BackBtn;
