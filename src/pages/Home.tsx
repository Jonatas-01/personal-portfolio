import AboutMe from "../components/AboutMe/AboutMe";
import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero";
import Skills from "../components/Skills/Skills";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact/Contact";
import Projects from "../components/Projects/Projects";
import { useEffect, useState } from "react";

export default function Home() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const id = requestAnimationFrame(() => setIsVisible(true));
        return () => cancelAnimationFrame(id);
    }, []);

    return (
        <div className={`w-full min-h-screen background-color-dark ${isVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-2000`}>
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
