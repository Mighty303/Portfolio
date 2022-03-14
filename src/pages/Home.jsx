import Header from '../components/Header';
import Intro from '../components/Intro';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

function Home() {
    return (
        <div>
            <Header />
            <Intro />
            <Projects />
            <ContactForm />
            <Footer />
        </div>
    );
}

export default Home;