import BlurText from "../animations/BlurText"

export default function HeroTitle() {
    return (
        <div className="flex flex-col gap-4 pt-8 mx-auto px-4">
            <BlurText
                text="Hello world!, I'm"
                delay={120}
                animateBy="words"
                direction="top"
                className="title text-4xl sm:text-6xl text-white font-semibold tracking-tight"
            />
            <BlurText
                text="Jonatas Mendes"
                delay={150}
                animateBy="words"
                direction="top"
                className="title text-3xl sm:text-6xl font-semibold secondary-color tracking-tight"
            />
        </div>
    )
}