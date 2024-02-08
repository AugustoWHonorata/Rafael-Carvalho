import FotoETitulo from "../../FotoETitulo"
import Portfolio from "../../Portfolio"
import Orcamento from "../../Orcamento"
import Navbar from "../../MenuSuspenso/NavBar"

function Principal () {
    return(
        <>
         <FotoETitulo/>
         <Navbar/>
         <Portfolio/>
         <Orcamento/>
        </>
    )
}

export default Principal