import "../styles/components/projects.css";
import spotifyLogo from "../project-images/spotify.png";
import pokeball from "../project-images/pokeball.png";
import sudokuLogo from "../project-images/sudoku.png";

function Projects() {
    return (
        <div className="project-container">
            <h2>Featured Projects</h2>
            <section className="project-item-container">
                <div className="project-item">
                    <p className="project-item-header">Spotify Statistics Page</p>
                    <img alt="spotify" width="175" height="175" src={spotifyLogo}/>
                    <p>Work in progress.</p>
                    <a 
                        href="https://github.com/Mighty303/spotify-plus-plus" 
                        className="project-btn project-item-btn"
                        target="_blank" rel="noreferrer"
                    >Spotify App</a>
                </div>

                <div className="project-item">
                    <p className="project-item-header">Project Pokemon</p>
                    <img alt="spotify" width="175" height="175" src={pokeball}/>
                    <p>Text-based Pokemon game practicing OOP concepts in Python.</p>
                    <a 
                        href="https://github.com/Mighty303/Project-Pokemon" 
                        className="project-btn project-item-btn"
                        target="_blank" rel="noreferrer"
                    >Pokemon Game</a>
                </div>

                <div className="project-item">
                    <p className="project-item-header">Sudoku Solver</p>
                    <img alt="spotify" width="175" height="175" src={sudokuLogo}/>
                    <p>Recursive backtracking Sudoku Sover written in Java.</p>
                    <a 
                        href="https://github.com/Mighty303/SudokuSolver" 
                        className="project-btn project-item-btn"
                        target="_blank" rel="noreferrer"
                    >Sudoku Solver</a>
                </div>
            </section>
        </div>
    );
}

export default Projects;