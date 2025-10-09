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
    },
    {
        id: 2,
        image: '../src/assets/images/projects-img/InsurancePredict.jpg',
        imageAlt: 'Insurance Cost Prediction Project Screenshot',
        title: 'Medical Insurance Cost Prediction',
        description: 'Machine Learning web application that predicts the cost of medical insurance based on user-provided data. The app utilizes a pre-trained Random Forest Regression model to generate accurate predictions. Users can input their personal information, and the app will provide an estimated insurance cost based on the model\'s analysis.',
        technologies: ['Python', 'Streamlit', 'Scikit-learn', 'Jupyter', 'Pandas', 'NumPy', 'Git', 'Heroku'],
        documentationLink: 'https://github.com/Jonatas-01/medical-insurance-prediction',
        liveLink: 'https://insurance-predict-4eed0585c61b.herokuapp.com/'
    }
]