import logo from "@/assets/images/logo.png";

export default function Logo() {
    return (
        <div className="logo h-11 w-11">
            <a href="/">
                <img src={logo} alt="logo" />
            </a>
        </div>
    );
}
