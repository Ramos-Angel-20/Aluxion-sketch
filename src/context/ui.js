import React, { useState, createContext } from "react";

export const UIContext = createContext({
    selectedPage: '',
    menuIsOpened: false,
    menuToggleHandler: () => {},
    selectedPageChangeHandler: () => {}
});

const UIProvider = ({ children }) => {

    const [menuIsOpenend, setMenuIsOpenend] = useState(false);
    const [selectedPage, setSelectedPage] = useState('');

    const menuToggleHandler = () => {
        setMenuIsOpenend(prevState => !prevState);
    }

    const selectedPageChangeHandler = () => {

    }

    const uiContext = {
        menuIsOpened: menuIsOpenend,
        selectedPage: selectedPage,
        menuToggleHandler,
        selectedPageChangeHandler
    };

    return (
        <UIContext.Provider value={uiContext}>
            {children}
        </UIContext.Provider>
    );
}

export default UIProvider;



