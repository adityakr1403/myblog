import React from 'react';
import {blogger_v3} from "googleapis";
import {CiSquareChevLeft, CiSquareChevRight} from "react-icons/ci";
import BlogCard from "@/components/uiComponents/blogCards/blogCard";
import MiniHorizontalBlogCard from "@/components/uiComponents/blogCards/miniHorizontalBlogCard";
import {IoNewspaperOutline} from "react-icons/io5";
import SportsEventCard from "@/components/uiComponents/sportsEventCard";

interface SportsSectionProps {
    postItemList?: blogger_v3.Schema$PostList | undefined
}

const SportsSection = ({postItemList}: SportsSectionProps) => {
    const posts = postItemList?.items;
    return (
        <section className="w-full">
            <div className="flex flex-col lg:flex-row">
                {/*left*/}
                <div className="p-4">
                    <div className="flex justify-between pb-4">
                        <div className="text-2xl font-semibold text-[#17222B]">Sports News</div>
                        <div className="flex text-[#515A60]">
                            {/*left button*/}
                            <div className="text-4xl"><CiSquareChevLeft/></div>
                            {/*right button*/}
                            <div className="text-4xl"><CiSquareChevRight/></div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-10 justify-start ">
                        {/*posts*/}
                        <div className="flex gap-10">
                            <BlogCard post={posts?.at(0)}/>
                        </div>
                        <div className="flex flex-col gap-4">
                            <MiniHorizontalBlogCard post={posts?.at(1)}/>
                            <MiniHorizontalBlogCard post={posts?.at(2)}/>
                            <MiniHorizontalBlogCard post={posts?.at(3)}/>
                            <MiniHorizontalBlogCard post={posts?.at(4)}/>
                        </div>
                    </div>
                    <hr className="my-1 mb-7 border border-dashed"/>
                    <div className="flex flex-col lg:flex-row justify-between">
                        <div className="flex flex-col">
                            <MiniHorizontalBlogCard post={posts?.at(2)}/>
                            <hr className="my-4 border border-dashed"/>
                        </div>
                        <div className="flex flex-col">
                            <MiniHorizontalBlogCard post={posts?.at(4)}/>
                            <hr className="my-4 border border-dashed"/>
                        </div>
                    </div>
                    {/*ad banner*/}
                    <div className="h-24 max-w-[700px] flex justify-between items-center bg-[#233340] rounded">
                        <div className={` flex items-center text-white px-5 lg:px-10`}>
                            <IoNewspaperOutline className="text-3xl md:text-4xl lg:text-5xl"/>
                            <div className="text-2xl md:text-3xl lg:text-4xl"> Newspark</div>
                        </div>
                        <div className={` hidden lg:flex items-center text-white px-3 lg:px-4 `}>
                            <div className="text-sm md:text-base lg:text-lg"> Newspark responsive news website</div>
                        </div>
                        <div className={`text-white px-5 lg:px-10`}>
                            <div className="text-sm md:text-base lg:text-xl"> Ads</div>
                            <div className="text-sm md:text-base lg:text-xl text-nowrap"> 800x100</div>
                        </div>
                    </div>
                </div>
                {/*right*/}
                <div className="p-4">
                    <div className="flex justify-between pb-4">
                        <div className="text-2xl font-semibold text-[#17222B] text-nowrap">Upcoming Matches</div>
                        <div className="flex text-[#515A60]">
                            {/*left button*/}
                            <div className="text-4xl"><CiSquareChevLeft/></div>
                            {/*right button*/}
                            <div className="text-4xl"><CiSquareChevRight/></div>
                        </div>
                    </div>
                    <div className="flex flex-col mb-5">
                        <SportsEventCard/>
                        <hr className="my-3 border border-dashed"/>
                        <SportsEventCard/>
                        <hr className="my-2 border border-dashed"/>
                        <SportsEventCard/>
                        <hr className="my-2 border border-dashed"/>
                        <SportsEventCard/>
                        <hr className="my-2 border border-dashed"/>
                        <SportsEventCard/>
                    </div>
                    {/*newsletter*/}
                    <div className="">
                        <div className="flex lg:max-w-[350px] flex-col p-5 bg-[#E9EAEB]">
                            <div className="text-2xl font-semibold text-[#17222B] pb-4">Newsletter</div>
                            <div className="text-sm text-gray-500">
                                Your email address will not be published. Required fields are marked *
                            </div>
                            <div className="h-4"></div>
                            <div className="flex flex-wrap">
                                <input type="text" placeholder="Enter your email"
                                       className="p-2 md:p-4 border border-dashed w-48 md:w-52"/>
                                <button className="bg-blue-500 text-white p-2 md:p-4">SIGN UP</button>
                            </div>
                            <div className="h-4"></div>
                            <div className="text-sm text-gray-500">Subscribe to our newsletter to get the latest
                                news
                                and updates
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SportsSection;