import TechCard from "./TechCard";
import { FaGithub, FaExternalLinkAlt} from "react-icons/fa";

interface ProjectCardProps {
    image: string;
    imageAlt: string;
    title: string;
    description: string;
    technologies: string[];
    documentationLink: string;
    liveLink?: string;
}

export default function ProjectCard({
    title,
    image,
    imageAlt,
    description,
    technologies,
    liveLink,
    documentationLink }: ProjectCardProps) {
    return (
        <div className="block-animation p-3">
            <div className="overflow-hidden">
                <img className="w-[500px] h-[260px] object-cover rounded-xl" src={image} alt={imageAlt} />
            </div>
            {/* Project Details */}
            <div className="py-3">
                <h3 className="text-2xl font-bold text-white title">{title}</h3>
                <p className="paragraph-color text-xl pt-1 max-w-[500px]">{description}</p>
                {/* Boxes for each technology */}
                <h3 className="text-xl text-white title pt-2">Technologies Used</h3>
                <div className="flex gap-2 flex-wrap pt-2">
                    {technologies.map((tech) => (
                        <TechCard key={tech} tech={tech} />
                    ))}
                </div>
            </div>
            {/* Project Links */}
            <div className="flex gap-4 ">
                <a href={documentationLink} className="contact-btn p-1 px-2 flex items-center gap-1 rounded-md" target="_blank">Documentation <FaGithub /></a>
                {liveLink && (
                    <a href={liveLink} className="contact-btn p-1 px-2 flex items-center gap-1 rounded-md" target="_blank">Check Live <FaExternalLinkAlt /></a>
                )}
            </div>
        </div>
    )
}