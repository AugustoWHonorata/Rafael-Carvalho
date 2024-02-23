import EstilosGlobais from "./components/EstilosGlobais"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Principal from "./components/Paginas/Principal"


function AppRoutes() {

  return (
    <BrowserRouter>
    <EstilosGlobais />
        <Routes>
          <Route path="/" element={<Principal/>} />
        </Routes>
      </BrowserRouter>
  
  )
}

export default AppRoutes
