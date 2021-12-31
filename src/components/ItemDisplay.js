import React from 'react'
import styled from 'styled-components';
import chair from '../assets/images/chair.png';

const StyledItemDisplay = styled.div`
    display: flex;
    justify-content: space-between;

    .item-image {
        padding: 40px;
    }

    .item-description {
        padding-top: 40px;
        width: 400px;
        color: #5c5c5c;
        font-weight: 600;
        

        & p {
            margin: 20px 0;
        }

        &__title {
            color: #000;
            font-weight: 800;
            font-size: 24px;
            margin-bottom: 400px;
        }   
    }
`;

const StyledButton = styled.button`
    border: none;
    background-color: #000;
    color: #fff;
    padding: 10px;
    font-weight: 600;
`;

const ItemDisplay = () => {
    return (
        <StyledItemDisplay>
            <div className='item-description'>
                <p>Michael W.Dreeben</p>
                <p className='item-description__title'>Shell Dining Chair</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Cupiditate doloremque
                    consectetur sapiente id possimus quibusdam
                    in dolorem totam optio blanditiis eum, vel
                    pariatur molestias quas ipsum error,
                    fugit quam assumenda?
                </p>
                <StyledButton>Product Details</StyledButton>
            </div>
            <div className='item-image'>
                <img src={chair} alt="Shell Dining Chair" />
            </div>
        </StyledItemDisplay>
    );
}

export default ItemDisplay;