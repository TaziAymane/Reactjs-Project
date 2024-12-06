
import { useState } from "react";
import { ajouter } from "./action";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { supprimer } from "./action";

export default function Ajouter(){
    const data = useSelector(data=>data.docteur)
    const lastid = useSelector(data=>data.docteur.length + 1)
    const [nom,setnom] = useState('')
    const [spécialité,setspecialite] = useState('')
    const [Tele,settele] = useState('')
    const [email,setemail] = useState('')
    const dispatch = useDispatch()

    function Add(e){
        e.preventDefault()
        const docteur = {
            id:parseInt(lastid),
            nom:nom,
            spécialité:spécialité,
            Tele:Tele,
            email:email
        }
        dispatch(ajouter(docteur))
    }

    return(
        <>
        <form onSubmit={Add} className="container">
            <h2>Ajouter Docteur :</h2>
            <label className="form-label">Id</label>
            <input type='text' className="form-control my-2" value={lastid} />
            <label className="form-label">Nom</label>
            <input type='text' className="form-control my-2" onChange={(e)=>{setnom(e.target.value)}} />
            <label className="form-label">Specialite</label>
            <input type='text' className="form-control my-2" onChange={(e)=>setspecialite(e.target.value)} />
            <label className="form-label">Telephoneite</label>
            <input type='text' className="form-control my-2" onChange={(e)=>(settele(e.target.value))} />
            <label className="form-label">email</label>
            <input type="text" className="form-control my-2" onChange={(e)=>{setemail(e.target.value)}} />
            <button className="btn btn-primary">Ajouter</button>
        </form>
        <table className="container table table-hover my-5">
            <tr>
                <th>id</th>
                <th>Nom</th>
                <th>Specialite</th>
                <th>Telephone</th>
                <th>email</th>
                <th>action</th>
            </tr>
            {
                data.map((d,i)=>{
                    return(
                        <tr key={i}>
                            <td>{d.id}</td>
                            <td>{d.nom}</td>
                            <td>{d.spécialité}</td>
                            <td>{d.Tele}</td>
                            <td>{d.email}</td>
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