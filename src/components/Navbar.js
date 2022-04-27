import React from 'react'
import "./Navbar.css"
import { faBookOpen, faCamera, faEarthAsia, faHome, faUser} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Navbar = () => {
    return (
        <div className="navbar">
            <div> <h1><FontAwesomeIcon className="home-icons" icon={faHome}/></h1></div>
            <div><h1><FontAwesomeIcon  className="home-icons" icon={faEarthAsia}/></h1></div>
            <div><h1><FontAwesomeIcon  className="home-icons" icon={faBookOpen}/></h1></div>
            <div><h1><FontAwesomeIcon  className="home-icons" icon={faCamera}/></h1></div>
            <div><h1><FontAwesomeIcon  className="home-icons" icon={faUser}/></h1></div>
        </div>
    )
}

export default Navbar
