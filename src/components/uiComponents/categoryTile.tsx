import {HiArrowLongRight} from "react-icons/hi2";

interface CategoryTileProps {
    name: string
}

const CategoryTile = ({name}: CategoryTileProps) => {
    return (
        <div className="lg:max-w-[350px] relative ">
            <div className="absolute w-full h-full bg-black/40 -z-10"></div>
            <div className="flex justify-between items-center p-5 text-white z-10">
                <div className="text-xl">
                    {name}
                </div>
                <div className="text-xl">
                    <HiArrowLongRight/>
                </div>
            </div>
        </div>
    );
};

export default CategoryTile;