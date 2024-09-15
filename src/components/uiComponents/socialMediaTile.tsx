import React from 'react';

interface SocialMediaTileProps {
    children: React.ReactNode,
    color: string,
    typeOfFollowers: string
}

const SocialMediaTile = ({children, color, typeOfFollowers}: SocialMediaTileProps) => {
    return (
        <div className={` flex flex-1 min-w-28 h-16 m-1 text-white`} style={{background: color}}>
            <div className="px-1 flex justify-center items-center bg-gray-700/50 text-lg">{children}</div>
            <div className="flex flex-col flex-grow justify-center items-center p-1">
                <div className="font-semibold">34,520</div>
                <div className="text-xs">{typeOfFollowers}</div>
            </div>
        </div>
    );
};

export default SocialMediaTile;