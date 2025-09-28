import { Menu, X } from "lucide-react";
import { useState } from "react";
import HireButton from "./HireButton";

const NavLinks = () => {
    return (
        <>
            <a className="md:pr-6 text-white nav-link" href="#home">Home</a>
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
                    <HireButton />
                </div>
                <div className="md:hidden flex justify-end">
                    <button onClick={toggleNavbar}>
                        {isOpen ? <X className="main-color" /> : <Menu className="main-color" />}
                    </button>
                </div>
            </nav>
            {isOpen && (
                <div className="absolute top-16 right-0 w-full bg-background-color-dark flex flex-col items-center space-y-4 py-4 text-white font-medium text-lg">
                    <NavLinks />
                    <HireButton />
                </div>
            )}
        </>
    )
}