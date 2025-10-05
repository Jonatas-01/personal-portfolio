import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

export default function ContactCards() {
    return (
        <div className="flex justify-center gap-6 pt-3">
            <button className="contact-btn rounded-md p-1 px-2 flex items-center gap-2 text-lg sm:text-xl"><MdEmail /> Email Me</button>
            <button className="contact-btn rounded-md p-1 px-2 flex items-center gap-2 text-lg sm:text-xl"><FaLinkedin /> LinkedIn</button>
        </div>
    )
}