import React from 'react'

const MOVIMENTAPI = [{
    id: 1,
    nombre: "maria alejandra suarez",
    date: Date.now(),
    success: "Dinero Enviado",
    money: "20.00"
},
{
    id: 2,
    nombre: "Jose Juan Viñeda",
    date: Date.now(),
    success: "Dinero recibido",
    money: "20.00"
}
]


function MovimientComp() {




  return (
  

    <div className='bg-slate-100  rounded-md w-[54rem] h-[26rem]  shadow-lg   flex justify-center items-center  '>
    <div className='flex flex-col h-2/3 w-3/4 justify-between items-start'>
     <h3 className='text-2xl font-medium text-Grises/600 first-letter:uppercase text-center'>movimientos recientes</h3>
     <div className='flex justify-between items-center w-full ' >
        {MOVIMENTAPI.map(({id, date, success, nombre, money}) => 
              <div key={id} className='flex justify-start items-center w-full'>

              <div className='w-[3.6rem] h-14 rounded-full bg-Morado/700 flex justify-center items-center mr-2'>
                  <span className='text-2xl uppercase text-white'>j</span>
              </div>
              <div className=' flex flex-col justify-start items-start tracking-wide'>
     
              <h4 className='capitalize font-bold  text-base '> {nombre}</h4>
              <div className='flex justify-between items-center w-full '>
              <span>{date}</span> <ul className='ml-8'><li className='list-disc'>{success}</li></ul>
     
              </div>
              </div>
              <div>
             <span className='font-bold text-[1.5rem] tracking-wide text-Morado/700 leading-6'>-${money}</span>
         </div>
              </div>
        
        )}
   
        >
     </div>
     
     <p className='leading-5 text-Azul/500 first-letter:uppercase cursor-pointer hover:underline'>mostrar todos</p>
     </div>
 </div>                       
                  

           
   
  )
}

export default MovimientComp