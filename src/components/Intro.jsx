import "../styles/components/Intro.css"
import { Link } from "react-router-dom";

function Intro() {
    return (
        <div className="Intro-container">
            <p id="intro">👋 Hello, my name is,</p>
            <h1>Martin Wong.</h1>
            <p>Passion-driven computer science student studying at Langara College.</p>
            <Link to="/Contact" className="intro-btn contact-btn">Contact me</Link>
        </div>
    );
}

export default Intro;