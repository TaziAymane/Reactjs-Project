import { Link } from "react-router-dom";
import './cardStyling.css'
export default function Card(props){
    return(
        
		<div className="all-products">
			<div className="product">
				<img src={props.parfum.image} alt="" />
				<div className="product-info">
					<h4 className="product-title">{props.parfum.name} 10ML</h4>
					<p className="product-price">{props.parfum.prix} MAD</p>
					<Link className="product-btn" to={`/info/${props.parfum.id}`}>Buy Now</Link>
				</div>
			</div>
        </div>

    )
}
