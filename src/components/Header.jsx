import { Link } from "react-router-dom";
import "../styles/components/header.css"

function Header() {
    return (
        <header>
            <nav className="nav-container">
                <ul>
                    <li><Link to="/" className="navbar-item">Home</Link></li>
                    <li><Link to="/About" className="navbar-item">About</Link></li>
                    <li><Link to="/Contact" className="navbar-item">Contact</Link></li>
                    <li><Link to="/Contact" className="navbar-item btn resume">Resume</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
