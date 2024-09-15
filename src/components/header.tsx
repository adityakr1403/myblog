import React from 'react';
import {IoNewspaperOutline} from "react-icons/io5";
import Link from "next/link";

const Header = () => {
    return (
        <div className="flex justify-between my-4 w-full lg:max-w-[1164px]">
            {/*logo*/}
            <Link href={'/'} className={` flex items-center px-4`}>
                <IoNewspaperOutline className="text-5xl"/>
                <div className="text-4xl"> Newspark</div>
            </Link>
            {/*ad banner*/}
            <div
                className="max-w-[800px] shrink h-24 justify-between items-center bg-[#233340] rounded mx-4 hidden md:flex">
                <div className={` flex items-center text-white px-10`}>
                    <IoNewspaperOutline className="md:text-3xl lg:text-5xl"/>
                    <div className="md:text-2xl lg:text-4xl"> Newspark</div>
                </div>
                <div className={` flex items-center text-white px-10`}>
                    <div className="hidden md:text-lg lg:text-xl lg:block"> Newspark responsive news website</div>
                </div>
                <div className={`text-white px-10`}>
                    <div className="md:text-lg lg:text-xl"> Ads</div>
                    <div className="md:text-lg lg:text-xl text-nowrap"> 800x100</div>
                </div>

            </div>

        </div>
    );
};

export default Header;