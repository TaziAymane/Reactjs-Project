
import { useState } from "react";
import { ajouter } from "./action";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { supprimer } from "./action";

export default function Ajouter(){
    const data = useSelector(data=>data.courses)
    const lastid = useSelector(data=>data.courses.length + 1)
    const [nom,setnom] = useState('')
    const [Description,setDescription] = useState('')
    const [Formateur,setFormateur] = useState('')
    const [Durée,setemail] = useState('')
    const dispatch = useDispatch()

    function Add(e){
        e.preventDefault()
        const cours = {
            id:parseInt(lastid),
            nom:nom,
            Description:Description,
            Formateur:Formateur,
            Durée:Durée
        }
        dispatch(ajouter(cours))
    }

    return(
        <>
        <form onSubmit={Add} className="container">
            <h2>Ajouter Cours :</h2>
            <label className="form-label">Id</label>
            <input type='text' className="form-control my-2" value={lastid} />
            <label className="form-label">Nom</label>
            <input type='text' className="form-control my-2" onChange={(e)=>{setnom(e.target.value)}} />
            <label className="form-label">Description</label>
            <input type='text' className="form-control my-2" onChange={(e)=>setDescription(e.target.value)} />
            <label className="form-label">Formateur</label>
            <input type='text' className="form-control my-2" onChange={(e)=>(setFormateur(e.target.value))} />
            <label className="form-label">Durée</label>
            <input type="text" className="form-control my-2" onChange={(e)=>{setemail(e.target.value)}} />
            <button className="btn btn-primary">Ajouter</button>
        </form>
        <table className="container table table-hover my-5">
            <tr>
                <th>id</th>
                <th>Nom</th>
                <th>Specialite</th>
                <th>Formateurphone</th>
                <th>email</th>
                <th>action</th>
            </tr>
            {
                data.map((d,i)=>{
                    return(
                        <tr key={i}>
                            <td>{d.id}</td>
                            <td>{d.nom}</td>
                            <td>{d.Description}</td>
                            <td>{d.Formateur}</td>
                            <td>{d.Durée}</td>
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