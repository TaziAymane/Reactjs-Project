import { useDispatch, useSelector } from "react-redux";
import { supprimer } from "./Action";


export default function Panier(){
    const panier = useSelector(data=>data.panier)
    const dispatch = useDispatch()
    const totals = panier.reduce((total,parfum)=>{
        return total+=Number(parfum.prix)  
    },0)

    return(
       <>
        <table className="table table-striped">
        <th>Title</th><th>Price</th><th>Actions</th>
        {
            panier.map((parfum,i)=>{
                return(
                    <tr key={i}>
                        <td>{parfum.name}</td>
                        <td>{parfum.prix}</td>
                        <td><button onClick={()=>{dispatch(supprimer(parfum.id))}} className="btn btn-danger">Supprimer</button></td>
                    </tr>
                )
            })
        }
        </table>
        <p>Total :{totals}</p>
       </>
    )
    
}