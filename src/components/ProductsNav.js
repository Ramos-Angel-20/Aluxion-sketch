import React from 'react'
import styled from 'styled-components';

const StyledProductsNav = styled.div`
    display: flex;
    font-size: 13px;
    font-weight: 600;
    color: #5c5c5c;

    & div {
        padding: 20px;
    }
`; 


const ProductsNav = () => {
    return (
        <StyledProductsNav>
            <div>
                <span>01</span>
                <p>Shell Dinning Chair</p>
            </div>
            <div>
                <span>02</span>
                <p>Dunes Anthrazite Black</p>
            </div>
        </StyledProductsNav>
    )
}

export default ProductsNav;