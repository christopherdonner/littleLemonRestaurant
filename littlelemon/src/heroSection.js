import heroImage from './images/3d3cce7a3104bf255ed0e69195e2a157338c1bff.jpg'
import { Link } from "react-router-dom";

let location = 'Toronto'


export const Hero = () => {
    return <div className="heroSection">
        <div className='blurb'>
                <h2>Little Lemon Restaurant</h2>
                <h3>{location}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, minus aliquam. Ipsam itaque nostrum magni possimus eveniet numquam enim, ullam laudantium a quam, beatae veritatis labore eaque exercitationem saepe voluptates?</p>
                <Link to="/booking" className="nav-item"><button>Make Reservation</button></Link>
        </div>
        <div className="heroImage">
<img src={heroImage} height="250px"></img>
        </div>

        
        </div>
}