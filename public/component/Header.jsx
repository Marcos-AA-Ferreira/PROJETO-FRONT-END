import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import styled from "styled-components";
import { useState } from "react";

import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CartFlutuante from "./CartFlutuante";

const HeaderContainer = styled.header`
    background-color: #ffffff;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    & .area-header-1 {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    & .logo-pesquisa {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    & .menu-oculto{
        display: none;
    }

    & .logo-pesquisa > img {
        height: 3rem;
    }

    & .logo-pesquisa > .IconField > .pi {
        position: relative;
        right: 1.75rem;
        top: 0.1rem;
        cursor: pointer;
    }

    & .input {
            margin-top: 0.5rem;
            background-color: #f5f5f5;
            border: none;
            border-radius: 0.25rem;
            padding: 1rem;
            height: 2rem;
            width: 40rem;
    }

    & .icones {
            display: flex;
            gap: 1rem;
            align-items: center;
    }

    & .n-ocultar {
        display: none;
    }

    & .icones > .pi {
        color: #c92071;
        font-size: 1.25rem;
        cursor: pointer;
    }

    & .icones > a > .pi {
        position: relative;
        top: 0.1rem;
        color: #c92071;
        font-size: 1.25rem;
        cursor: pointer;
    }

    & .icones > div > a > .pi {
        position: relative;
        top: 0.1rem;
        color: #c92071;
        font-size: 1.25rem;
        cursor: pointer;
    }

    & .navegacao > ul {
            display: flex;
            flex-direction: row;
            gap: 1rem;
    }

    & .navegacao > ul > li > a {
            text-decoration: none;
            color: #474747;
            font-weight: 300;
            font-size: 1rem;
    }

    & .menu-lateral {
            display: none;
    }

    & .navegacao > ul > li > a.ativo {
        font-weight: bold;
        color: #c92071;
        border-bottom: 2px solid #c92071;
        width: fit-content;
    }

    & .carrinho-fluante{
        position: absolute;
        background-color: #ffffff;
        box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
        padding: 1rem;
        right: 1rem;
        z-index: 500;
        width: 20%;
        border-radius: 0.5rem;
    }

  @media (max-width: 768px) {
    & .menu-oculto{
        display: block;
    }

    & .logo-pesquisa > img {
        height: 2rem;
        padding-left: 10%;
    }

    & .input {
        display: none;
    }

    & .logo-pesquisa > .IconField {
        display: flex;
        align-items: center;
    }

    & .navegacao {
        display: none;
    }

    & .ocultar{
        display: none;
    }

    & .n-ocultar {
        display: flex;
        color: #1f1f1f;
    }

    & .menu-lateral {
        display: block;
        position: absolute;
        top: 5rem;
        left: -100%;
        width: 60%;
        height: 100vh;
        background-color: #ffffff;
        box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
        padding: 2rem;
        transition: left 0.3s ease-in-out;
        z-index: 999;
    }

    & .menu-lateral.ativo {
        left: 0;
    }

    & .menu-conteudo {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    & .menu-conteudo p {
        font-weight: bold;
        margin: 0;
    }

    & .menu-conteudo ul {
        list-style: none;
        padding-left: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    & .menu-conteudo ul li a {
        text-decoration: none;
        color: #1f1f1f;
    }

    & .menu-conteudo ul li a.ativo {
        font-weight: bold;
        color: #c92071;
        border-bottom: 2px solid #c92071;
        width: fit-content;
    }

    & hr {
        border: none;
        border-top: 1px solid #ddd;
        margin: 1rem 0;
    }

    & .carrinho-fluante{
        width: 80%;
    }
  }
`;

const Header = () => {
    const dadosConta = JSON.parse(localStorage.getItem("dadosConta"));

    const navigate = useNavigate();

    const [menuAberto, setMenuAberto] = useState(false);

    const toggleMenu = () => {
        setMenuAberto(!menuAberto);
    };

    const location = useLocation();

    const [isVisible, setIsVisible] = useState(false);

    return (
        <>
            <HeaderContainer>
                <div className="area-header-1">
                    <IconField className="menu-oculto">
                        <InputIcon className="pi pi-bars"
                        onClick={toggleMenu} style={{ fontSize: '1.5rem', color: '#C92071', cursor: 'pointer' }} />
                    </IconField>

                    <div className="logo-pesquisa">
                        <img src="src/assets/DIGITAL STORE - LOGO COR.png" alt="Logo" />

                        <IconField className="IconField">
                            <InputText className="input" id="procurar" placeholder="Digite o nome do produto" />
                            <InputIcon className="pi pi-search ocultar" onClick={() => navigate("/nao-implementado")}/>
                        </IconField>
                    </div>

                    <div>
                        <IconField className="icones">
                            <InputIcon className="pi pi-search n-ocultar" style={{ color: '#CCCCCC', cursor: 'pointer' }} onClick={() => navigate("/nao-implementado")} />
                            <div className="menu-hover"
                                onMouseEnter={() => setIsVisible(true)}
                                onMouseLeave={() => setIsVisible(false)} 
                                >
                                <a href="/carrinho">
                                    <InputIcon className="pi pi-cart-arrow-down" />
                                </a>

                                {isVisible && (
                                    <div class="carrinho-fluante">
                                        <CartFlutuante/>
                                    </div>
                                )}
                            </div>
                            <a href="/meusdados">
                                <InputIcon className="pi pi-user ocultar" />
                            </a>   
                            <p class="ocultar">Olá {dadosConta?.nome.split(' ')[0]}</p>
                        </IconField>
                    </div>
                </div>

                <nav className={`menu-lateral ${menuAberto ? "ativo" : ""}`}>
                    <div className="menu-conteudo">
                        <p>Olá {dadosConta?.nome.split(' ')[0]}</p>
                        <ul>
                        <li><Link to="/meusdados" className={location.pathname === "/meusdados" ? "ativo" : ""}>Minhas Informações</Link></li>
                        <li><Link to="/nao-implementado" className={location.pathname === "/pagamento" ? "ativo" : ""}>Métodos de Pagamento</Link></li>
                        </ul>

                        <hr />

                        <p>Páginas</p>
                        <ul>
                        <li>
                            <Link
                            to="/home"
                            className={location.pathname === "/home" ? "ativo" : ""}
                            >
                            Home
                            </Link>
                        </li>
                        <li>
                            <Link
                            to="/produtos"
                            className=
                            {["/produtos", "/view", "/carrinho"].some(path => location.pathname.includes(path)) ? "ativo" : "" }>
                            Produtos
                            </Link>
                        </li>
                        <li>
                            <Link
                            to="/nao-implementado"
                            className={location.pathname === "/categorias" ? "ativo" : ""}
                            >
                            Categorias
                            </Link>
                        </li>
                        <li>
                            <Link
                            to="/meuspedidos"
                            className={location.pathname === "/meuspedidos" ? "ativo" : ""}
                            >
                            Meus Pedidos
                            </Link>
                        </li>
                        </ul>
                    </div>
                    </nav>

                    <nav className="navegacao">
                    <ul>
                        <li>
                        <Link
                            to="/home"
                            className={location.pathname === "/home" ? "ativo" : ""}
                        >
                            Home
                        </Link>
                        </li>
                        <li>
                        <Link
                            to="/produtos"
                            className={["/produtos", "/view", "/carrinho"].some(path => location.pathname.includes(path)) ? "ativo" : "" }
                        >
                            Produtos
                        </Link>
                        </li>
                        <li>
                        <Link
                            to="/nao-implementado"
                            className={location.pathname === "/categorias" ? "ativo" : ""}
                        >
                            Categorias
                        </Link>
                        </li>
                        <li>
                        <Link
                            to="/meuspedidos"
                            className={location.pathname === "/meuspedidos" ? "ativo" : ""}
                        >
                            Meus Pedidos
                        </Link>
                        </li>
                    </ul>
                </nav>
            </HeaderContainer>
        </>
    );
};

export default Header;