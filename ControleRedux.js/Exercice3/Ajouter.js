
import { useState } from "react";
import { ajouter } from "./action";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { supprimer } from "./action";

export default function Ajouter(){
    const data = useSelector(data=>data.products)
    const lastid = useSelector(data=>data.products.length + 1)
    const [nom,setnom] = useState('')
    const [marque,setmarque] = useState('')
    const [prix,setprix] = useState('')
    const [quantité,setquantité] = useState('')
    const dispatch = useDispatch()

    function Add(e){
        e.preventDefault()
        const product = {
            id:parseInt(lastid),
            nom:nom,
            marque:marque,
            prix:Number(prix),
            quantité:quantité
        }
        dispatch(ajouter(product))
    }

    return(
        <>
        <form onSubmit={Add} className="container">
            <h2>Ajouter Produits :</h2>
            <label className="form-label">Id</label>
            <input type='text' className="form-control my-2" value={lastid} />
            <label className="form-label">Nom</label>
            <input type='text' className="form-control my-2" onChange={(e)=>{setnom(e.target.value)}} />
            <label className="form-label">Specialite</label>
            <input type='text' className="form-control my-2" onChange={(e)=>setmarque(e.target.value)} />
            <label className="form-label">prixphoneite</label>
            <input type='text' className="form-control my-2" onChange={(e)=>(setprix(e.target.value))} />
            <label className="form-label">quantité</label>
            <input type="text" className="form-control my-2" onChange={(e)=>{setquantité(e.target.value)}} />
            <button className="btn btn-primary">Ajouter</button>
        </form>
        <table className="container table table-hover my-5">
            <tr>
                <th>id</th>
                <th>Nom</th>
                <th>Specialite</th>
                <th>prixphone</th>
                <th>quantité</th>
                <th>action</th>
            </tr>
            {
                data.map((d,i)=>{
                    return(
                        <tr key={i}>
                            <td>{d.id}</td>
                            <td>{d.nom}</td>
                            <td>{d.marque}</td>
                            <td>{d.prix}</td>
                            <td>{d.quantité}</td>
                            <td>
                                <Link className="btn btn-success" to={`/modifier/${d.id}`}>Modifier</Link>
                                <button className="btn btn-danger" onClick={()=>{dispatch(supprimer(d.id))}}>Suuprimer</button>
                            </td>
                        </tr>
                    )
                })
            }
        </table>
        </>
        
    )
}