import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";


import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';

import { useNavigate } from "react-router-dom";

import OfertaCarrossel from "../component/OfertaCarrossel";



const HomeContainer = styled.main`
        width: 100%;
        display: flex;
        flex-direction: column;
        background-color: #f5f0f5;

        .oferta-carrossel {
            max-width: 100vw;
            overflow: visible;
            }

            .slide {
                width: 100vw;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
            }

            .slick-dots {
                bottom: -30px;
            }

            .slick-dots li button:before {
                font-size: 12px;
                color: #C92071;
                position: relative;
                top: -2rem;
            }

        & .area-colecao{
            display: flex;
            flex-direction: column;
            padding: 4rem;
        }

        & .area-colecao > h2{
            color: #474747;
        }

        & .card-promo{
            background-color: #D8E3F2;
            border-radius: 0.25rem;
            width: 40%;
            display: flex;
            justify-content: space-between;
            overflow: hidden;
        }

        & .colecoes-promo{
            display: flex;
            gap: 2rem;
            padding: 2rem;
        }

        & .info-cole-promo{
            display: flex;
            flex-direction: column;
            position: relative;
            z-index: 1;
            padding: 1rem;
            gap: 2rem;
        }

        & .porc-promo{
            background-color: #E7FF86;
            font-size: small;
            font-weight: 400;
            border-radius: 1rem;
            white-space: nowrap;
            text-align: center;
            width: 7rem;
        }

        & .porc-promo > h2{
            color: #474747;
            padding: 0.5rem 0;
        }

        & .comprar{
            padding: 1rem;
            font-weight: 600;
            border: none;
            border-radius: 0.75rem;
            color: #C92071;
            width: 10rem;
            background-color: #FFFFFF;
            cursor: pointer;
        }

        & .area-colecao-dest > h2{
            color: #474747;
            text-align: center;
        }

        & .colecao-destaque {
            display: flex;
            justify-content: space-between;
            padding: 2rem 4rem;
            gap: 1rem;
            flex-wrap: wrap;
        }

        & .colecao-destaque > div {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 0.5rem;
            flex: 1;
            min-width: 100px;
            max-width: 150px;
            cursor: pointer;
        }

        & .colecao-destaque img {
            max-width: 100%;
            height: auto;
            object-fit: contain;
        }

        & #camiseta{
            position: relative;
            top: -1.5rem;
        }

        & #text-camiseta{
            position: relative;
            top: -2.9rem;
        }

        & .titulo-produto-alta{
            display: flex;
            justify-content: space-between;
            color: #474747;
            padding: 0 3rem;
        }

        & .ver-mais{
            display: flex;
            gap: 1rem;
            color: #C92071;
        }

        & .ver-mais > p > a{
            text-decoration: none;
            color: #C92071;
            cursor: pointer;
        }

        & .cards-4x2ou2x4{
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 2rem;
            padding: 2rem;
        }

        & .card-produto{
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;
            height: 100%;
            cursor: pointer;
        }

        & .card-produto > h2{
            color: #474747;
        }

        & .card-produto > h4{
            color: #8F8F8F;
        }

        & .produto-img{
            background-color: #FFFFFF;
            border-radius: 0.25rem;
            position: relative;
            width: 100%;
            overflow: hidden;
            aspect-ratio: 1 / 1;
        }

        & .valores{
            display: flex;
            gap: 1rem;
        }

        & .preco-antigo{
            color: #8F8F8F;
            text-decoration: line-through;
            font-weight: 100;
        }

        & .produto-img img {
            position: absolute;
            top: 0;
            right: 1.5rem;
            width: 100%;
            height: 100%;
            object-fit: contain;
        }

        & .relative {
            position: absolute;
            top: 1rem;
            left: 0.5rem;
            z-index: 2;
        }

        & .area-oferta-colecao{
            display: flex;
            gap: 15%;
            padding: 5% 10%;
            background-color: #FFFFFF;
        }

        & .oferta-colecao{
            background: linear-gradient(to bottom, #4200FF20, transparent);
            border-radius: 50%;
            width: 30%;
            padding: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        & .oferta-colecao-texto{
            display: flex;
            flex-direction: column;
            padding-top: 1rem;
            width: 30rem;
            gap: 2rem;
        }

        & .oferta-colecao-texto > h6{
            color: #C92071;
            font-size: 1rem;
        }


        & .oferta-colecao-texto > h1{
            font-size: 3rem;
            color: #474747;
        }

        & .oferta-colecao-texto > p{
            color: #474747;
        }

        & .botao-oferta {
            background-color: #C92071;
            border: none;
            padding: 0.5rem;
            width: 60%;
            height: auto;
            border-radius: 0.5rem;
            color: #F5F5F5;
            cursor: pointer;
        }

        @media (max-width: 768px) {
            .slick-dots li button:before {
                font-size: 12px;
                color: #C92071;
                position: relative;
                top: -8vw;
            }

            & .area-colecao{
                padding: 0rem;
                text-align: center;
            }

            & .colecoes-promo {
                gap: 1rem;
                padding: 1rem;
            }

            & .card-promo {
                align-items: center;
                width: 100%;
                height: 12rem;
            }

            & .info-cole-promo h1 {
                font-size: 1rem;
            }

            & .comprar {
                width: 100%;
                font-size: 0.9rem;
                padding: 0.5rem;
            }

            & .porc-promo > h2 {
                font-size: 0.9rem;
                padding: 0.3rem 0;
            }

            & .porc-promo {
                width: 5rem;
            }

            & .card-promo img {
                max-width: 100%;
                height: auto;
            }

            & .colecoes-promo {
                flex-direction: column;
                align-items: center;
            }

            & .colecao-destaque {
                flex-direction: column;
                align-items: center;
            }

            & .produto-img img {
                right: 0.5rem;
            }

            & .cards-4x2ou2x4{
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 0rem;
                padding: 0rem;
            }

            & .relative > h2 {
                font-size: small;
                padding: 0;
            }

            & .area-oferta-colecao{
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            & .oferta-colecao{
                width: 20rem;
                padding: 2rem 0;
            }

            & .oferta-colecao > img{
                width: 22rem;
            }
        }
    `;

const HomePage = () => {

    const navigate = useNavigate();

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        vertical: false,
    };

    return (
        <>
            <HomeContainer>
                
                <div className="oferta-carrossel">
                    <Slider {...settings}>
                        <div className="slide"><OfertaCarrossel /></div>
                        <div className="slide"><OfertaCarrossel /></div>
                        <div className="slide"><OfertaCarrossel /></div>
                        <div className="slide"><OfertaCarrossel /></div>
                    </Slider>
                </div>

                <section class="area-colecao">
                    <h2>Coleções em destaque</h2>
                    <div class="colecoes-promo">
                        <div class="card-promo">
                            <div class="info-cole-promo">
                                <div class="porc-promo">
                                    <h2>30% OFF</h2>
                                </div>
                                <h1>Novo drop Supreme</h1>
                                <button class="comprar" onClick={() => navigate("/nao-implementado")}>Comprar</button>
                            </div>
                            <img src="src\assets\star-wars-storm-trooper-supreme-shirts-supreme-t-shirt-snoopy-clothing-apparel-t-shirt-text-transparent-png-616696 1.png" alt="camisa" />
                        </div>
                        <div class="card-promo">
                            <div class="info-cole-promo">
                                <div class="porc-promo">
                                    <h2>30% OFF</h2>
                                </div>
                                <h1>Coleção <br/>Adidas</h1>
                                <button class="comprar" onClick={() => navigate("/nao-implementado")}>Comprar</button>
                            </div>
                            <img src="src\assets\Mask group.png" alt="sapato" />
                        </div>
                        <div class="card-promo">
                            <div class="info-cole-promo">
                                <div class="porc-promo">
                                    <h2>30% OFF</h2>
                                </div>
                                <h1>Novo Beats Bass</h1>
                                <button class="comprar" onClick={() => navigate("/nao-implementado")}>Comprar</button>
                            </div>
                            <img src="src\assets\d9db11953a2d185d37246bb1f500c957 1.png" alt="fones" />
                        </div>
                    </div>
                </section>

                <section class="area-colecao-dest">
                    <h2>Coleções em destaque</h2>
                    <div class="colecao-destaque">
                        <div onClick={() => navigate("/nao-implementado")}>
                            <img id="camiseta" src="src\assets\Frame 10.png" alt="camisetas" />
                            <h3 id="text-camiseta">Camisetas</h3>
                        </div>

                        <div onClick={() => navigate("/nao-implementado")}>
                            <img src="src\assets\Frame 11.png" alt="calças" />
                            <h3>Calças</h3>
                        </div>

                        <div onClick={() => navigate("/nao-implementado")}>
                            <img src="src\assets\Frame 12.png" alt="bonés" />
                            <h3>Bonés</h3>
                        </div>

                        <div onClick={() => navigate("/nao-implementado")}>
                            <img src="src\assets\Frame 13.png" alt="headphones" />
                            <h3>Headphones</h3>
                        </div>
                        <div onClick={() => navigate("/produtos")}>
                            <img src="src\assets\Frame 14.png" alt="tênis" />
                            <h3>Tênis</h3>
                        </div>
                    </div>
                </section>

                <section class="area-produto-alta">
                    <div class="titulo-produto-alta">
                        <h2>Produtos em alta</h2>
                        <IconField class="ver-mais">
                            <p><a href="/produtos">Ver todos</a></p>
                            <InputIcon className="pi pi-arrow-right"/>
                        </IconField>
                    </div>
                    <div class="cards-4x2ou2x4">

                        <div class="card-produto" onClick={() => navigate("/view")}>
                            <div class="produto-img">
                                <div class="porc-promo relative">
                                    <h2>30% OFF</h2>
                                </div>
                                <img src="src\assets\Layer 1aa 2.png" alt="K-Swiss V8" />
                            </div>
                            <h4>Tênis</h4>
                            <h2>K-Swiss V8 - Masculino</h2>
                            <div class="valores"><h2 class="preco-antigo">$200</h2><h2 class="preco-atual">$100</h2></div>
                        </div>

                        <div class="card-produto" onClick={() => navigate("/view")}>
                            <div class="produto-img">
                                <div class="porc-promo relative">
                                    <h2>30% OFF</h2>
                                </div>
                                <img src="src\assets\Layer 1aa 2.png" alt="K-Swiss V8" />
                            </div>
                            <h4>Tênis</h4>
                            <h2>K-Swiss V8 - Masculino</h2>
                            <div class="valores"><h2 class="preco-antigo">$200</h2><h2 class="preco-atual">$100</h2></div>
                        </div>

                        <div class="card-produto" onClick={() => navigate("/view")}>
                            <div class="produto-img">
                                <img src="src\assets\Layer 1aa 2.png" alt="K-Swiss V8" />
                            </div>
                            <h4>Tênis</h4>
                            <h2>K-Swiss V8 - Masculino</h2>
                            <div class="valores"><h2 class="preco-antigo">$200</h2><h2 class="preco-atual">$100</h2></div>
                        </div>

                        <div class="card-produto" onClick={() => navigate("/view")}>
                            <div class="produto-img">
                                <img src="src\assets\Layer 1aa 2.png" alt="K-Swiss V8" />
                            </div>
                            <h4>Tênis</h4>
                            <h2>K-Swiss V8 - Masculino</h2>
                            <div class="valores"><h2 class="preco-antigo">$200</h2><h2 class="preco-atual">$100</h2></div>
                        </div>

                        <div class="card-produto" onClick={() => navigate("/view")}>
                            <div class="produto-img">
                                <img src="src\assets\Layer 1aa 2.png" alt="K-Swiss V8" />
                            </div>
                            <h4>Tênis</h4>
                            <h2>K-Swiss V8 - Masculino</h2>
                            <div class="valores"><h2 class="preco-antigo">$200</h2><h2 class="preco-atual">$100</h2></div>
                        </div>

                        <div class="card-produto" onClick={() => navigate("/view")}>
                            <div class="produto-img">
                                <img src="src\assets\Layer 1aa 2.png" alt="K-Swiss V8" />
                            </div>
                            <h4>Tênis</h4>
                            <h2>K-Swiss V8 - Masculino</h2>
                            <div class="valores"><h2 class="preco-antigo">$200</h2><h2 class="preco-atual">$100</h2></div>
                        </div>

                        <div class="card-produto" onClick={() => navigate("/view")}>
                            <div class="produto-img">
                                <img src="src\assets\Layer 1aa 2.png" alt="K-Swiss V8" />
                            </div>
                            <h4>Tênis</h4>
                            <h2>K-Swiss V8 - Masculino</h2>
                            <div class="valores"><h2 class="preco-antigo">$200</h2><h2 class="preco-atual">$100</h2></div>
                        </div>

                        <div class="card-produto" onClick={() => navigate("/view")}>
                            <div class="produto-img">
                                <img src="src\assets\Layer 1aa 2.png" alt="K-Swiss V8" />
                            </div>
                            <h4>Tênis</h4>
                            <h2>K-Swiss V8 - Masculino</h2>
                            <div class="valores"><h2 class="preco-antigo">$200</h2><h2 class="preco-atual">$100</h2></div>
                        </div>
                    </div>
                </section>

                <section class="area-oferta-colecao">
                    <div class="oferta-colecao">
                        <img src="src\assets\Laye 1.png" alt="Air Jordan" />
                    </div>
                    <div class="oferta-colecao-texto">
                        <h6>oferta especial</h6>
                        <h1>Air Jordan edição de colecionador</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, sapiente! Neque et adipisci commodi sint placeat nulla nobis voluptas pariatur fugit, quos sequi a veniam eaque porro rerum iusto soluta!</p>
                        <button class="botao-oferta" onClick={() => navigate("/nao-implementado")}>Ver Ofertas</button>
                    </div>
                </section>

            </HomeContainer>
        </>
    )
}

export default HomePage;
