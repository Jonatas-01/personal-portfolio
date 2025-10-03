import { FaIdCard } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

export default function AboutMeBtn() {
    return (
        <div className="container mx-auto flex gap-6 pt-2">
            <button className="contact-btn rounded-lg p-1 px-2 flex items-center gap-2 text-lg sm:text-xl">Check projects <FaArrowRight /></button>
            <button className="contact-btn rounded-lg p-1 px-2 flex items-center gap-2 text-lg sm:text-xl">Contact Me <FaIdCard /></button>
        </div>
    )
}