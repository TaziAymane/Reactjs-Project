import { useState } from "react";
import { useSelector } from "react-redux";

export default function Search(){
    const data = useSelector(data=>data.courses)
    const [search,setsearch] = useState('')
    const [text,settext] = useState({})
    function recherch(e){
        e.preventDefault()
        settext(data.find((d,i)=>{
            return d.Formateur === search 
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
                <th>Description</th>
               <th>Dure</th>
            </tr>
            <tr>
                <td>{text.id}</td>
                <td>{text.nom}</td>
                <td>{text.Description}</td>
                <td>{text.Durée}</td>
            </tr>
        </table>
        </div>
       </div>
       
    )
}