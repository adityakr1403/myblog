import React from 'react';
import {IoNewspaperOutline} from "react-icons/io5";
import {FaFacebookF, FaInstagram, FaYoutube} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            {/*section1*/}
            <div className="bg-[#17222B] text-white w-full flex justify-center items-center">
                <div className="flex flex-col md:flex-row justify-between p-4 w-full lg:max-w-[1164px]">
                    <div className="mb-4">
                        <div className={`flex items-center mb-4`}>
                            <IoNewspaperOutline className="text-5xl text-blue-500"/>
                            <div className="text-4xl"> Newspark</div>
                        </div>
                        <div className=" flex gap-1">
                            <div className="w-10 h-10 bg-white/10 flex justify-center items-center"><FaFacebookF/></div>
                            <div className="w-10 h-10 bg-white/10 flex justify-center items-center"><FaXTwitter/></div>
                            <div className="w-10 h-10 bg-white/10 flex justify-center items-center"><FaYoutube/></div>
                            <div className="w-10 h-10 bg-white/10 flex justify-center items-center"><FaInstagram/></div>
                        </div>
                    </div>
                    {/*sign up newsletter*/}
                    <div className="flex flex-col justify-end">
                        <div className="text-xl font-semibold mb-4 self-end">Newsletter</div>
                        <div className="flex justify-end flex-wrap gap-2">
                            <input type="text" placeholder="Enter your email"
                                   className="p-2 md:p-4 border border-dashed w-48 md:w-52"/>
                            <button className="bg-blue-500 p-4">Sign up</button>
                        </div>
                    </div>
                </div>
                <hr className="border-gray-300 border-dashed"/>
                <div className="">

                </div>
            </div>
            {/*section2*/}
            <div className="w-full bg-[#232D36] flex justify-center items-center">
                <div
                    className="flex flex-col justify-center items-center lg:flex-row lg:justify-between text-base  text-[#7B8186] py-7 w-full lg:max-w-[1164px]">
                    <div className="p-4 ">Copyright &copy; 2024 All Rights Reserved</div>
                    <div className=" flex flex-wrap justify-between">
                        <div className="p-4 lg:ml-7 text-nowrap">About</div>
                        <div className="p-4 lg:ml-7 text-nowrap">Advertise</div>
                        <div className="p-4 lg:ml-7 text-nowrap">Privacy & Policy</div>
                        <div className="p-4 lg:ml-7 text-nowrap">Contact Us</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;