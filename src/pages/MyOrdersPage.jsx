import styled from "styled-components";
import MyOrders from "../component/MyOrders";

const MyOrdersPageContainer = styled.main`
    background-color: #f5f5f5;
    padding: 2rem;

    @media (max-width: 768px){
        padding: 1rem;
    }
`;

const MyOrdersPage = () => {
    return ( 
        <>
            <MyOrdersPageContainer>
                <MyOrders/>
            </MyOrdersPageContainer>
        </>
     );
}
 
export default MyOrdersPage;