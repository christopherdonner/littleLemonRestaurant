import littleLemonLogo from "./images/logo.jpg"
import {Nav} from "./nav.js"

export const Header = ()=>{

    return (<header>
        <img src={littleLemonLogo} alt="trash" height="70px" />
        <Nav/>
    </header>)
}