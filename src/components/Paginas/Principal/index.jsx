import FotoETitulo from "../../FotoETitulo"
import Orcamento from "../../Orcamento"
import Navbar from "../../MenuSuspenso/NavBar"
import Portfolio from "../../Portfolio"
import QuemSouEu from "../../QuemSouEu"
import CuidadosPrePos from "../../Cuidados"
import MinhaPrimeiraTatto from "../../MinhaPrimeiraTatto"
import PorqueOldSchool from "../../PorqueOldSchool"
import Footer from "../../Footer"

function Principal () {
    return(
        <>
         <FotoETitulo/>
         <Navbar/>
         <Portfolio/>
         <Orcamento/>
         <QuemSouEu/>
         <CuidadosPrePos/>
         <MinhaPrimeiraTatto/>
         <PorqueOldSchool/>
         <Footer/>
        </>
    )
}

export default Principal