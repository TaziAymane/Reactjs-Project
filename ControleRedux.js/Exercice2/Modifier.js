import { useNavigate, useParams } from "react-router-dom";
import { modifier } from "./action";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Modifier(){
    const {id} = useParams()
    const med = useSelector(data=>data.medicament.find((med)=>{
        return med.id === parseInt(id)
    }))
    const [nom,setnom] = useState(med.nom)
    const [dosage,setdosage] = useState(med.dosage)
    const [form,setform] = useState(med.form)
    const [prix,setprix] = useState(med.prix)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    function modify(e){
        e.preventDefault()
        const medicament={
            nom:nom,
            dosage:dosage,
            form:form,
            prix:prix
        }
        dispatch(modifier(medicament))
        navigate('/')
    }
    return (
        <form onSubmit={modify} className="container">
            <label className="form-label">id</label>
            <input type="text" className="form-control" value={id}/>
            <label className="form-label">Nom</label>
            <input type="text" className="form-control" value={nom}  onChange={(e)=>{setnom(e.target.value)}} />
            <label className="form-label">Dosage</label>
            <input type="text" className="form-control" value={dosage} onChange={(e)=>{setdosage(e.target.value)}} />
            <label className="form-label">form</label>
            <input type="text" className="form-control" value={form} onChange={(e)=>{setform(e.target.value)}} />
            <label className="form-label">Prix</label>
            <input type="text" className="form-control" value={prix} onChange={(e)=>{setprix(e.target.value)}} />
            <button className="btn btn-success my-3">Modifier</button>
        </form>
    )

}