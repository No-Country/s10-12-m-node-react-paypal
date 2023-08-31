export default function ConfigCard (){
    return(
        <div className="flex-col w-7/12 bg-Grises/50 shadow rounded-xl py-14 px-20 gap-10">
            <h1 className="flex text-Morado/900 font-bold text-4xl my-3">Configuración</h1>

            <div className="grid grid-cols-3 gap-5">
                <div className="col-span-2">
                    <h2 className="text-xs font-medium my-3 ">CONTRASEÑA</h2>
                    *********
                </div>
                <div className="flex items-end">
                    <button className="bg-Morado/700  w-41 h-10 rounded-md py-3 px-5 flex items-center justify-center text-white whitespace-nowrap text-center ml-5">Cambiar constraseña</button>
                </div>
                <div className="col-span-2 mb-9">
                    <h2 className="text-xs font-medium my-3">ELIMINAR CUENTA</h2>
                    <p className="text-sm font-normal">Si eliminas la cuenta, se eliminarán de manera permanente todos los proyectos y tareas que están relacionados a tu perfil y se perderán toda tu información. </p>
                </div>
                <div className="flex items-center ml-5">
                    <button className="bg-Morado/700  w-41 h-10 rounded-md py-3 px-5 flex items-center justify-center text-white whitespace-nowrap text-center">Eliminar cuenta</button>
                </div>
            </div>
        </div>
    )
}