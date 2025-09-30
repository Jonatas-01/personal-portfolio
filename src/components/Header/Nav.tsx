import { Menu, X } from "lucide-react";
import { useState } from "react";
import ContactBtn from "./ContactBtn";

const NavLinks = () => {
    return (
        <>
            <a className="md:pr-6 text-white nav-link block py-2 md:py-0 hover:text-orange-400 transition-colors" href="/">Home</a>
            <a className="md:pr-6 text-white nav-link block py-2 md:py-0 hover:text-orange-400 transition-colors" href="#about">About</a>
            <a className="md:pr-6 text-white nav-link block py-2 md:py-0 hover:text-orange-400 transition-colors" href="#skills">Skills</a>
            <a className="md:pr-6 text-white nav-link block py-2 md:py-0 hover:text-orange-400 transition-colors" href="#projects">Projects</a>
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
                    <button 
                        onClick={toggleNavbar}
                        className="p-2 rounded-md hover:bg-gray-700 transition-colors duration-200"
                    >
                        {isOpen ? <X className="main-color" /> : <Menu className="main-color" />}
                    </button>
                </div>
            </nav>
            
            {/* Mobile Menu with Animation */}
            <div className={`
                md:hidden overflow-hidden transition-all duration-300 ease-in-out basis-full
                ${isOpen 
                    ? 'max-h-96 opacity-100 transform translate-y-0' 
                    : 'max-h-0 opacity-0 transform -translate-y-4'
                }
            `}>
                <div className="w-full bg-background-color-dark flex flex-col items-center space-y-4 py-4 font-medium text-lg border-t border-gray-600">
                    <NavLinks />
                    <ContactBtn />
                </div>
            </div>
        </>
    )
}