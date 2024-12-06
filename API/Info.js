import { useNavigate, useParams } from "react-router-dom"
import './info.css';
import {ajouter} from './Panier/Action'
import { useState } from "react";
import { useDispatch } from "react-redux";
export default function Info(props){
    const {id} = useParams();
    const [i,seti] = useState(1);
    const parfum = props.parfums.find((p)=>{return p.id === id});
    const [name,setname] = useState(parfum.name)
    const [prix,setprix] = useState(parfum.prix)
    const [quantite,setquantite] = useState(parfum.discription)
    const [type,settype] = useState(parfum.type)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    function increment(e){
        e.preventDefault()
        seti(i+1)
    }
    function deincrement(e){
        e.preventDefault()
        seti(i-1)
    }
   function buy(e){
    e.preventDefault()
    const parfump ={
        name:name,
        prix:prix,
        quantite:quantite,
        type:type
    }
    dispatch(ajouter(parfump,parseInt(i)))
    navigate('/Panier')
   }
    return (
        <div className="d-flex justify-content-center my-5">
            
            <div className="img">
                <img src={parfum.image} className="Image" alt="" />
            </div>
            <div className="info">
                <h4>{parfum.name}</h4>
                <p>{parfum.discription}</p>
                <p>{parfum.prix} MAD </p>
                <h3>Quantity</h3>
                <form onSubmit={buy}>
                    <button onClick={increment} className="btn">+</button>
                    <input type="number"  value={i} className="btn"/>
                    <button onClick={deincrement} className="btn">-</button> <br></br>
                    <button className="btn btn-success">Ajouter Panier</button>
                </form>
            </div>
        </div>
    )
       
}