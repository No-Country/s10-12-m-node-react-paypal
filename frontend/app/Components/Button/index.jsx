
export default function Button( {text, variant, onClick, type, disabled }) {
    
    let buttonClassName = 'button';
  
    if (variant === 'filled') {
      buttonClassName += ` ${
        disabled
          ? 'bg-Morado/R200 text-gray-600 cursor-not-allowed  capitalize duration-300 w-full h-10 rounded-md py-3.5 px-7 flex items-center justify-center text-white'
          : 'bg-Morado/700 hover:bg-Morado/900 capitalize duration-300 w-full h-10 rounded-md py-3.5 px-7 flex items-center justify-center text-white'
      }`;
    } else if (variant === 'empty') {
      buttonClassName += " text-gray-900 text-sm ml-3 font-semibold px-2 py-1 sm:px-4 sm:py-2 border border-Morado/500 rounded hover:bg-purple-100 transition duration-300"  ;
    }
  
    return (
      <button  className={buttonClassName } onClick={onClick} type={type} disabled={disabled}>
        {text}
      </button>
    );
  }
  
