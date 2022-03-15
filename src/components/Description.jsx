import "../styles/components/description.css"

function Description() {
    return (
        <div className="description-page">
            <h1 className="description-h1">Hi! I'm Martin Wong.</h1>

            <section className="description-container">
                    <div className="martinSquare"></div>
                <p>
                    <br/>
                    I am a first year computer Science student transferring to SFU <br/>the following semester.
                    I've been programming since highschool and <br/>I have developed a huge amount of passion for it.
                </p>
                <h2>Languages and Frameworks</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Python</li>
                    <li>Java</li>
                    <li>ReactJS</li>
                    <li>Node.js</li>
                </ul>
            </section>

        </div>
    );
}

export default Description;