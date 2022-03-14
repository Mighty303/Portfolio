import "../styles/components/Intro.css"
import { Link } from "react-router-dom";

function Intro() {
    return (
        <div className="Intro-container">
            <p>👋 Hello, my name is,</p>
            <h1>Martin Wong.</h1>
            <p>I am a passion-driven computer science student studying at Langara College.</p>
            <Link to="/Contact" className="navbar-item intro-btn contact">Contact me</Link>
        </div>
    );
}

export default Intro;