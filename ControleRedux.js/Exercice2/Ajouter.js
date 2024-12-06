
import { ajouter } from "./action";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { supprimer } from "./action";
import { Link } from "react-router-dom";
export default function Ajouter(){
    const data = useSelector(data=>data.medicament)
    const lastid = useSelector(data=>data.medicament.length + 1)
    const [nom,setnom] = useState('')
    const [dosage,setdosage] = useState('')
    const [form,setform] = useState('')
    const [prix,setprix] = useState('')
    const dispatch = useDispatch()
    function Add(e){
        e.preventDefault()
        const medicament ={
            id:parseInt(lastid),
            nom:nom,
            dosage:dosage,
            form:form,
            prix:Number(prix)
        }
        dispatch(ajouter(medicament))
    }
    return (
        <>
        <form onSubmit={Add} className="container">
            <label className="form-label">id</label>
            <input type="text" className="form-control" value={lastid}/>
            <label className="form-label">Nom</label>
            <input type="text" className="form-control" onChange={(e)=>{setnom(e.target.value)}} />
            <label className="form-label">Dosage</label>
            <input type="text" className="form-control" onChange={(e)=>{setdosage(e.target.value)}} />
            <label className="form-label">form</label>
            <input type="text" className="form-control" onChange={(e)=>{setform(e.target.value)}} />
            <label className="form-label">Prix</label>
            <input type="text" className="form-control" onChange={(e)=>{setprix(e.target.value)}} />
            <button className="btn btn-primary my-3">Ajouter</button>
        </form>
        <table className="container table">
            <tr>
                <th>id</th>
                <th>nom</th>
                <th>dosage</th>
                <th>form</th>
                <th>prix</th>
            </tr>
            {
                data.map((med)=>{
                    return(
                        <tr>
                            <td>{med.id}</td>
                            <td>{med.nom}</td>
                            <td>{med.dosage}</td>
                            <td>{med.form}</td>
                            <td>{med.prix}</td>
                            <td>
                                <Link className='btn btn-success' to={`/modifier/${med.id}`}>Mdifier</Link>
                                <button className="btn btn-danger" onClick={()=>{dispatch(supprimer(med.id))}}>Supprimer</button>
                            </td>
                        </tr>
                    )
                })
            }
        </table>
        </>
    )
}