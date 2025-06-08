import styled from "styled-components";

import BuyBox from "../component/BuyBox";
import Section from "../component/Section";

const CartContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #f5f0f5;

    & .area-produto-alta{
        width: 75vw;
    }

    @media (max-width: 768px) {
        & .area-produto-alta{
            display: none;
        }
    }
`;

const CartPage = () => {
    return ( 
        <>
            <CartContainer>
                <BuyBox />
                <Section />
            </CartContainer>
        </>
     );
}
 
export default CartPage;