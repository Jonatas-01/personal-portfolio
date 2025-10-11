import imgnotfound from '@/assets/images/404ErrorPage.svg';

export default function NotFoundImg() {
    return (
        <div>
            <img src={imgnotfound} alt="404 Not Found" className="w-full max-w-lg mx-auto mt-10" />
        </div>
    )
}