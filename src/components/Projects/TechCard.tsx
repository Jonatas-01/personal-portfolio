import { FaPython, FaReact, FaCss3Alt, FaHtml5, FaGitAlt, FaQuestion } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiPostgresql, SiPandas, SiGooglesheets, SiVite, SiDjango, SiTailwindcss, SiNumpy, SiHeroku, SiStreamlit, SiJupyter, SiScikitlearn } from "react-icons/si";

export default function TechCard({ tech }: { tech: string }) {
    switch (tech) {
        case 'Python':
            return <div className="text-3xl border rounded-xl w-11 h-11 flex items-center justify-center tech-card"><FaPython className="python-color"/></div>;
        case 'TypeScript':
            return <div className="text-3xl border rounded-xl w-11 h-11 flex items-center justify-center tech-card"><SiTypescript className="typescript-color"/></div>;
        case 'JavaScript':
            return <div className="text-3xl border rounded-xl w-11 h-11 flex items-center justify-center tech-card"><SiJavascript className="javascript-color"/></div>;
        case 'CSS3':
            return <div className="text-3xl border rounded-xl w-11 h-11 flex items-center justify-center tech-card"><FaCss3Alt className="css-color"/></div>;
        case 'HTML5':
            return <div className="text-3xl border rounded-xl w-11 h-11 flex items-center justify-center tech-card"><FaHtml5 className="html-color"/></div>;
        case 'Tailwind':
            return <div className="text-3xl border rounded-xl w-11 h-11 flex items-center justify-center tech-card"><SiTailwindcss className="tailwind-color"/></div>;
        case 'NumPy':
            return <div className="text-3xl border rounded-xl w-11 h-11 flex items-center justify-center tech-card"><SiNumpy className="numpy-color"/></div>;
        case 'Heroku':
            return <div className="text-3xl border rounded-xl w-11 h-11 flex items-center justify-center tech-card"><SiHeroku className="heroku-color"/></div>;
        case 'Pandas':
            return <div className="text-3xl border rounded-xl w-11 h-11 flex items-center justify-center tech-card"><SiPandas className="pandas-color"/></div>;
        case 'Git':
            return <div className="text-3xl border rounded-xl w-11 h-11 flex items-center justify-center tech-card"><FaGitAlt className="git-color"/></div>;
        case 'React':
            return <div className="text-3xl border rounded-xl w-11 h-11 flex items-center justify-center tech-card"><FaReact className="react-color"/></div>;
        case 'Django':
            return <div className="text-3xl border rounded-xl w-11 h-11 flex items-center justify-center tech-card"><SiDjango className="django-color"/></div>;
        case 'PostgreSQL':
            return <div className="text-3xl border rounded-xl w-11 h-11 flex items-center justify-center tech-card"><SiPostgresql className="postgresql-color"/></div>;
        case 'Streamlit':
            return <div className="text-3xl border rounded-xl w-11 h-11 flex items-center justify-center tech-card"><SiStreamlit className="streamlit-color"/></div>;
        case 'Scikit-learn':
            return <div className="text-3xl border rounded-xl w-11 h-11 flex items-center justify-center tech-card"><SiScikitlearn className="scikitlearn-color"/></div>;
        case 'Jupyter':
            return <div className="text-3xl border rounded-xl w-11 h-11 flex items-center justify-center tech-card"><SiJupyter className="jupyter-color"/></div>;
        case 'GoogleSheets API':
            return <div className="text-3xl border rounded-xl w-11 h-11 flex items-center justify-center tech-card"><SiGooglesheets className="googlesheets-color"/></div>;
        case 'Vite':
            return <div className="text-3xl border rounded-xl w-11 h-11 flex items-center justify-center tech-card"><SiVite className="vite-color"/></div>;
        default:
            return <div className="text-3xl border rounded-xl w-11 h-11 flex items-center justify-center tech-card"><FaQuestion className="paragraph-color"/></div>;
    }
}