import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import {Link} from "react-router-dom";

class Navbar extends Component {
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Trippy</h1>

                <ul className="nav-menu">
                    {MenuItems.map((item, index) =>{
                        return(
                            <li>
                                <a href="/">
                                    <i className="fa-solid fa-house"></i><Link>Home</Link>
                                </a>
                            </li>
                        );
                    })}

                </ul>
            </nav>
        );
    }
}

export default Navbar;