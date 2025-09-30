import HeroTitle from "./HeroTitle"
import HeroParagraph from "./HeroParagraph"
import HeroButtons from "./HeroButtons"

export default function Hero() {
    return (
        <section>
            <div className="container mx-auto max-w-6xl">
                <HeroTitle />
                <HeroParagraph />
                <HeroButtons />
            </div>
        </section>
    )
}