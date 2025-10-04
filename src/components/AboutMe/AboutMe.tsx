import AboutMeBtn from "./AboutMeBtn";
import AboutMeImg from "./AboutMeImg";
import AboutMeTxt from "./AboutMeTxt";

export default function AboutMe() {
    return (
    <div className="pt-15 container mx-auto px-4 max-w-6xl flex flex-col xl:flex-row ">
        <div className="basis-4/10">
            <AboutMeImg />
        </div>
        <div className="basis-6/10">
            <AboutMeTxt />
            <AboutMeBtn />
        </div>
    </div>
    )
}