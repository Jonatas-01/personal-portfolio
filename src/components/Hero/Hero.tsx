import HeroTitle from "./HeroTitle"
import HeroParagraph from "./HeroParagraph"
import HeroButtons from "./HeroButtons"
import HeroImg from "./HeroImg"

export default function Hero() {
    return (
        <section className="container mx-auto max-w-6xl flex flex-col xl:flex-row">
            {/* Text Content - Second on mobile, First on medium */}
            <div className="container mx-auto order-2 xl:order-1">
                <HeroTitle />
                <HeroParagraph />
                <HeroButtons />
            </div>

            {/* Image - First on mobile, Second on medium+ */}
            <div className="container mx-auto pt-8 order-1 xl:order-2">
                <HeroImg />
            </div>
        </section>
    )
}