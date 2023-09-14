"use client"
import ChangePasswordForm from "@/app/Components/PerfilComp/ChangePassForm";

export default function ChangePassword (){
    return(
        <div className="flex">
        <div className=" w-72 md:w-7/12 mx-auto my-8  bg-Grises/50 shadow rounded-xl py-5 md:py-14 px-4 md:px-20 gap-10">
            <div>
                <h2 className="flex text-Morado/900 font-bold text-2xl md:text-4xl my-3">Cambiar contraseña</h2>
            </div>
            <div className="my-8">
                <p>Por favor genere una nueva contraseña que incluya: </p>
                <ul className="list-disc pl-4 mt-4" >
                    <li>Mínimo 8 caracteres, máximo 20.</li>
                    <li>Mayúsculas y minúsculas</li>
                    <li>Símbolos</li>
                    <li>Sin incluir espacios</li>
                </ul>
            </div>
            <div>
                <ChangePasswordForm />
            </div>
            </div>
        </div>
    )
}