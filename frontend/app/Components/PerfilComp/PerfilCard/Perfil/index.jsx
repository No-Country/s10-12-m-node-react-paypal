
import TableId, { ButtonLogOut } from "./table";

export default function PerfilCard (){
    return(
        <div className="flex-col relative w-72 md:w-7/12 md:h-80 bg-Grises/50 shadow rounded-xl py-5 md:py-14 px-4 md:px-20 mt-5 gap-10">
            <h1 className="flex text-Morado/900 font-bold text-2xl md:text-4xl md:my-3">Perfil</h1>
            <div className="gap-6 my-3">
                <TableId/>
            </div>
            
            <ButtonLogOut/>
            
        </div>
    )
}