"use client";
import React, {useState} from 'react';
import {RxSlash} from "react-icons/rx";
import {MdChevronLeft, MdChevronRight} from "react-icons/md";
import {blogger_v3} from "googleapis";
import Image from "next/image";
import Link from "next/link";
import {getDescription, getFormattedDate, getImageURL} from "@/blogUtils/blogCardUtils";

interface GalleryProps {
    posts?: blogger_v3.Schema$Post[] | undefined
}

const Gallery = ({posts}: GalleryProps) => {
    const [galleryPosts, setGalleryPosts] = useState(posts);

    return (
        <div className="flex flex-col p-4 ">
            <div
                className="lg:max-w-[760px] h-[470px] text-white flex flex-col justify-end relative overflow-hidden">
                {/*image*/}
                <div
                    className="w-full h-full flex justify-center items-center bg-gradient-to-t from-gray-950/100 to-gray-50/0">
                    <Image src={getImageURL(galleryPosts?.at(0) as blogger_v3.Schema$Post)}
                           className={"object-cover h-full md:h-auto -z-10 "}
                           alt={galleryPosts?.at(0)?.title ?? ""} width={1280} height={1280}/>
                </div>
                {/*content*/}
                <div className="w-full p-5 md:p-10 absolute bottom-0 left-0">
                    <div
                        className="flex font-sans items-center text-sm md:text-base"> {galleryPosts?.at(0)?.labels?.at(0)?.toUpperCase()} &nbsp;
                        <span
                            className="transform rotate-[20deg]"> <RxSlash/> </span>&nbsp; {getFormattedDate(galleryPosts?.at(0) as blogger_v3.Schema$Post)}
                    </div>
                    <Link href={`#`}
                          className="text-wrap text-2xl md:text-3xl lg:text-4xl font-bold text-ellipsis line-clamp-2">
                        {galleryPosts?.at(0)?.title}
                    </Link>
                    <div className="h-3"></div>
                    <div className="text-xs md:text-sm text-ellipsis line-clamp-2">
                        {getDescription(galleryPosts?.at(0) as blogger_v3.Schema$Post)}
                    </div>
                </div>
            </div>

            <div className="flex justify-between">
                {/*previous button*/}
                <div className=" max-w-fit z-10">
                    <div
                        className="h-16 px-2 flex justify-center items-center border border-black text-xl text-gray-500">
                        <MdChevronLeft/>
                    </div>
                </div>
                <div className="relative overflow-hidden bg-gray-900 w-full">
                    <div className="flex justify-start overflow-hidden absolute left-0 top-0">
                        {
                            galleryPosts?.map((post: blogger_v3.Schema$Post, index) => {
                                const imageURLs = [];
                                const imgRegex = /<img[^>]+src="([^">]+)"/g;
                                let match;
                                while ((match = imgRegex.exec(post.content ?? "")) !== null) {
                                    imageURLs.push(match[1]);
                                }
                                return <div key={post.id}
                                            className={`bg-gray-700 w-16 h-16 shrink-0 border ${index === 0 ? 'border-white' : ''}`}>
                                    <Image src={imageURLs[0]} alt={post.title ?? ""} width={1280} height={1280}/>
                                </div>;
                            })
                        }
                    </div>
                </div>
                {/*next button*/}
                <div className="max-w-fit">
                    <div
                        className="h-16 px-2 flex justify-center items-center border border-black text-xl text-gray-500">
                        <MdChevronRight/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;