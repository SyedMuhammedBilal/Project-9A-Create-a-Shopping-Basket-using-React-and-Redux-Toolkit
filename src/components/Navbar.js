import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css';
 const Navbar = ()=>{
    return(
            <nav style={{backgroundColor: "#333333"}} className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo head">Redux</Link>
                    
                    <ul className="right">
                        <li><Link to="/">Shop</Link></li>
                        <li><Link to="/cart">My cart</Link></li>
                        <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
                    </ul>
                </div>
            </nav>
   
        
    )
}

export default Navbar;