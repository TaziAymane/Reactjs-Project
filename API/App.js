import { useEffect, useState } from "react";
import axios from 'axios'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from './Header'
import Content from "./Content";
import Info from "./Info";
import Contactez from "./Contacter-nous";
import Men from "./Men";
import Women from "./Women";
import Panier from "./Panier/Panier";
export default function App(){
    const [parfums,setparfums] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost/Api/api.php')
    .then(respons=>setparfums(respons.data))
    })
    return(
        <>
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Content parfums={parfums} />} />
            <Route path="/info/:id" element={<Info parfums={parfums} />} />
            <Route path="/Men" element={<Men parfums={parfums}/>}/>
            <Route path="/Women" element={<Women parfums={parfums}/>}/>
            <Route path="/Panier" element={<Panier />}/>
            <Route path="/Contactez" element={<Contactez />} />
        </Routes>
        </BrowserRouter>
        </>
        
    )
}