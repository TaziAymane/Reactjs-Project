import { useState } from "react";
import { useSelector } from "react-redux";

export default function Search(){
    const data = useSelector(data=>data.docteur)
    const [search,setsearch] = useState('')
    const [docteur,setdocteur] = useState({})
    function recherch(e){
        e.preventDefault()
        setdocteur(data.find((d,i)=>{
            return d.spécialité === search 
        }))
    }
    return (
       <div>
         <form onSubmit={recherch} className="container">
             <input type="search" className="form-control my-3" onChange={(e)=>{setsearch(e.target.value)}} />
             <button className="btn btn-primary">Search</button>
        </form>
        <div className="container my-3">
        <table className="table table-striped">
        <tr>
                <th>id</th>
                <th>Nom</th>
                <th>Specialite</th>
                <th>Telephone</th>
                <th>email</th>
               
            </tr>
            <tr>
                <td>{docteur.id}</td>
                <td>{docteur.nom}</td>
                <td>{docteur.spécialité}</td>
                <td>{docteur.Tele}</td>
                <td>{docteur.email}</td>
            </tr>
        </table>
        </div>
       </div>
       
    )
}