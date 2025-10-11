import profile from '@/assets/images/profilesqr.png';

export default function AboutMeImg() {
    return (
        <div className="flex justify-center">
            <div className="rounded-full h-[320px] w-[320px] xl:h-[370px] xl:w-[370px] about-me-img">
            <img src={profile} alt="Profile Image" className="rounded-full" />
            </div>
        </div>
    )
}