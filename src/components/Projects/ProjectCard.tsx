import TechCard from "./TechCard";

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
        <div>
            <div>
                <img src={image} alt={imageAlt} />
            </div>
            {/* Project Details */}
            <div>
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <p className="paragraph-color">{description}</p>
                {/* Boxes for each technology */}
                <div className="flex gap-2 flex-wrap">
                    {technologies.map((tech) => (
                        <TechCard key={tech} tech={tech} />
                    ))}
                </div>
            </div>
            {/* Project Links */}
            <div>
                <a href={documentationLink} className="" target="_blank">Documentation</a>
                {liveLink && (
                    <a href={liveLink} className="" target="_blank">Check Live</a>
                )}
            </div>
        </div>
    )
}