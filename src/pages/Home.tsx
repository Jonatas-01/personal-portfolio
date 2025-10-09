import AboutMe from "../components/AboutMe/AboutMe";
import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero";
import Skills from "../components/Skills/Skills";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact/Contact";
import Projects from "../components/Projects/Projects";

export default function Home() {
    return (
        <div className="w-full min-h-screen background-color-dark">
            <Header />
            <Hero />
            <AboutMe />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}
