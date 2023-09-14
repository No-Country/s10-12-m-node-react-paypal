'use client'
import ButtonChangePass from "./ButtonChangePass";
import ButtonDeleteAccount from "./DeleteButton";

export default function ConfigCard (){
    return(
        <div className="flex-col w-72 md:w-7/12 bg-Grises/50 shadow rounded-xl  py-5 md:p-14 px-4 md:px-20 gap-10">
            <h1 className="flex text-Morado/900 font-bold text-2xl md:text-4xl my-3">Configuración</h1>

            <div className="md:grid md:grid-cols-3 gap-5 my-3 md:mr-5">
                <div className="col-span-2">
                    <h2 className="text-xs font-medium my-3 ">CONTRASEÑA</h2>
                    *********
                </div>
                <div className="flex md:items-end mt-5">
                    <ButtonChangePass />
                </div>
                <div className="col-span-2 mb-9 mt-9">
                    <h2 className="text-xs font-medium my-3">ELIMINAR CUENTA</h2>
                    <p className="text-sm font-normal">Si eliminas la cuenta, se eliminarán de manera permanente todos los proyectos y tareas que están relacionados a tu perfil y se perderán toda tu información. </p>
                </div>
                <div className="flex md:items-center ml-0 md:ml-5">
                    <ButtonDeleteAccount />
                </div>
            </div>
        </div>
    )
}