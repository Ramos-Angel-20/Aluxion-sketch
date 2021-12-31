import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledMenu = styled.div`
    height: 100vh;
    width: 100%;
    z-index: 9;
    color: #fff;
    background-color: #000;
    position: absolute;
    top: 0;
    left: 0;

    & .display {
        width: 100%;
        max-width: 1200px;
        display: flex;
        justify-content: space-between;
        padding: 200px 0;
        margin: 0 auto;

        & ul {
            font-weight: 400;
            font-size: 40px;

            & li {
                margin: 25px 0;
            }
        }
    }
`;

const fadeIn = {
    hidden: {
        x: '100vw',
    },
    visible: {
        x: '0',
        transition: {
            duration: '0.1',
            type: 'spring',
            damping: 50,
            stiffness: 300
        }
    },
    exit: {
        x: '100vw',
        transition: {
            duration: '0.1',
            type: 'spring',
            damping: 50,
            stiffness: 300
        }
    }
}

const Menu = () => {
    return (
        <motion.div
            variants={fadeIn}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <StyledMenu>
                <div className='display'>
                    <ul>
                        <li>Collection</li>
                        <li>Design</li>
                        <li>Craftmanship</li>
                        <li>Ethics</li>
                    </ul>

                    <div>

                    </div>
                </div>

            </StyledMenu>
        </motion.div>
    );
}

export default Menu;