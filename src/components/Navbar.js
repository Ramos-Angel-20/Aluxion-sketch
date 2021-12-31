import React, { useContext } from "react";
import styled from "styled-components";

import MenuBtn from "./MenuBtn";
import { UIContext } from "../context/ui";

const StyledNav = styled.nav`
    margin: 0 auto;
    max-width: 1200px;
    font-family: 'EB Garamond', serif;
    font-size: 30px;
    padding: 40px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    z-index: 99;

    & h1 {
        color: ${props => props.isOpen ? '#fff' : '#000'};
        transition: color 1s;
    }

`;

const Navbar = () => {
    
    const { menuIsOpened } = useContext(UIContext);
    
    return (
        <StyledNav isOpen={menuIsOpened}>
            <h1>mater</h1>
            <MenuBtn/>
        </StyledNav>
    );
}

export default Navbar;