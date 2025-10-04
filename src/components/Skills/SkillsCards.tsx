import { FaPython, FaReact, FaCss3Alt, FaHtml5, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiPostgresql, SiPandas, SiDjango, SiTailwindcss, SiNumpy, SiHeroku } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

export default function SkillsCards() {
    return (
        <div className="py-3 container mx-auto flex flex-wrap gap-4 justify-center md:justify-start">
            <div className="skill-cards p-4 border rounded-xl flex flex-col items-center justify-center gap-2 w-[140px] h-[180px]">
                <span className="text-5xl"><FaPython /></span>
                <span className="text-xl">Python</span>
                <span className="advanced-skill p-1 rounded-md text-white">Advanced</span>
            </div>
            <div className="skill-cards p-4 border rounded-xl flex flex-col items-center justify-center gap-2 w-[140px] h-[180px]">
                <span className="text-5xl"><SiTypescript /></span>
                <span className="text-xl">TypeScript</span>
                <span className="intermediate-skill p-1 rounded-md text-white">Intermediate</span>
            </div>
            <div className="skill-cards p-4 border rounded-xl flex flex-col items-center justify-center gap-2 w-[140px] h-[180px]">
                <span className="text-5xl"><SiJavascript /></span>
                <span className="text-xl">JavaScript</span>
                <span className="advanced-skill p-1 rounded-md text-white">Advanced</span>
            </div>
            <div className="skill-cards p-4 border rounded-xl flex flex-col items-center justify-center gap-2 w-[140px] h-[180px]">
                <span className="text-5xl"><FaReact /></span>
                <span className="text-xl">React</span>
                <span className="intermediate-skill p-1 rounded-md text-white">Intermediate</span>
            </div>
            <div className="skill-cards p-4 border rounded-xl flex flex-col items-center justify-center gap-2 w-[140px] h-[180px]">
                <span className="text-5xl"><SiPostgresql /></span>
                <span className="text-xl">PostgreSQL</span>
                <span className="intermediate-skill p-1 rounded-md text-white">Intermediate</span>
            </div>
            <div className="skill-cards p-4 border rounded-xl flex flex-col items-center justify-center gap-2 w-[140px] h-[180px]">
                <span className="text-5xl"><FaCss3Alt /></span>
                <span className="text-xl">CSS3</span>
                <span className="advanced-skill p-1 rounded-md text-white">Advanced</span>
            </div>
            <div className="skill-cards p-4 border rounded-xl flex flex-col items-center justify-center gap-2 w-[140px] h-[180px]">
                <span className="text-5xl"><FaHtml5 /></span>
                <span className="text-xl">HTML5</span>
                <span className="advanced-skill p-1 rounded-md text-white">Advanced</span>
            </div>
            <div className="skill-cards p-4 border rounded-xl flex flex-col items-center justify-center gap-2 w-[140px] h-[180px]">
                <span className="text-5xl"><RiNextjsFill /></span>
                <span className="text-xl">Next.js</span>
                <span className="learning-skill p-1 rounded-md text-white">Learning</span>
            </div>
            <div className="skill-cards p-4 border rounded-xl flex flex-col items-center justify-center gap-2 w-[140px] h-[180px]">
                <span className="text-5xl"><SiPandas /></span>
                <span className="text-xl">Pandas</span>
                <span className="intermediate-skill p-1 rounded-md text-white">Intermediate</span>
            </div>
            <div className="skill-cards p-4 border rounded-xl flex flex-col items-center justify-center gap-2 w-[140px] h-[180px]">
                <span className="text-5xl"><SiDjango /></span>
                <span className="text-xl">Django</span>
                <span className="advanced-skill p-1 rounded-md text-white">Advanced</span>
            </div>
            <div className="skill-cards p-4 border rounded-xl flex flex-col items-center justify-center gap-2 w-[140px] h-[180px]">
                <span className="text-5xl"><SiTailwindcss /></span>
                <span className="text-xl">Tailwind</span>
                <span className="advanced-skill p-1 rounded-md text-white">Advanced</span>
            </div>
            <div className="skill-cards p-4 border rounded-xl flex flex-col items-center justify-center gap-2 w-[140px] h-[180px]">
                <span className="text-5xl"><SiHeroku /></span>
                <span className="text-xl">Heroku</span>
                <span className="advanced-skill p-1 rounded-md text-white">Advanced</span>
            </div>
            <div className="skill-cards p-4 border rounded-xl flex flex-col items-center justify-center gap-2 w-[140px] h-[180px]">
                <span className="text-5xl"><SiNumpy /></span>
                <span className="text-xl">NumPy</span>
                <span className="intermediate-skill p-1 rounded-md text-white">Intermediate</span>
            </div>
            <div className="skill-cards p-4 border rounded-xl flex flex-col items-center justify-center gap-2 w-[140px] h-[180px]">
                <span className="text-5xl"><FaGitAlt /></span>
                <span className="text-xl">Git</span>
                <span className="advanced-skill p-1 rounded-md text-white">Advanced</span>
            </div>
        </div>
    )
}