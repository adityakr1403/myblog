import React from 'react';
import Link from "next/link";
import {blogger_v3} from "googleapis";
import {getDescription, getFormattedDate, getImageURL} from "@/blogUtils/blogCardUtils";
import Image from "next/image";

interface HorizontalBlogCardProps {
    post: blogger_v3.Schema$Post
}

const HorizontalBlogCard = ({post}: HorizontalBlogCardProps) => {
    return (
        <div className="flex flex-col md:flex-row  justify-start gap-5 md:gap-10 ">
            <div
                className="md:flex-1 lg:max-w-[350px] h-[230px] bg-[#17222B] shrink-0 overflow-hidden flex items-center justify-center">
                <Image src={getImageURL(post)} alt={post.title ?? ""} width={1280} height={1280}/>
            </div>
            <div className="py-2 h-[230px] md:flex-1 lg:max-w-[350px] relative overflow-hidden">
                <div className="flex font-sans items-center text-sm mb-3"><span
                    className="text-[#46A9FE] font-semibold">{post.labels?.at(0)?.toUpperCase()}</span> &nbsp; &nbsp;
                    <span
                        className="text-[#515A60] font-semibold">{getFormattedDate(post)}</span>
                </div>
                <div className="text-xl text-[#17222B] font-semibold mb-2 line-clamp-2">{post.title}
                </div>
                <div className="text-sm mb-2 text-[#515A60] text-ellipsis line-clamp-3">
                    {
                        getDescription(post)
                    }
                </div>

                <Link href={"#"}>
                    <button
                        className="py-2 px-4 border md:absolute left-0 border-gray-700 text-gray-600 bottom-2 text-sm">Read
                        more
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default HorizontalBlogCard;