import React from 'react';
import {blogger_v3} from "googleapis";
import HorizontalBlogCard from "@/components/uiComponents/blogCards/horizontalBlogCard";
import Link from "next/link";
import CategoryTile from "@/components/uiComponents/categoryTile";
import {IoNewspaperOutline} from "react-icons/io5";

interface InternationalSectionProps {
    postItemList?: blogger_v3.Schema$PostList | undefined
}

const InternationalSection = ({postItemList}: InternationalSectionProps) => {
    const posts = postItemList?.items;
    return (
        <section className="w-full">
            <div className="flex lg:justify-between flex-col lg:flex-row">
                {/*left*/}
                <div className="p-4 flex-grow">
                    <div className="flex justify-between items-center pb-4">
                        <div className="text-2xl font-semibold text-[#17222B]">International</div>
                        <div className="flex text-[#515A60]">
                            SEE ALL
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        {
                            posts?.slice(0,4).map((post: blogger_v3.Schema$Post) => {
                                return <>
                                    <HorizontalBlogCard key={post.id}
                                                        post={post}/>
                                    <hr/>
                                </>
                            })
                        }
                    </div>
                </div>
                {/*right*/}
                <div className="p-4">
                    {/*Categories*/}
                    <div className="flex justify-between items-center pb-4">
                        <div className="text-2xl font-semibold text-[#17222B]">Categories</div>
                        <div className="flex text-[#515A60]">
                            SEE ALL
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <Link href={'/business'}><CategoryTile name={"Business"}/></Link>
                        <Link href={'/entertainment'}> <CategoryTile name={"Entertainment"}/></Link>
                        <Link href={'finance'}> <CategoryTile name={"Finance"}/></Link>
                        <Link href={'/sports'}> <CategoryTile name={"Sports"}/></Link>
                        <Link href={'/technology'}> <CategoryTile name={"Technology"}/></Link>
                        <Link href={'/travel'}> <CategoryTile name={"Travel"}/></Link>
                        <Link href={'/international'}> <CategoryTile name={"International"}/></Link>
                    </div>
                    {/*advertisement*/}
                    <div
                        className="lg:max-w-[350px] h-[300px] flex flex-col justify-between bg-gray-700 rounded my-10 p-7 text-white">
                        <div className="">
                            <div className={`flex items-center mb-4`}>
                                <IoNewspaperOutline className="text-3xl md:text-5xl"/>
                                <div className="text-2xl md:text-4xl"> Newspark</div>
                            </div>
                            <div className="">
                                Newspark responsive newspaper and magazine theme
                            </div>
                        </div>
                        <div className="flex justify-between gap-5 ">
                            <button className="px-3 py-2 bg-blue-500 text-sm">PURCHASE NOW</button>
                            <div className="flex flex-col items-end text-sm">
                                <div className="">ADS</div>
                                <div className="hidden sm:block">350x295px</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default InternationalSection;