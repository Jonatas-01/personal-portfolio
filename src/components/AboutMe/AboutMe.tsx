import AboutMeBtn from "./AboutMeBtn";
import AboutMeImg from "./AboutMeImg";
import AboutMeTxt from "./AboutMeTxt";

export default function AboutMe() {
    return (
        <section id="about" className=" px-4">
            <div className="block-animation mx-auto max-w-6xl flex flex-col xl:flex-row gap-10 pt-16">
                <div className="xl:basis-2/5">
                    <AboutMeImg />
                </div>
                <div className="block-animation xl:basis-3/5">
                    <AboutMeTxt />
                    <AboutMeBtn />
                </div>
            </div>
        </section>
    )
}