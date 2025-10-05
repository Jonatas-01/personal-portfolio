import AboutMe from "../components/AboutMe/AboutMe";
import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero";
import Skills from "../components/Skills/Skills";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact/Contact";

export default function Home() {
    return (
        <div className="w-full min-h-screen background-color-dark">
            <Header />
            <Hero />
            {/* About Me */}
            <AboutMe />
            {/* Skills */}
            <Skills />
            {/* Projects */}

            {/* Contact Section */}
            <Contact />
            {/* Footer */}
            <Footer />
        </div>
    );
}
