import ProjectTitle from "./ProjectTitle"
import ProjectCard from "./ProjectCard"
import { projectsData } from "./data/projectsData"

export default function Projects() {
    return (
        <section className="pt-10 px-4">
            <div className="container mx-auto max-w-6xl">
                <ProjectTitle />
                <div className="container mx-auto">
                    {projectsData.map((project) => (
                        <ProjectCard
                            key={project.id}
                            image={project.image}
                            imageAlt={project.imageAlt}
                            title={project.title}
                            description={project.description}
                            technologies={project.technologies}
                            documentationLink={project.documentationLink}
                            liveLink={project.liveLink}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}