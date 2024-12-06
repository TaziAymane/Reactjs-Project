import { Link } from "react-router-dom";
import './Header.css' ;

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to={'/'}>Parfums</Link>
      </div>
      <ul className='nav-links'>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/Men'} >Men</Link></li>
        <li><Link to={'/Women'} >Women</Link></li>
        <li><Link  to={'/Contactez'} >Contact</Link></li>
        <li><Link to={'/Panier'} class="fa-light fa-basket-shopping"></Link></li>
      </ul>    
    </nav>
  );
};

export default Navbar;
