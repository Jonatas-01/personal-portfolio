import { Menu, X } from "lucide-react";
import { useState } from "react";
import ContactBtn from "./ContactBtn";

const NavLinks = () => {
    return (
        <>
            <a className="md:pr-6 text-white nav-link" href="/">Home</a>
            <a className="md:pr-6 text-white nav-link" href="#about">About</a>
            <a className="md:pr-6 text-white nav-link" href="#skills">Skills</a>
            <a className="md:pr-6 text-white nav-link" href="#projects">Projects</a>
        </>
    )
}

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <nav className="w-1/2">
                <div className="hidden md:flex justify-end text-lg items-center">
                    <NavLinks />
                    <ContactBtn />
                </div>
                <div className="md:hidden flex justify-end">
                    <button onClick={toggleNavbar}>
                        {isOpen ? <X className="main-color" /> : <Menu className="main-color" />}
                    </button>
                </div>
            </nav>
            {isOpen && (
                <div className="basis-full top-16 right-0 w-full bg-background-color-dark flex flex-col items-center space-y-4 py-4 font-medium text-lg flex-wrap">
                    <NavLinks />
                    <ContactBtn />
                </div>
            )}
        </>
    )
}