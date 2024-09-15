import React from 'react';
import {FaCircle} from "react-icons/fa";
import {PiLineVertical} from "react-icons/pi";

const SportsEventCard = () => {
    return (
        <div className="max-w-[350px] flex justify-start items-center mb-0.5 shrink-0">
            <div className="w-24 h-16 relative">
                <div className="rounded-full bg-gray-700 w-16 h-16 border-2 border-white absolute left-0"></div>
                <div className="rounded-full bg-gray-700 w-16 h-16 border-2 border-white absolute right-0"></div>
                <div
                    className="text-white absolute flex justify-center items-center gap-1 bottom-0 right-0 text-xs bg-red-600 rounded py-0.5 px-1">
                    <FaCircle className=""/>
                    LIVE
                </div>
            </div>
            <div className="flex justify-center items-start flex-col px-4">
                <div className="font-bold text-lg">Germany <span
                    className="text-[#A9ADB1] font-semibold">Vs</span> Spain
                </div>
                <div className="flex items-center font-semibold text-sm">
                    <div className=" text-[#A9ADB1]">Tommorrow</div>
                    <PiLineVertical/>
                    <div className="text-[#46A9FE]">M22:30(CST)</div>
                </div>
                <div className="text-sm flex items-center flex-grow font-semibold">
                    <div className=" text-[#A9ADB1]">2-0</div>
                    <PiLineVertical/>
                    <div className="text-[#46A9FE]">17:30 min</div>
                </div>
            </div>
        </div>
    );
};

export default SportsEventCard;