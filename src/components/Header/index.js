import "./index.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Header = () => {
    const [menuOpen, changeMenu] = useState(false);

    return (
        <div className="header">
            <a className="title" >Portfolio</a>
            <div className="menu">
                <button className="menuButton" onClick={() => changeMenu(!menuOpen)}>
                    <GiHamburgerMenu className="hamburgerIcon" />
                </button>
                <ul className={menuOpen ? "menuItems" : "noMenuItems"}>
                    <li onClick={()=>changeMenu(false)} className="about"><a href="#about">About</a></li>
                    <li className="projects" onClick={()=>changeMenu(false)} ><a href="#service">My Services</a></li>
                    <li className="projects" onClick={()=>changeMenu(false)} ><a href="#projects">Projects</a></li>
                    <li className="contact" onClick={()=>changeMenu(false)} ><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
