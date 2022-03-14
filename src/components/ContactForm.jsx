import "../styles/components/contactForm.css";

function ContactForm() {
    return (
        <div className="form-container">
            <section className="form-section">
                <h2>Feel free to reach out to me!</h2>
                <form>
                    <div className="form-space">
                        <input type="text" placeholder="name"></input>
                        <input type="text" placeholder="email"></input>
                    </div>
                    <textarea placeholder="Enter your message"></textarea>
                </form>
            </section>
        </div>
    );
}

export default ContactForm;