import styled from "styled-components";

import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { useNavigate } from "react-router-dom";

const Footer = () => {

    const FooterContainer = styled.footer`
        background-color: #1F1F1F;
        color: #F5F5F5;
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 2rem 0;
        gap: 1rem;

        & .area-logo{
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        & .area-logo > h2{
            display: flex;
            gap: 0.5rem;
            font-size: 2rem;
            font-weight: 600;
        }

        & .area-logo > p{
            width: 40vw;
        }

        & .logo-footer{
            height: 1.5rem;
            position: relative;
            top: 0.4rem;
        }

        & .icones{
            display: flex;
            gap: 1rem;
            cursor: pointer;
        }

        & .footer-dados{
            display: flex;
            gap: 7rem;
            padding: 0 3rem;
        }

        & .info-categ{
            display: flex;
            gap: 6rem;
        }

        & .info-categ > div{
            width: 10vw;
        }

        & .info-categ > div > ul{
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }

        & .info-categ > div > ul > li{
            cursor: pointer;
        }

        & h4{
            font-weight: 600;
            margin: 0 0 1rem 0;
        }

        & .linha {
            border: none;
            border-top: 1px solid #F5F5F5;
            width: 90%;
            margin: 1rem auto;
        }

        & .direitos{
            text-align: center;
        }

        @media (max-width: 768px) {
            & .area-logo > p{
                width: auto;
            }

            & .footer-dados{
            flex-direction: column;
            gap: 2rem;
            }

            & .info-categ{
                gap: 2rem;
            }

            & .info-categ > div{
                width: 50vw;
            }
        }
    `;

    const navigate = useNavigate();

    return ( 
    <>
        <FooterContainer>
            <div class="footer-dados">
                <div class="area-logo">
                    <h2><img class="logo-footer" src="src\assets\Group_footer.png" alt="logo-footer" />Digital College</h2>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum iure omnis neque eveniet necessitatibus veritatis, maiores eos suscipit, explicabo, maxime sed ipsum cum laudantium velit harum fugit temporibus. Sint, autem.
                    </p>
                    
                    <IconField class="icones">
                        <InputIcon className="pi pi-facebook" onClick={() => navigate("/nao-implementado")}/>
                        <InputIcon className="pi pi-instagram" onClick={() => navigate("/nao-implementado")}/>
                        <InputIcon className="pi pi-twitter" onClick={() => navigate("/nao-implementado")}/>
                    </IconField>
                </div>
                <div class="info-categ">
                    <div>
                        <h4>Informação</h4>
                        <ul>
                            <li onClick={() => navigate("/nao-implementado")}>Sobre Drip Story</li>
                            <li onClick={() => navigate("/nao-implementado")}>Segurança</li>
                            <li onClick={() => navigate("/nao-implementado")}>Wishlist</li>
                            <li onClick={() => navigate("/nao-implementado")}>Blog</li>
                            <li onClick={() => navigate("/nao-implementado")}>Trabalhe Conosco</li>
                            <li onClick={() => navigate("/meuspedidos")}>Meus Pedidos</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Categorias</h4>
                        <ul>
                            <li onClick={() => navigate("/nao-implementado")}>Camisetas</li>
                            <li onClick={() => navigate("/nao-implementado")}>Calças</li>
                            <li onClick={() => navigate("/nao-implementado")}>Bonés</li>
                            <li onClick={() => navigate("/nao-implementado")}>Headphones</li>
                            <li onClick={() => navigate("/produtos")}>Tênis</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h4>Contato</h4>
                    <p>
                        Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161
                        <br />
                        (85) 3051-3411
                    </p>
                </div>
            </div>
            <hr className="linha" />
            <p class="direitos">@ 2025 Digital College</p>
            
        </FooterContainer>
    </> 
    );
}
 
export default Footer;