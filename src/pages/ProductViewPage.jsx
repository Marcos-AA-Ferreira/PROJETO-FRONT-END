import styled from "styled-components";

import ProductDetails from "../component/ProductDetails";
import Section from "../component/Section";

const ViewContainer = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #f5f0f5;
`;

const ProductViewPage = () => {
    
    return (
        <>
            <ViewContainer>
                <ProductDetails />
                <Section />
            </ViewContainer>
        </>
    )
}

export default ProductViewPage;