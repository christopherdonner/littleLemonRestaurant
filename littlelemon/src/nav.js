import { Link } from "react-router-dom";

export const Nav = ()=>{

    return (        <nav>
            <ul>
                <li><Link to="/" className="nav-item">Homepage</Link></li>
                <li><Link to="/about" className="nav-item">About</Link></li>
                <li><Link to="/menu" className="nav-item">Menu</Link></li>
                <li><Link to="/booking" className="nav-item">Reservations</Link></li>
                <li><Link to="/order" className="nav-item">Order Online</Link></li>
                <li><Link to="/login" className="nav-item">Login</Link></li>
            </ul>
        </nav>
       
    )
    
}