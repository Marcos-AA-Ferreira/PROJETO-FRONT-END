import styled from "styled-components";

import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';

const SectionContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #f5f0f5;
    
    & .titulo-produto-alta{
        display: flex;
        justify-content: space-between;
        color: #474747;
        padding: 1rem 3rem 0 3rem;
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
        padding: 0 2rem 2rem 2rem;
    }

    & .card-produto{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
        height: 100%;
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
        font-weight: 200;
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

    & .porc-promo{
        background-color: #E7FF86;
        font-size: small;
        font-weight: 400;
        border-radius: 1rem;
        white-space: nowrap;
        text-align: center;
        width: 7rem;
        color: #1F1F1F;
    }

    @media (max-width: 768px) {
        & .titulo-produto-alta{
            display: flex;
            justify-content: space-between;
            color: #474747;
            padding: 1rem 0.5rem;
        }

        & .titulo-produto-alta > h2{
            font-size: 1.25rem;
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
    }
`;

const Section = () => {
    return ( 
        <>
            <SectionContainer>
                <section class="area-produto-alta">
                    <div class="titulo-produto-alta">
                        <h2>Produtos Relacionados</h2>
                        <IconField class="ver-mais">
                            <p><a href="/produtos">Ver todos</a></p>
                            <InputIcon className="pi pi-arrow-right"/>
                        </IconField>
                    </div>
                    <div class="cards-4x2ou2x4">
                        <div class="card-produto">
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
                        <div class="card-produto">
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
                        <div class="card-produto">
                            <div class="produto-img">
                                <img src="src\assets\Layer 1aa 2.png" alt="K-Swiss V8" />
                            </div>
                            <h4>Tênis</h4>
                            <h2>K-Swiss V8 - Masculino</h2>
                            <div class="valores"><h2 class="preco-antigo">$200</h2><h2 class="preco-atual">$100</h2></div>
                        </div>
                        <div class="card-produto">
                            <div class="produto-img">
                                <img src="src\assets\Layer 1aa 2.png" alt="K-Swiss V8" />
                            </div>
                            <h4>Tênis</h4>
                            <h2>K-Swiss V8 - Masculino</h2>
                            <div class="valores"><h2 class="preco-antigo">$200</h2><h2 class="preco-atual">$100</h2></div>
                        </div>
                    </div>
                </section>
            </SectionContainer>
        </>
     );
}
 
export default Section;