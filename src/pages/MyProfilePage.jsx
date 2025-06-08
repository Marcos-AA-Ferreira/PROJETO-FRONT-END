import styled from "styled-components";
import Profile from "../component/Profile";
import { useState } from "react";
import UpdateData from "../component/UpdateData";

const MyProfilePageContainer = styled.main`
    display: flex;
    padding: 2rem;
    background-color: #f5f0f5;

    @media (max-width: 768px){
        padding: 1rem;
    }
`;

const MyProfilePage = () => {

    const [atualizarDados, setAtualizarDados] = useState(false);
    const handleAtualizarDados = () => {
        setAtualizarDados(true);
    };


    return ( 
        <>
            <MyProfilePageContainer>
                {!atualizarDados ? (
                    <Profile onFinalizar={handleAtualizarDados}/>
                ):(
                    <UpdateData />
                )}
            </MyProfilePageContainer>
        </>
     );
}
 
export default MyProfilePage;