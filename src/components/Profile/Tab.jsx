/* eslint-disable react/prop-types */
const Tab = ({label,icon, isActive, onClick}) => {
    return(
        <div className="w-1/3 flex items-center justify-center">
        <button className={`${isActive ? "text-white font-medium border-b-2 w-full lg:border-t-2 md:border-t-2 md:border-b-0 lg:border-b-0 border-b-white": "text-gray-600"} flex items-center
        justify-center gap-x-2  py-2 focus:outline-none transition-opacity duration-300 ease-out
        ${isActive ? "opacity-100": "opacity-75"}`}
        onClick={onClick}>
            {icon && (
                <img src={icon} alt="icon" className={`w-[30px] lg:w-[12px] md:w-[12px]  ${isActive ? "brightness-200": "brightness-50"}`}/>
            )}
            {label}
        </button>
        </div>
    )
}

export default Tab;