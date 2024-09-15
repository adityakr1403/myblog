import React from 'react';
import {blogger_v3} from "googleapis";
import {CiSquareChevLeft, CiSquareChevRight} from "react-icons/ci";
import BlogCard from "@/components/uiComponents/blogCards/blogCard";
import NumberedBlogCard from "@/components/uiComponents/blogCards/numberedBlogCard";

interface EntertainmentSectionProps {
    postItemList?: blogger_v3.Schema$PostList | undefined
}

const EntertainmentSection = ({postItemList}: EntertainmentSectionProps) => {
    let posts = postItemList?.items;
    return (
        <section className="">
            <div className="flex flex-col lg:flex-row">
                {/*left*/}
                <div className="p-4 overflow-hidden">
                    <div className="flex justify-between pb-4">
                        <div className="text-2xl font-semibold text-[#17222B]">Entertainment</div>
                        <div className="flex text-[#515A60]">
                            {/*left button*/}
                            <div className="text-4xl"><CiSquareChevLeft/></div>
                            {/*right button*/}
                            <div className="text-4xl"><CiSquareChevRight/></div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 justify-start ">
                        {/*posts*/}
                        <div className="flex flex-col md:flex-row gap-10">
                            <BlogCard post={posts?.at(0)}/>
                            <BlogCard post={posts?.at(1)}/>
                        </div>
                        <div className="flex flex-col md:flex-row gap-10">
                            <BlogCard post={posts?.at(2)}/>
                            <BlogCard post={posts?.at(3)}/>
                        </div>
                    </div>
                </div>
                {/*right*/}
                <div className="p-4 ">
                    <div className="flex justify-between pb-4">
                        <div className="text-2xl font-semibold text-[#17222B] text-nowrap">Slider Post</div>
                        <div className="flex text-[#515A60]">
                            {/*left button*/}
                            <div className="text-4xl"><CiSquareChevLeft/></div>
                            {/*right button*/}
                            <div className="text-4xl"><CiSquareChevRight/></div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        {
                            posts?.slice(0, 8).map((post, index) => {
                                return <>
                                    <NumberedBlogCard postNumber={index + 1} post={post}/>
                                    <hr className="my-3 border border-dashed"/>
                                </>

                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EntertainmentSection;