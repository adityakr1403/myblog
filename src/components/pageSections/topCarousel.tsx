import {MdChevronLeft, MdChevronRight} from "react-icons/md";
import {blogger_v3} from "googleapis";
import TopCarouselBlogCard from "@/components/uiComponents/blogCards/topCarouselBlogCard";

interface TopCarouselProps {
    postItemList?: blogger_v3.Schema$PostList
}

const TopCarousel = ({postItemList}: TopCarouselProps) => {
    const posts = postItemList?.items;
    return (
        // Latest posts carousel
        <div className="hidden md:flex w-full justify-center items-center p-3 h-32">
            {/*previous button*/}
            <div className="h-20 px-2 flex justify-center items-center shadow-2xl shadow-black">
                <div className="text-xl text-gray-500">
                    <MdChevronLeft/>
                </div>
            </div>
            <div className="flex overflow-hidden">
                {
                    posts?.map((post: blogger_v3.Schema$Post) => {
                        return <TopCarouselBlogCard key={post.id} post={post}/>
                    })
                }
            </div>
            {/*next button*/}
            <div className="h-20 px-2 flex justify-center items-center shadow-2xl shadow-black">
                <div className="text-xl text-gray-500">
                    <MdChevronRight/>
                </div>
            </div>
        </div>
    );
};

export default TopCarousel;