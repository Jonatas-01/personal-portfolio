import TypeAnimation from "../animations/TypeAnimation";

export default function HeroParagraph() {
    return (
        <div className="px-4 ">
            <p className="text-2xl paragraph-color py-2 pt-4">I am a
                <TypeAnimation
                    text={[" Software Developer", " Fullstack Developer", " Data Practitioner", "Web Developer"]}
                    typingSpeed={120}
                    pauseDuration={2000}
                    showCursor={true}
                    cursorCharacter=""
                /></p>
            <p className="text-2xl paragraph-color tracking-tight">With hands-on experience building responsive, data-driven applications using React, Django, PostgreSQL, and REST APIs. Skilled in Python, JavaScript, TypeScript, and Node.js, I enjoy designing efficient solutions from frontend to backend, deploying to cloud platforms, and continuously expanding my tech stack.</p>
        </div>
    )
}