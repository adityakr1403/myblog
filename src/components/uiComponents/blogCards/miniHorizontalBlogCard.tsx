import {blogger_v3} from "googleapis";
import {getFormattedDate, getImageURL} from "@/blogUtils/blogCardUtils";
import Image from "next/image";
import {RxSlash} from "react-icons/rx";

interface MiniHorizontalBlogCardProps {
    post?: blogger_v3.Schema$Post
}

const MiniHorizontalBlogCard = ({post}: MiniHorizontalBlogCardProps) => {
    return (
        <div className="max-w-[350px] flex mb-0.5 ">
            <div className="w-24 h-20 overflow-hidden bg-gray-700 mr-4 shrink-0">
                <Image src={getImageURL(post)} alt={post?.title ?? ""} width={1280} height={1280}/>
            </div>
            <div className="">
                <div className="flex font-sans items-center text-sm mb-1"><span
                    className="text-[#46A9FE] font-semibold">{post?.labels?.at(0)?.toUpperCase()}</span> &nbsp; <span
                    className="transform rotate-[20deg]"> <RxSlash/> </span>&nbsp; <span
                    className="text-[#515A60]"> {getFormattedDate(post)}</span>
                </div>
                <div className="text-sm text-[#17222B] text-ellipsis line-clamp-2">
                    {post?.title}
                </div>
            </div>
        </div>
    );
};

export default MiniHorizontalBlogCard;