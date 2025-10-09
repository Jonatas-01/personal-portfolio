import ProjectTitle from "./ProjectTitle"
import ProjectCard from "./ProjectCard"
import { projectsData } from "./data/projectsData"

export default function Projects() {
    return (
        <section className="pt-10 px-4" id="projects">
            <div className="container mx-auto max-w-6xl">
                <ProjectTitle />
                <div className="container mx-auto flex flex-col md:flex-row justify-center items-center md:items-start gap-5">
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