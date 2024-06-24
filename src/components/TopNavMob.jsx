import {Link} from "react-router-dom";
import instaLogo from "../assets/Logo/instagram.png";
import likesLogo from "../assets/Icons/like.png";
import messageLogo from "../assets/Nav-Logo/message.png";

const TopNavMob = () => {
    return (
        <div className="w-full h-auto mb-5 lg:hidden md:hidden sm:block block">
            <div className="w-full h-auto flex items-center justify-between ">
                <Link to="/home">
                    <img className="w-28 h-auto object-contain" src={instaLogo} alt="insta-logo"/>
                </Link>
                <div className="flex items-center gap-x-4 pe-2">
                <Link to="/home" className="relative">
                    <img className="w-6 h-6" src={likesLogo} alt="search-logo"/>
                    <div className="absolute -right-0.5 -top-0.5 bg-red-600 text-sm text-white rounded-full w-2 h-2
                    flex items-center justify-center"></div>
                </Link>
                <Link to="/home" className="relative">
                    <img className="w-6 h-6" src={messageLogo} alt="message-logo"/>
                    <div className="absolute -right-2 -top-2 bg-red-600 text-sm text-white rounded-full w-5 h-5
                    flex items-center justify-center">6</div>
                </Link>
                </div>
            </div>
        </div>
    )
}

export default TopNavMob;