import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home/home';
import Adicao from './pages/Adicao/adicao';
import Erro from './pages/Error/error';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';

function RoutesApp() {
    return(
        <BrowserRouter>

            <Header/>

            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/adicao" element={<Adicao/>} />
                <Route path="/*" element={<Erro/>} />
            </Routes>

            <Footer/>
        
        </BrowserRouter>
    );
}

export default RoutesApp;