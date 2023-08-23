import AboutUsComp from "../Components/LandingComp/AboutUs";
import InicioComp from "../Components/LandingComp/Inicio";
import DirectionPage from "../Components/LandingComp/product";

export default function LandingPage() {
    return(
        <div className="w-full  h-fit ">
          <InicioComp/>
          <DirectionPage/>

          <AboutUsComp/>
        </div>
    )
}