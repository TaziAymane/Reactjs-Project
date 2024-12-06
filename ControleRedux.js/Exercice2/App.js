import { BrowserRouter ,Routes , Route} from "react-router-dom";
import Ajouter from "./Ajouter";
import Modifier from "./Modifier";
export default function App(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Ajouter />} />
            <Route path="/modifier/:id" element={<Modifier />} />
        </Routes>
        </BrowserRouter>
    )
}