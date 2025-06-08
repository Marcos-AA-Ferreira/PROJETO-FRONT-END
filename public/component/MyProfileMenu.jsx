import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const MenuPerfilContainer = styled.section`
    background-color: #FFFFFF;
    padding: 2rem;
    width: 20vw;
    height: 13vw;
    border-radius: 0.5rem;

    & a{
        text-decoration: none;
    }

    & .linha{
        margin: 1rem 0;
        color: #CCCCCC;
    }

    & .cinza{
        color: #474747;
    }

    & .ativo {
        color: #C92071;
        font-weight: bold; /* opcional */
    }
`;

const MyProfileMenu = () => {

    const location = useLocation();

    return ( 
        <>
            <MenuPerfilContainer className="menu-perfil">
                <h4>Meu Perfil</h4>
                <hr className="linha" />
                <Link to="/meuspedidos" className={`cinza ${location.pathname === "/meuspedidos" ? "ativo" : ""}`}>
                    Meus Pedidos
                </Link>

                <hr className="linha" />
                <Link to="/meusdados" className={`cinza ${location.pathname === "/meusdados" ? "ativo" : ""}`}>
                    Minhas Informações
                </Link>

                <hr className="linha" />
                <Link to="/nao-implementado" className={`cinza ${location.pathname === "/pagamento" ? "ativo" : ""}`}>
                    Método de Pagamento
                </Link>
            </MenuPerfilContainer>
        </> 
    );
}
 
export default MyProfileMenu;