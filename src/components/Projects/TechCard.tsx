import { FaPython, FaReact, FaCss3Alt, FaHtml5, FaGitAlt, FaQuestion } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiPostgresql, SiPandas, SiDjango, SiTailwindcss, SiNumpy, SiHeroku } from "react-icons/si";

export default function TechCard({ tech }: { tech: string }) {
    switch (tech) {
        case 'Python':
            return <div className="text-3xl border rounded-xl w-11 h-11 flex items-center justify-center python-color"><FaPython /></div>;
        case 'TypeScript':
            return <div className="text-3xl border rounded-xl w-11 h-11 flex items-center justify-center typescript-color"><SiTypescript /></div>;
        case 'JavaScript':
            return <div className="text-3xl border rounded-xl w-11 h-11 flex items-center justify-center javascript-color"><SiJavascript /></div>;
        case 'CSS3':
            return <div className="text-3xl border rounded-xl w-11 h-11 flex items-center justify-center css-color"><FaCss3Alt /></div>;
        case 'HTML5':
            return <div className="text-3xl border rounded-xl w-11 h-11 flex items-center justify-center html-color"><FaHtml5 /></div>;
        case 'Tailwind':
            return <div className="text-3xl border rounded-xl w-11 h-11 flex items-center justify-center tailwind-color"><SiTailwindcss /></div>;
        case 'NumPy':
            return <div className="text-3xl border rounded-xl w-11 h-11 flex items-center justify-center numpy-color"><SiNumpy /></div>;
        case 'Heroku':
            return <div className="text-3xl border rounded-xl w-11 h-11 flex items-center justify-center heroku-color"><SiHeroku /></div>;
        case 'Pandas':
            return <div className="text-3xl border rounded-xl w-11 h-11 flex items-center justify-center pandas-color"><SiPandas /></div>;
        case 'Git':
            return <div className="text-3xl border rounded-xl w-11 h-11 flex items-center justify-center git-color"><FaGitAlt /></div>;
        case 'React':
            return <div className="text-3xl border rounded-xl w-11 h-11 flex items-center justify-center react-color"><FaReact /></div>;
        case 'Django':
            return <div className="text-3xl border rounded-xl w-11 h-11 flex items-center justify-center django-color"><SiDjango /></div>;
        case 'PostgreSQL':
            return <div className="text-3xl border rounded-xl w-11 h-11 flex items-center justify-center postgresql-color"><SiPostgresql /></div>;
        default:
            return <div className="text-3xl border rounded-xl w-11 h-11 flex items-center justify-center paragraph-color"><FaQuestion /></div>;
    }

}