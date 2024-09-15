import React from 'react';
import {CiCalendarDate, CiSquareChevLeft, CiSquareChevRight} from "react-icons/ci";
import {PiLineVertical} from "react-icons/pi";
import {FaFacebookF, FaPinterestP, FaYoutube} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";

const TopBanner = () => {
    const getTodayFormattedDate = () => {
        const date = new Date();
        const options = {year: 'numeric', month: 'long', day: '2-digit'} as Intl.DateTimeFormatOptions;
        return new Intl.DateTimeFormat('en-US', options).format(date);
    }
    return (
        <div className={`w-full hidden md:flex justify-between items-center lg:max-w-[1164px]`}>
            {/*Trending carousel*/}
            <div className="flex gap-3 justify-center items-center px-4">
                <div className="bg-red-500 text-white py-3 px-5">Trending</div>
                <div className="">
                    <p className="text-sm text-gray-500 w-[500px] text-nowrap overflow-hidden">
                        Entilators will be taken from certain New York hospitals and redistributed to the worst-hit
                        parts of the state under an
                    </p>
                </div>
                <div className="flex text-gray-300">
                    {/*left button*/}
                    <div className="text-3xl"><CiSquareChevLeft/></div>
                    {/*right button*/}
                    <div className="text-3xl"><CiSquareChevRight/></div>
                </div>
            </div>
            {/*date and social links*/}
            <div className="hidden lg:flex gap-2 justify-center items-center px-4  ">
                {/*date*/}
                <div className=" text-sm flex justify-center items-center gap-1"><CiCalendarDate
                    className="text-2xl"/> {getTodayFormattedDate()}
                </div>
                <PiLineVertical/>
                {/*social media*/}
                <div className="flex text-gray-500 text-sm items-center justify-center">
                    <div className="flex justify-center items-center w-5 h-5"><FaFacebookF/></div>
                    <div className="flex justify-center items-center w-5 h-5"><FaXTwitter/></div>
                    <div className="flex justify-center items-center w-5 h-5"><FaYoutube/></div>
                    <div className="flex justify-center items-center w-5 h-5"><FaPinterestP/></div>
                </div>
            </div>

        </div>
    );
};

export default TopBanner;