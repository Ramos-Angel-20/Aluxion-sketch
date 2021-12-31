import React, { useContext } from 'react'
import styled from 'styled-components';

import { UIContext } from '../context/ui';

const StyledMenuBtn = styled.button`
    border: 2px solid ${props => props.open ? '#fff' : '#cecece'};
    background-color: transparent;
    padding: 20px 10px;
    position: relative;

    div {
        background-color: ${props => props.open ? '#fff' : '#000'};
        width: 20px;
        height: 2px;
        transition: background-color 1s;

        
        &::after {
            content: '';
            background-color: ${props => props.open ? '#fff' : '#000'};
            width: 20px;
            height: 2px;
            position: absolute;
            bottom: 10px;
            right: 0;
            left: 0;
            margin: 0 auto;
            transition: background-color 1s;
        }

        &::before {
            content: '';
            background-color: ${props => props.open ? '#fff' : '#000'};
            width: 20px;
            height: 1.5px;
            position: absolute;
            top: 10px;
            right: 0;
            left: 0;
            margin: 0 auto;
            transition: background-color 1s;
        }
    }


`;

const MenuBtn = () => {

    const { menuToggleHandler, menuIsOpened } = useContext(UIContext);

    return (
        <StyledMenuBtn onClick={menuToggleHandler} open={menuIsOpened} >
            <div></div>
        </StyledMenuBtn>
    );
}

export default MenuBtn;