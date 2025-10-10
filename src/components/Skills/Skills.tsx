import SkillsTitle from "./SkillsTitle";
import SkillsCards from "./SkillsCards";

export default function Skills() {
    return (
        <section id="skills" className="block-animation px-4 pt-14">
            <div className="mx-auto max-w-6xl">
                <SkillsTitle />
                <SkillsCards />
            </div>
        </section>
    )
}
