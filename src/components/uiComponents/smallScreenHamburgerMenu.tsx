"use client";
import React, {useContext} from 'react';
import {GiHamburgerMenu} from "react-icons/gi";
import {SmallScreenMenuContext} from "@/contexts/smallScreenMenuContext";

const SmallScreenHamburgerMenu = () => {
    const {setMenuIsOpen} = useContext(SmallScreenMenuContext);
    return (
        <div className="md:hidden mx-4">
            <div className="border w-11 h-11 flex justify-center items-center"
                 onClick={() => {
                     setMenuIsOpen(true);
                 }}>
                <GiHamburgerMenu className="text-2xl"/>
            </div>
        </div>
    );
};

export default SmallScreenHamburgerMenu;