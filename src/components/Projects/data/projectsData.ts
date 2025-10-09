export interface Projects {
    id: number;
    image: string;
    imageAlt: string;
    title: string;
    description: string;
    technologies: string[];
    documentationLink: string;
    liveLink?: string;
}

export const projectsData: Projects[] = [
    {
        id: 1,
        image: '../src/assets/images/projects-img/DocAdvanced.png',
        imageAlt: 'DocAdvanced Project Screenshot',
        title: 'DocAdvanced',
        description: 'DocAdvanced is a hospital web app focused on prioritising user-friendly access to healthcare services. This platform enables patients to effortlessly register and request consultations with registered medical professionals. Simultaneously, it empowers doctors to manage appointment requests, confirm scheduled sessions, or cancel them when necessary.',
        technologies: ['Python', 'Django', 'HTML5', 'CSS3', 'JavaScript', 'PostgreSQL', 'Git', 'Heroku'],
        documentationLink: 'https://github.com/Jonatas-01/DocAdvanced',
        liveLink: 'https://doc-advanced-c1ddb943acbd.herokuapp.com/'
    }
]