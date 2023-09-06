const MOVIMENTAPI = [{
    id: 1,
    nombre: "maria alejandra suarez",
    date: "20 ago",
    success: "Dinero Enviado",
    money: "20.00"
},
{
    id: 2,
    nombre: "Jose Juan Viñeda",
    date: "20 ago",
    success: "Dinero recibido",
    money: "20.00"
}
]

function ApiMovimiento(){
    return(
        <>
            {MOVIMENTAPI.map(({id, date, success, nombre, money}) => 
        <div key={id} className='flex justify-start items-center w-full '>
        
        <div className='lg:w-16 md:w-12 w-10 lg:h-14 md:h-10 h-10  rounded-full bg-Morado/700 flex justify-center items-center mr-2 '>
            <span className='lg:text-2xl md:text-base text-sm  uppercase text-white'>j</span>
        </div>
        <div className=' flex flex-col justify-start items-start tracking-wide w-1/2'>
        
        <h4 className='capitalize font-bold  lg:text-base md:text-sm text-[11px] '> {nombre}</h4>
        <div className='flex justify-left items-center w-full h-fit '>
        <span className='lg:text-base md:text-sm text-xs'>{date}</span> <ul className='md:ml-6 ml-2'><li className='md:list-disc  lg:text-base md:text-sm text-xs '>{success}</li></ul>
        
        </div>
        </div>
        <div className='flex justify-end  lg:w-1/2 md:w-1/3 w-fit'>
        <span className='font-bold lg:text-[1.5rem] md:text-[1rem] text-xs tracking-wide text-Morado/700 leading-6'>-${money}</span>
        </div>
        </div>
        
        )}
        </>
    
    )


}
export default ApiMovimiento