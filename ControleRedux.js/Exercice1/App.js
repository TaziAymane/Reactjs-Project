import Ajouter from "./Ajouter";
import Modifier from "./Modifier";
import Search from "./Search";
import { BrowserRouter , Routes , Route, Link } from "react-router-dom";

export default function App(){
    return(
        <BrowserRouter>
        <Link to={'/'} className="container nav-link">Home</Link>
        <Link to={'/Search'} className="container nav-link">Search</Link>
        <Routes>
            <Route path="/" element={<Ajouter />} />
            <Route path="/modifier/:id" element={<Modifier />}/>
            <Route path="/Search" element={<Search />} />
        </Routes>
        </BrowserRouter>
    )
}