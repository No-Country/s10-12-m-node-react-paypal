

export default function Button({ text, variant, onClick, type }) {
    
    let buttonClassName = 'button';
  
    if (variant === 'filled') {
      buttonClassName += ' bg-Morado/700 hover:bg-Morado/900 capitalize duration-300  w-full h-10 rounded-md py-3.5 px-7 flex items-center justify-center text-white';
    } else if (variant === 'empty') {
      buttonClassName += " text-gray-900 text-sm ml-3 font-semibold px-4 py-2 border border-Morado/500 rounded hover:bg-purple-100 transition duration-300"  ;
    }
  
    return (
      <button className={buttonClassName } onClick={onClick} type={type}>
        {text}
      </button>
    );
  }
  
