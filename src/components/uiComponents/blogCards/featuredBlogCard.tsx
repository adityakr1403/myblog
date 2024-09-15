import React from 'react';
import {blogger_v3} from "googleapis";
import Image from "next/image";
import {RxSlash} from "react-icons/rx";
import {getFormattedDate, getImageURL} from "@/blogUtils/blogCardUtils";

interface FeaturedBlogCardProps {
    post: blogger_v3.Schema$Post
}

const FeaturedBlogCard = ({post}: FeaturedBlogCardProps) => {
    return (
        <div className="w-80 lg:w-64 h-80 bg-gray-700 relative shadow-lg shadow-gray-800">
            {/*image*/}
            <div className="w-full h-full flex justify-center items-center overflow-hidden">
                <Image src={getImageURL(post)} className={'h-full object-cover'} alt={post?.title ?? ""} width={1280}
                       height={1280}/>
            </div>
            <div
                className="w-full h-full absolute bottom-0 bg-gradient-to-t from-gray-950/100 to-gray-50/0 z-10 hover:bg-none"></div>
            <div className="text-white p-4 absolute bottom-0 z-50">
                <div className="flex text-sm font-sans items-center mb-3"> {post?.labels?.at(0)?.toUpperCase()} &nbsp;
                    <span
                        className="transform rotate-[20deg]"> <RxSlash/> </span>&nbsp;{getFormattedDate(post)}
                </div>
                <div className="font-semibold text-ellipsis line-clamp-3"> {post?.title}</div>
            </div>
        </div>
    );
};

export default FeaturedBlogCard;