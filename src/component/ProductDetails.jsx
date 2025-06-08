import styled from "styled-components";

import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { useState } from "react";

const DetailsContainer = styled.main`
    display: flex;
    flex-direction: column;
    background-color: #f5f0f5;
    padding: 1rem 3rem;
    gap: 2rem;

    & .caminho{
        color: #474747;
        font-weight: 200;
    }

    & .caminho > strong{
        font-weight: 600;
    }

    & .section-product-detail{
        display: flex;
        gap: 2rem;
    }

    & .area-imagens{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    & .imagem-grande{
        background-color: #E2E3FF;
        display: flex;
        justify-content: center;
        justify-items: center;
        padding: 2rem;
        height: 25rem;
        position: relative;
    }

    & .seta {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-size: 2rem;
        color: #474747;
        cursor: pointer;
        z-index: 1;
    }

    & .seta.esquerda {
        left: 1rem;
    }

    & .seta.direita {
        right: 1rem;
    }

    & .imagem-grande.um {
        background-color: #E2E3FF;
    }

    & .imagem-grande.dois {
        background-color: #FFE8BC;
    }

    & .imagem-grande.tres {
        background-color: #FFC0BC;
    }

    & .imagem-grande.quatro {
        background-color: #DEC699;
    }

    & .imagem-grande.cinco {
        background-color: #E8DFCF;
    }

    & .imagem-grande > img{
        position: relative;
        top: 4rem;
        height: 15rem;
    }

    & .area-imagens-pequenas{
        display: flex;
        gap: 1rem;
    }

    & .imagem-pequena{
        display: flex;
        justify-content: center;
        justify-items: center;
        padding: 1rem;
        border-radius: 0.5rem;
        cursor: pointer;
    }

    & .imagem-pequena.um{
        background-color: #E2E3FF;
    }

    & .imagem-pequena.dois{
        background-color: #FFE8BC;
    }

    & .imagem-pequena.tres{
        background-color: #FFC0BC;
    }

    & .imagem-pequena.quatro{
        background-color: #DEC699;
    }

    & .imagem-pequena.cinco{
        background-color: #E8DFCF;
    }

    & .info-text{
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    & .info-e-avaliacao{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        & h4{
            color: #666666;
            font-weight: 200;
        }
    }    

    & .avaliacoes{
        display: flex;
        gap: 1rem;
    }

    & .nota-area{
        padding: 0rem;
        background-color: #FFB31F;
        border-radius: 0.25rem;
    }

    & .nota{
        display: flex;
        gap: 0.5rem;
        font-size: small;
        padding: 0.1rem 0.5rem;

        & h4{
            color: #FFFFFF;
            font-weight: 600;
        }
    }

    & .valores{
        display: flex;
        gap: 1rem;
        align-items: end;
    }

    & .preco-atual{
        display: flex;
        align-items: end;
        color: #474747;

        & h3{
            font-weight: 200;
            padding-right: 0.25rem;
        }

        & strong{
            font-weight: 200;
        }
    }

    & .preco-antigo{
        color: #CCCCCC;
        text-decoration: line-through;
        font-weight: 200;
    }

    & .descricao{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        & h3{
            color: #8F8F8F;
        }

        & p{
            color: #474747;
        }
    }

    & .tamanho-cores{
        display: flex;
        flex-direction: column;
        gap: 1rem;

        & h3{
            color: #8F8F8F;
        }
    }

    & .opcao-tamanho{
        display: flex;
        gap: 1rem;
    }

    & .tamanho{
        border: solid #CCCCCC 0.05rem;
        border-radius: 0.25rem;
        padding: 0.75rem;
        width: 4%;
        cursor: pointer;

        & h2{
            color: #474747;
        }
    }

    & .cores-opcao{
        display: flex;
        gap: 1.5rem;
    }

    & .sumir{
        color: transparent;
    }

    & .cor{
        border-radius: 1rem;
        width: 2rem;
        height: 2rem;
    }

    & .cor.um{
        background-color: #6FEEFF;  
    }

    & .cor.dois{
        background-color: #FF6969;  
    }

    & .cor.tres{
        background-color: #5E5E5E;  
    }

    & .cor.quatro{
        background-color: #6D70B7;  
    }

    & .comprar{
        background-color: #FFB31F;
        color: #FFFFFF;
        padding: 0.75rem;
        border: none;
        border-radius: 0.5rem;
        font-weight: 600;
        font-size: medium;
        width: 40%;
        cursor: pointer;
    }

    & .imagem-pequena.selecionado {
        border: 2px solid #C92071;
        border-radius: 0.5rem;
    }

    & .cor.selecionado {
        outline: 2px solid #C92071;
        outline-offset: 2px;
    }

    & .tamanho.selecionado {
        background-color: #C92071;
        
        & h2 {
            color: #FFFFFF;
        }
    }

    @media (max-width: 768px) {
        padding: 1rem 1rem;
        gap: 2rem;

        & .section-product-detail{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 2rem;
        }

        & .imagem-grande{
            padding: 0rem;
            height: 20rem;
            width: 90vw;
        }

        & .seta.esquerda {
            left: -0.5rem;
        }

        & .seta.direita {
            right: -0.5rem;
        }

        & .imagem-grande > img{
            position: relative;
            top: 4rem;
            height: 10rem;
        }

        & .area-imagens-pequenas {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 0.5rem;
            padding: 0.5rem;
        }

        & .imagem-pequena {
            width: 4rem; /* Reduz o tamanho da div */
            height: 4rem;
            padding: 0.25rem;
        }

        & .imagem-pequena img {
            width: 100%;
            height: 100%;
            object-fit: contain; /* Ajusta a imagem para caber sem cortar */
        }

        & .comprar{
            width: 60%;
        }
    }
`;

const ProductDetails = () => {

    const [imagemSelecionada, setImagemSelecionada] = useState(0);
    const [corSelecionada, setCorSelecionada] = useState(null);
    const [tamanhoSelecionado, setTamanhoSelecionado] = useState(null);

    const imagens = [
        { classe: 'um', src: "src/assets/White-Sneakers-PNG-Clipart 2 (1).png" },
        { classe: 'dois', src: "src/assets/White-Sneakers-PNG-Clipart 2 (1).png" },
        { classe: 'tres', src: "src/assets/White-Sneakers-PNG-Clipart 2 (1).png" },
        { classe: 'quatro', src: "src/assets/White-Sneakers-PNG-Clipart 2 (1).png" },
        { classe: 'cinco', src: "src/assets/White-Sneakers-PNG-Clipart 2 (1).png" }
    ];

    const cores = ['um', 'dois', 'tres', 'quatro'];
    const tamanhos = [39, 40, 41, 42, 43];


    return ( 
        <>
            <DetailsContainer>
                <h4 class="caminho"><strong>Home</strong> / Produtos / Nike / Tênis Nike Revolution 6 next Nature Masculino</h4>
                <section class="section-product-detail">
                    <div class="area-imagens">
                        <div className={`imagem-grande ${imagens[imagemSelecionada].classe}`}>
                            <IconField className="icones">
                                <InputIcon className="pi pi-angle-left seta esquerda" style={{ color: '#474747', cursor: 'pointer' }} onClick={() => setImagemSelecionada((imagemSelecionada - 1 + imagens.length) % imagens.length)} />
                            </IconField>

                            <img src="src\assets\White-Sneakers-PNG-Clipart 2.png" alt="Tênis Nike Revolution 6 next Nature Masculino" />

                            <IconField className="icones">
                                <InputIcon className="pi pi-angle-right seta direita" style={{ color: '#474747', cursor: 'pointer' }} onClick={() => setImagemSelecionada((imagemSelecionada + 1) % imagens.length)}/>
                            </IconField>
                        </div>
                        
                        <section className="area-imagens-pequenas">
                            {imagens.map((img, index) => (
                                <div
                                    key={index}
                                    className={`imagem-pequena ${img.classe} ${imagemSelecionada === index ? 'selecionado' : ''}`}
                                    onClick={() => setImagemSelecionada(index)}
                                >
                                    <img src={img.src} alt="Tênis Nike" />
                                </div>
                            ))}
                        </section>
                    </div>
                    <div class="info-text">
                        <div class="info-e-avaliacao">
                            <h1>Tênis Nike Revolution 6 next Nature Masculino</h1>
                            <h4>Casual | Nike | REF:38416711</h4>
                            <div class="avaliacoes">
                                <IconField className="icones">
                                    <InputIcon className="pi pi-star-fill" style={{ color: '#F6AA1C', cursor: 'pointer' }} />
                                    <InputIcon className="pi pi-star-fill" style={{ color: '#F6AA1C', cursor: 'pointer' }} />
                                    <InputIcon className="pi pi-star-fill" style={{ color: '#F6AA1C', cursor: 'pointer' }} />
                                    <InputIcon className="pi pi-star-fill" style={{ color: '#F6AA1C', cursor: 'pointer' }} />
                                    <InputIcon className="pi pi-star" style={{ color: '#F6AA1C', cursor: 'pointer' }} />
                                </IconField>

                                <div class="nota-area">
                                    <IconField class="nota">
                                        <h4>4.7</h4>
                                        <InputIcon className="pi pi-star-fill" style={{ color: '#FFFFFF', cursor: 'pointer', fontSize: '0.75rem', paddingTop: '0.1rem' }} />
                                    </IconField>
                                </div>

                                <h4>(90 avaliações)</h4>
                            </div>
                        </div>

                        <div class="valores">
                            <div class="preco-atual"><h3>R$</h3><h1>219</h1><h3><strong>,00</strong></h3></div>
                            <h3 class="preco-antigo">210,00</h3>
                        </div>

                        <div class="descricao">
                            <h3>Descrição do produto</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quis harum, qui asperiores iusto rerum nemo aut doloribus? Aut adipisci fugiat illum autem nostrum architecto repudiandae. Quasi totam nihil ut.
                            </p>
                        </div>

                        <div class="tamanho-cores">
                            <h3>Tamanho</h3>
                            <section className="opcao-tamanho">
                                {tamanhos.map((num, i) => (
                                    <div
                                        key={i}
                                        className={`tamanho ${tamanhoSelecionado === num ? 'selecionado' : ''}`}
                                        onClick={() => setTamanhoSelecionado(num)}
                                    >
                                        <h2>{num}</h2>
                                    </div>
                                ))}
                        </section>
                            <h3>Cores</h3>
                            <section className="cores-opcao">
                                {cores.map((cor, i) => (
                                    <div
                                        key={i}
                                        className={`cor ${cor} ${corSelecionada === i ? 'selecionado' : ''}`}
                                        onClick={() => setCorSelecionada(i)}
                                    >
                                        <p className="sumir">a</p>
                                    </div>
                                ))}
                            </section>
                        </div>

                        <a href="/carrinho"><button class="comprar">COMPRAR</button></a>
                    </div>
                </section>

            </DetailsContainer>
        </>
     );
}
 
export default ProductDetails;