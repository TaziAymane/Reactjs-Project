import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { modifier } from "./action";
export default function Modifier(){
    const {id} = useParams()
    const cours = useSelector(data=>data.courses.find((d)=>{
        return d.id === parseInt(id)
    }))
    
    const [nom,setnom] = useState('')
    const [Descriptionn,setDescription] = useState('')
    const [Formateurn,setFormateur] = useState('')
    const [Duréen,setDurée] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function modfy(e){
        e.preventDefault()
        const Courses = {
            id:cours.id,
            nom:nom,
            Description:Descriptionn,
            Formateur:Formateurn,
            Durée:Duréen
        }
        dispatch(modifier(Courses))
        navigate('/')
    }

    return( 
        <form onSubmit={modfy} className="container">
        <h2>Modifier Cours :</h2>
        <input type='text' className="form-control my-3" value={id} />
        <input type='text' className="form-control my-3" onChange={(e)=>{setnom(e.target.value)}}  value={nom} />
        <input type='text' className="form-control my-3" onChange={(e)=>setDescription(e.target.value)} value={Descriptionn} />
        <input type='text' className="form-control my-3" onChange={(e)=>(setFormateur(e.target.value))}  value={Formateurn}/>
        <input type="text" className="form-control my-3" onChange={(e)=>{setDurée(e.target.value)}}  value={Duréen}/>
        <button className="btn btn-success my-3">Modifier</button>
    </form>
    )
}