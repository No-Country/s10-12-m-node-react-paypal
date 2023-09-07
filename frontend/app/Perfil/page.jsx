import PerfilCard from "../Components/PerfilComp/PerfilCard/Perfil";
import ConfigCard from "../Components/PerfilComp/PerfilCard/ConfigCard";

export default function PerfilPage() {
    return (
        <div className="bg-grises/400 w-full h-full flex flex-col items-center space-y-5" layout="responsive">
            <PerfilCard />
            <ConfigCard />
        </div>
    )
}