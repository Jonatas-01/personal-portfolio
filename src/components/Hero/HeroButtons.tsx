import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";

export default function HeroButtons() {
    return (
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 align-center items-center px-4 pt-6">
            <div className="flex gap-3 sm:gap-2 flex-wrap justify-center sm:justify-start">
                <a className="hero-cards secondary-color p-2 rounded-lg flex items-center gap-2 min-w-[110px] justify-center text-lg" href="https://github.com/Jonatas-01" target="_blank"><FaGithub />GitHub</a>
                <a className="hero-cards secondary-color p-2 rounded-lg flex items-center gap-2 min-w-[110px] justify-center text-lg" href="https://www.linkedin.com/in/jonatas-mc/" target="_blank"><FaLinkedin />LinkedIn</a>
                <a className="hero-cards secondary-color p-2 rounded-lg flex items-center gap-2 min-w-[110px] justify-center text-lg" href="mailto:jonatasmcontact@gmail.com" target="_blank"><FaEnvelope />Email</a>
            </div>
            <div>
                <a className="hero-cards text-white download-cv p-4 px-6 rounded-full flex items-center justify-center max-w-[200px] text=xl" href="/public/jonatascv.pdf" download="jonatascv.pdf" target="_blank">DOWNLOAD CV<IoMdDownload /></a>
            </div>
        </div>
    )
}