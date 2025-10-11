import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

export default function ContactCards() {
    return (
        <div className="flex justify-center gap-6 pt-3">
            <a href="mailto:jonatasmcontact@gmail.com" className="contact-btn rounded-md p-1 px-2 flex items-center gap-2 text-lg sm:text-xl"><MdEmail /> Email Me</a>
            <a href="https://www.linkedin.com/in/jonatas-mc/" target="_blank" className="contact-btn rounded-md p-1 px-2 flex items-center gap-2 text-lg sm:text-xl"><FaLinkedin /> LinkedIn</a>
        </div>
    )
}