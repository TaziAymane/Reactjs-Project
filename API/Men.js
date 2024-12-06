import Card from "./Card";

export default function Men(props){
   return(
    <>
    <h2 style={{'display':"flex","justifyContent":"center",'alignItems':'center'}}>Men Categorie</h2>
    <div className="products">
        {
            props.parfums.filter((parfum)=>{
                return parfum.type === "MEN"
            }).map((parfum,i)=>{
                return <Card parfum={parfum} key={i} />
            })
        }
    </div>
    <footer>
            <p>&copy; 2024 TAZI SHOP . All rights reserved.</p>
        </footer>
    </>
   )
    
     
    
    
}