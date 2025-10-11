import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import NotFoundImg from "@/components/NotFound/NotFoundImg";
import NotFoundText from "@/components/NotFound/NotFoundText";
import NotFoundLink from "@/components/NotFound/NotFoundLink";
import { useEffect, useState } from "react";

export default function NotFound() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const id = requestAnimationFrame(() => setIsVisible(true));
        return () => cancelAnimationFrame(id);
    }, []);

    return (
        <div className={`w-full min-h-screen background-color-dark ${isVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-2000`}>
            <Header />
            <NotFoundImg />
            <div className="pb-20 flex flex-col items-center">
                <NotFoundText />
                <NotFoundLink />
            </div>
            <Footer />
        </div>
    )
}
