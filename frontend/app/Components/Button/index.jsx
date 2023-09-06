

export default function Button({ text, variant, onClick, type }) {
    
    let buttonClassName = 'button';
  
    if (variant === 'filled') {
      buttonClassName += ' bg-Morado/700  w-full h-10 rounded-md py-3.5 px-7 flex items-center justify-center text-white';
    } else if (variant === 'empty') {
      buttonClassName += ' text-Azul/800 ml-3 font-semibold px-4 py-2 rounded hover:bg-purple-100 transition duration-300';
    }
  
    return (
      <button className={buttonClassName} onClick={onClick} type={type}>
        {text}
      </button>
    );
  }
  
