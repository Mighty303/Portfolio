import "../styles/components/contactForm.css";

function ContactForm() {
    return (
        <div className="form-container">
            <section className="form-section">
                <h2>Feel free to reach out to me!</h2>
                <form>
                    <div className="form-space">
                        <input type="text" placeholder="name" required></input>
                        <input type="text" placeholder="email" required></input>
                    </div>
                    <textarea placeholder="Enter your message" required></textarea>
                    <div>
                        <button className="submit-btn submit">Submit</button>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default ContactForm;