import MobProfile from "./MobProfile";
import Profile from "./Profile";


const Main = () => {
    return(
        <div className="w-full min-h-screen py-4 lg:py-10 md:py-6 sm:py-4 sm:px-7 px-2 ">
            <Profile/>
            <MobProfile/>
        </div>
    )
}

export default Main;