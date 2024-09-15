import React from 'react';
import {blogger_v3} from "googleapis";
import {RxSlash} from "react-icons/rx";
import {FaFacebookF} from "react-icons/fa";
import {PiLineVertical} from "react-icons/pi";
import {FaXTwitter} from "react-icons/fa6";
import {getFormattedDate} from "@/blogUtils/blogCardUtils";

interface NumberedBlogCardProps {
    post: blogger_v3.Schema$Post
    postNumber: number
}

const NumberedBlogCard = ({post, postNumber}: NumberedBlogCardProps) => {
    return (
        <div className="max-w-[350px] flex items-center mb-0.5 shrink-0">
            <div
                className="w-12 h-12 rounded-full border-2 border-[#E7E8E9] mr-4 shrink-0 flex justify-center items-center">
                <div className="text-3xl text-[#A9ADB1]">{postNumber}</div>
            </div>
            <div className="flex flex-col">
                <div className="flex font-sans items-center text-sm mb-1"><span
                    className="text-[#46A9FE] font-semibold">{post.labels?.at(0)?.toUpperCase()}</span> &nbsp; <span
                    className="transform rotate-[20deg]"> <RxSlash/> </span>&nbsp; <span
                    className="text-[#515A60]"> {getFormattedDate(post)} </span>
                </div>
                <div className="text-base text-[#17222B] text-ellipsis line-clamp-2">
                    {post.title}
                </div>
                <div className="flex items-center justify-start gap-2 text-[#A9ADB1] text-xs">
                    <div className="flex justify-center items-center gap-1"><FaFacebookF/>0</div>
                    <div className="flex justify-center items-center"><PiLineVertical/></div>
                    <div className="flex justify-center items-center gap-1"><FaXTwitter/>0</div>
                </div>
            </div>
        </div>
    );
};

export default NumberedBlogCard;