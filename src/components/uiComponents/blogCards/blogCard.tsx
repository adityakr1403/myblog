import React from 'react';
import {blogger_v3} from "googleapis";
import Image from "next/image";
import {getDescription, getFormattedDate, getImageURL} from "@/blogUtils/blogCardUtils";

interface BlogCardProps {
    post?: blogger_v3.Schema$Post
}

const BlogCard = ({post}: BlogCardProps) => {
    return (
        <div className="flex-grow lg:max-w-[350px] ">
            <div className="h-80 lg:max-w-[350px] lg:h-[230px] bg-[#17222B] overflow-hidden">
                <Image src={getImageURL(post)} alt={post?.title ?? ""} width={1280} height={1280}/>
            </div>
            <div className="py-5">
                <div className="flex font-sans items-center text-sm mb-1"><span
                    className="text-[#46A9FE] font-semibold">{post?.labels?.at(0)?.toUpperCase()}</span> &nbsp; &nbsp;
                    <span
                        className="text-[#515A60] font-semibold"> {getFormattedDate(post)}</span>
                </div>
                <div className="text-xl text-[#17222B] font-semibold mb-2 text-ellipsis line-clamp-2"> {post?.title}
                </div>
                <div className="text-sm text-[#515A60] text-ellipsis line-clamp-3">
                    {
                        getDescription(post)
                    }
                </div>
            </div>
        </div>
    );
};

export default BlogCard;