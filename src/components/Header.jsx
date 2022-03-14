import { Link } from "react-router-dom";
import "../styles/components/header.css"
import Pdf from "../Resume 2022.pdf";

function Header() {
    return (
        <header>
            <nav className="nav-container">
                <ul>
                    <li><Link to="/" className="navbar-item">Home</Link></li>
                    <li><Link to="/About" className="navbar-item">About</Link></li>
                    <li><Link to="/Contact" className="navbar-item">Contact</Link></li>
                    <li><a 
                        href={Pdf} 
                        target="_blank"
                        rel="noreferrer"
                        className="navbar-item btn resume">Resume
                    </a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
