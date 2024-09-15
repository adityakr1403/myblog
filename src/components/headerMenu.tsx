import {IoCartOutline} from "react-icons/io5";
import {IoIosSearch} from "react-icons/io";
import {PiLineVertical, PiUserCircleLight} from "react-icons/pi";
import Link from "next/link";
import {headerMenuConfiguration} from "@/configurations/menuConfiguration";
import SmallScreenHamburgerMenu from "@/components/uiComponents/smallScreenHamburgerMenu";
import WeatherComponent from "@/components/uiComponents/weatherComponent";

const HeaderMenu = () => {
    return (
        <nav
            className="flex md:flex-col lg:flex-row  justify-between items-center text-gray-600 w-full lg:max-w-[1164px]">
            <SmallScreenHamburgerMenu/>
            {/*menu items*/}
            <div className="w-full lg:w-auto hidden md:block">
                <ul className="flex md:text-base lg:text-lg">
                    {
                        headerMenuConfiguration.items.map((item) => {
                            return (
                                <li key={item.id}>
                                    <Link href={item.url} className="h-16 px-4 flex items-center"> {item.label}</Link>
                                </li>
                            );
                        })
                    }
                    <li className="h-16 px-4 flex items-center text-blue-600"><IoCartOutline className="text-xl"/><span
                        className="text-sm"></span></li>
                </ul>
            </div>
            {/*user account and weather*/}
            <div className="flex items-center text-2xl px-4">
                <div className="px-1"><IoIosSearch className=""/></div>
                <div className="px-1"><PiUserCircleLight/></div>
                <div className="text-3xl"><PiLineVertical/></div>
                {/*weather*/}
                <WeatherComponent/>
            </div>
        </nav>
    );
};

export default HeaderMenu;