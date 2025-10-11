import heroimg from "@/assets/images/heroimg.svg";

export default function HeroImg() {
    return (
        <div className="flex justify-center">
            <img src={heroimg} alt="Hero Image" className="max-w-[34rem] px-2 overflow-hidden" />
        </div>
    )
}