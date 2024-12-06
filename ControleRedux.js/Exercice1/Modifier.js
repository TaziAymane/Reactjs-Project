import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { modifier } from "./action";
export default function Modifier(){
    const {id} = useParams()
    const docteur = useSelector(data=>data.docteur.find((d)=>{
        return d.id === parseInt(id)
    }))
    const [nom,setnom] = useState(docteur.nom)
    const [spécialité,setspecialite] = useState(docteur.spécialité)
    const [Tele,settele] = useState(docteur.Tele)
    const [email,setemail] = useState(docteur.email)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function modfy(e){
        e.preventDefault()
        const docteurm = {
            id:docteur.id,
            nom:nom,
            spécialité:spécialité,
            Tele:Tele,
            email:email
        }
        dispatch(modifier(docteurm))
        navigate('/')
    }

    return( 
        <form onSubmit={modfy} className="container">
        <h2>Modifier Docteur :</h2>
        <input type='text' className="form-control my-3" value={id} />
        <input type='text' className="form-control my-3" onChange={(e)=>{setnom(e.target.value)}}  value={nom} />
        <input type='text' className="form-control my-3" onChange={(e)=>setspecialite(e.target.value)} value={spécialité} />
        <input type='text' className="form-control my-3" onChange={(e)=>(settele(e.target.value))}  value={Tele}/>
        <input type="text" className="form-control my-3" onChange={(e)=>{setemail(e.target.value)}}  value={email}/>
        <button className="btn btn-success my-3">Modifier</button>
    </form>
    )
}