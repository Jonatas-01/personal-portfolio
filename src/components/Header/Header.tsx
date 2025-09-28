import Logo from "./Logo";
import Nav from "./Nav";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 mx-auto w-full px-6 py-3 shadow-md">
            <div className="container mx-auto max-w-6xl flex justify-between items-center">
                <Logo />
                <Nav />
            </div>
        </header>
    )
}