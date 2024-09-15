"use client";
import React, {createContext, useState} from 'react';


export const SmallScreenMenuContext = createContext({} as {
    menuIsOpen: boolean,
    setMenuIsOpen: (value: boolean) => void
});

const SmallScreenMenuProvider = ({children}: { children: React.ReactNode }) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    return (
        <SmallScreenMenuContext.Provider value={{menuIsOpen, setMenuIsOpen}}>
            {children}
        </SmallScreenMenuContext.Provider>
    );
};

export default SmallScreenMenuProvider;