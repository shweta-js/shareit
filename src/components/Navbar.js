import React from 'react'
import "./Navbar.css"
import { faBell, faBookOpen, faCamera, faEarthAsia, faEnvelope, faHome, faMailBulk, faMailReply, faSearch, faUser} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/mainlogo.jpeg";
const Navbar = () => {
    return (
    
        <div>
        <div className="navbar-top">
                <div className="logo">
                <img src={logo} alt="logo" className="logo-img"/>
                <p className="it">.it</p>
                </div>
                <div className="logo-right">
                <FontAwesomeIcon className="nav-top-icon search" icon={faSearch}/>
                <input type="text" className="input-txt" placeholder="search"/> 
                
                <FontAwesomeIcon  className="nav-top-icon" icon={faBell}/>
                <FontAwesomeIcon  className="nav-top-icon" icon={faEnvelope}/>
                <img className="user-img" src="https://upload.wikimedia.org/wikipedia/en/d/d0/Courteney_Cox_as_Monica_Geller.jpg" alt="logo"/>
                <p className="nav-top-icon">Monica Geller</p>
                </div>
                
        </div>
            <div className="navbar">
            <div> <h1><FontAwesomeIcon className="home-icons" icon={faHome}/></h1></div>
            <div><h1><FontAwesomeIcon  className="home-icons" icon={faEarthAsia}/></h1></div>
            <div><h1><FontAwesomeIcon  className="home-icons" icon={faBookOpen}/></h1></div>
            <div><h1><FontAwesomeIcon  className="home-icons" icon={faCamera}/></h1></div>
            <div><h1><FontAwesomeIcon  className="home-icons" icon={faUser}/></h1></div>
            </div>
        </div>
    )
}

export default Navbar
