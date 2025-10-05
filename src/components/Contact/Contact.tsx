import ContactCards from "./ContactCards";
import ContactText from "./ContactText";
import ContactTitle from "./ContactTitle";

export default function Contact() {
    return (
        <section className="container mx-auto py-16 text-center" id="contact">
            <ContactTitle />
            <ContactText />
            {/* Contact Cards */}
            <ContactCards />
        </section>
    )
}