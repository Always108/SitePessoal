import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/inicio/Inicio"
import Sobre from "./pages/sobre/Sobre"
import Projetos from "./pages/projetos/Projetos"
import Header from "./components/header/Header";
import { GlobalStyled } from "./components/header/styled";


export default function App() {
  return (
    <>
    <GlobalStyled/>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/sobre" element={<Sobre/>}/>
        <Route path="/projetos" element={<Projetos/>}/>
      </Routes>
   </BrowserRouter>

    </>
  )
}
