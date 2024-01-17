import { Routes, Route, Link } from "react-router-dom";
import Homepage from './homepage'

export const Nav = ()=>{

    return <div>
        <nav>
            <Link to="/" className="nav-item">Homepage</Link>
        </nav>
        <Routes>
            <Route path="/" element={<Homepage />}></Route>
        </Routes>
    </div>
    
}