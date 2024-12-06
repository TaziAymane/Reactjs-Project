import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { modifier } from "./action";
export default function Modifier(){
    const {id} = useParams()
    const produit = useSelector(data=>data.products.find((d)=>{
        return d.id === parseInt(id)
    }))
    const [nom,setnom] = useState(produit.nom)
    const [marque,setmarque] = useState(produit.marque)
    const [prix,setprix] = useState(produit.prix)
    const [quantite,setquantite] = useState(produit.quantite)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function modfy(e){
        e.preventDefault()
        const produitm = {
            id:produit.id,
            nom:nom,
            marque:marque,
            prix:prix,
            quantite:quantite
        }
        dispatch(modifier(produitm))
        navigate('/')
    }

    return( 
        <form onSubmit={modfy} className="container">
        <h2>Modifier produit :</h2>
        <input type='text' className="form-control my-3" value={id} />
        <input type='text' className="form-control my-3" onChange={(e)=>{setnom(e.target.value)}}  value={nom} />
        <input type='text' className="form-control my-3" onChange={(e)=>setmarque(e.target.value)} value={marque} />
        <input type='text' className="form-control my-3" onChange={(e)=>(setprix(e.target.value))}  value={prix}/>
        <input type="text" className="form-control my-3" onChange={(e)=>{setquantite(e.target.value)}}  value={quantite}/>
        <button className="btn btn-success my-3">Modifier</button>
    </form>
    )
}