import { FaPython, FaReact, FaCss3Alt, FaHtml5, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiPostgresql, SiPandas, SiDjango, SiTailwindcss, SiNumpy, SiHeroku } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import SkillsTag from "./SkillsTag";

function Card({ skill, icon, level }: { skill: string; icon: JSX.Element; level: string }) {
    return (
        <div className="skill-cards p-4 border rounded-xl flex flex-col items-center justify-center gap-2 w-[140px] h-[180px] md:w-[160px] md:h-[200px]">
            <span className="text-5xl">{icon}</span>
            <span className="text-xl">{skill}</span>
            <span className={`${level}-skill p-1 rounded text-white px-14`}></span>
        </div>
    )
}

export default function SkillsCards() {
    return (
        <div className="container mx-auto">
            <SkillsTag />
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Card skill="Python" icon={<FaPython />} level="advanced" />
                <Card skill="TypeScript" icon={<SiTypescript />} level="intermediate" />
                <Card skill="JavaScript" icon={<SiJavascript />} level="advanced" />
                <Card skill="React" icon={<FaReact />} level="intermediate" />
                <Card skill="PostgreSQL" icon={<SiPostgresql />} level="intermediate" />
                <Card skill="CSS3" icon={<FaCss3Alt />} level="advanced" />
                <Card skill="HTML5" icon={<FaHtml5 />} level="advanced" />
                <Card skill="Django" icon={<SiDjango />} level="intermediate" />
                <Card skill="Tailwind CSS" icon={<SiTailwindcss />} level="intermediate" />
                <Card skill="NumPy" icon={<SiNumpy />} level="intermediate" />
                <Card skill="Heroku" icon={<SiHeroku />} level="intermediate" />
                <Card skill="Next.js" icon={<RiNextjsFill />} level="learning" />
                <Card skill="Pandas" icon={<SiPandas />} level="intermediate" />
                <Card skill="Git" icon={<FaGitAlt />} level="advanced" />
            </div>
        </div>
    )
}