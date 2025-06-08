import styled from "styled-components";
import FilterGroup from "./FilterGroup";

import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const ProductListingContainer = styled.main`
    display: flex;
    flex-direction: column;
    background-color: #f5f0f5;
    padding: 2rem 5rem;

    & .ordenar{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0 0 2rem 0;
    }

    & .menu-flutuante{
        border: #474747 solid 0.05rem;
        border-radius: 0.25rem;
        padding: 0.5rem;
        cursor: pointer;
    }

    & .ordenar-filtrar{
        display: flex;
        gap: 1rem;
    }

    & .selecionar{
        display: flex;
        flex-direction: row;
        gap: 1rem;
    }

    & .selecionado{
        font-weight: 100;
    }

    & .opcao{
        padding-left: 40%;
        cursor: pointer;
    }

    & .filter{
        background-color: #C92071;
        color: #FFFFFF;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        display: none;
        border-radius: 0.5rem;
        height: 1.25rem;
        cursor: pointer;
    }

    & .area-produto{
        display: flex;
        flex-direction: row;
    }

    & .cards-4x2ou2x4{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
        padding: 0 0 0 2rem;
        //flex: 1;
    }

    & .dropdown {
        position: relative;
        display: inline-block;
    }

    & .dropdown-toggle {
        background-color: #f0f0f0;
        padding: 0.5rem 1rem;
        border: 1px solid #ccc;
        cursor: pointer;
        border-radius: 4px;
    }

    & .dropdown-menu {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        background-color: #ffffff;
        border: 1px solid #ccc;
        list-style: none;
        padding: 0;
        margin: 0.25rem 0 0 0;
        width: 100%;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        z-index: 10;
    }

    & .dropdown-menu li {
        padding: 0.5rem 1rem;
        cursor: pointer;
    }

    & .dropdown-menu li:hover {
        background-color: #f0f0f0;
    }

    & .card-produto{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        height: 100%;
    }

    & .card-produto > a{
        text-decoration: none;
    }

    & .text-card-promo{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding-top: 1rem;
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

    & .card-produto > a > div > h2{
        color: rgb(71, 71, 71);
        font-weight: 300;
    }

    & .card-produto > a > div > h4{
        color: #8F8F8F;
        font-weight: 300;
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
        color: #1F1F1F;
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

    & .menu-lateral {
        display: none;
    }

    & .filter-desktop {
        display: block;
        width: 40%;
    }

    @media (max-width: 768px) {
        padding: 1rem 2rem;

        & .ordenar{
            flex-direction: column-reverse;
            gap: 1rem;
            padding: 0 0 1rem 0;
        }

        & .ordenar-filtrar{
            justify-content: space-between;
        }

        & .cards-4x2ou2x4{
            grid-template-columns: repeat(2, 1fr);
            padding: 0 0 0 0rem;
        }

        & .filter{
            display: flex;
        }

        & .menu-lateral {
            display: block;
            position: absolute;
            top: 5rem;
            left: -100%;
            width: 60%;
            background-color: #ffffff;
            box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
            padding: 0.5rem;
            transition: left 0.3s ease-in-out;
            z-index: 999;
        }

        & .menu-lateral.ativo {
            left: 0;
        }

        & .filter-desktop {
            display: none;
        }

        & .overlay {
            position: absolute;
            top: 0;
            left: 0;
            margin-top: 5.85rem; /* espaço para o header */
            width: 100%;
            height: 315%;
            background-color: rgba(71, 71, 71, 0.5); // cinza com transparência
            z-index: 998; // abaixo do menu-lateral que está com 999
            display: none;
        }

        & .overlay.ativo {
            display: block;
        }
    }
`;

const ProductListing = () => {

    const [menuAbertoFlutuante, setMenuAbertoFlutuante] = useState(false);
    const [opcaoSelecionada, setOpcaoSelecionada] = useState('Mais relevantes');
    
    
    const toggleDropdown = () => {
        setMenuAbertoFlutuante(prev => !prev);
    };

    const selectOption = (opcao) => {
        setOpcaoSelecionada(opcao);
        setMenuAbertoFlutuante(false);
    };

    const [menuAberto, setMenuAberto] = useState(false);

    const toggleMenu = () => {
        setMenuAberto(!menuAberto);
    };

    const location = useLocation();

    return ( 
        
        <>
            <ProductListingContainer>
                <section class="ordenar">
                    <p>Resultados para "Tênis" - 389 produtos</p>

                    <div class="ordenar-filtrar">
                        <div className="menu-flutuante">
                            <IconField class="selecionar" onClick={toggleDropdown}>
                                <h4>Ordenar por: <span class="selecionado">{opcaoSelecionada}</span></h4>
                                <InputIcon className="pi pi-chevron-down"/>
                            </IconField>
                            {menuAbertoFlutuante && (
                                <ul>
                                    <li class="opcao" onClick={() => selectOption('Mais relevantes')}>Mais relevantes</li>
                                    <li class="opcao" onClick={() => selectOption('Menor preço')}>Menor preço</li>
                                    <li class="opcao" onClick={() => selectOption('Maior preço')}>Maior preço</li>
                                    <li class="opcao" onClick={() => selectOption('Mais vendidos')}>Mais vendidos</li>
                                </ul>
                            )}
                        </div>
                        <IconField class="filter">
                            <InputIcon className="pi pi-filter" onClick={toggleMenu}/>
                        </IconField>

                        {menuAberto && <div className="overlay ativo" onClick={toggleMenu} />}

                        <div className={`menu-lateral ${menuAberto ? "ativo" : ""}`}>
                            <FilterGroup fecharMenu={() => setMenuAberto(false)}/>
                        </div>
                    </div>
                </section>

                <section class="area-produto">
                    <div className="filter-desktop">
                        <FilterGroup />
                    </div>
                    <section class="area-produto-alta">
                        <div>
                            <div class="cards-4x2ou2x4">
                                <div class="card-produto">
                                    <a class="link" href="/view">
                                        <div class="produto-img">
                                            <div class="porc-promo relative">
                                                <h2>30% OFF</h2>
                                            </div>
                                            <img src="src\assets\Layer 1aa 2.png" alt="K-Swiss V8" />
                                        </div>
                                        
                                        <div class="text-card-promo">
                                            <h4>Tênis</h4>
                                            <h2>K-Swiss V8 - Masculino</h2>
                                            <div class="valores">
                                                <h2 class="preco-antigo">$200</h2><h2 class="preco-atual">$100</h2>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="card-produto">
                                    <a class="link" href="/view">
                                        <div class="produto-img">
                                            <div class="porc-promo relative">
                                                <h2>30% OFF</h2>
                                            </div>
                                            <img src="src\assets\Layer 1aa 2.png" alt="K-Swiss V8" />
                                        </div>
                                        
                                        <div class="text-card-promo">
                                            <h4>Tênis</h4>
                                            <h2>K-Swiss V8 - Masculino</h2>
                                            <div class="valores">
                                                <h2 class="preco-antigo">$200</h2><h2 class="preco-atual">$100</h2>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="card-produto">
                                    <a class="link" href="/view">
                                        <div class="produto-img">
                                            <img src="src\assets\Layer 1aa 2.png" alt="K-Swiss V8" />
                                        </div>
                                        
                                        <div class="text-card-promo">
                                            <h4>Tênis</h4>
                                            <h2>K-Swiss V8 - Masculino</h2>
                                            <div class="valores">
                                                <h2 class="preco-antigo">$200</h2><h2 class="preco-atual">$100</h2>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="card-produto">
                                    <a class="link" href="/view">
                                        <div class="produto-img">
                                            <img src="src\assets\Layer 1aa 2.png" alt="K-Swiss V8" />
                                        </div>
                                        
                                        <div class="text-card-promo">
                                            <h4>Tênis</h4>
                                            <h2>K-Swiss V8 - Masculino</h2>
                                            <div class="valores">
                                                <h2 class="preco-antigo">$200</h2><h2 class="preco-atual">$100</h2>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="card-produto">
                                    <a class="link" href="/view">
                                        <div class="produto-img">
                                            <img src="src\assets\Layer 1aa 2.png" alt="K-Swiss V8" />
                                        </div>
                                        
                                        <div class="text-card-promo">
                                            <h4>Tênis</h4>
                                            <h2>K-Swiss V8 - Masculino</h2>
                                            <div class="valores">
                                                <h2 class="preco-antigo">$200</h2><h2 class="preco-atual">$100</h2>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="card-produto">
                                    <a class="link" href="/view">
                                        <div class="produto-img">
                                            <img src="src\assets\Layer 1aa 2.png" alt="K-Swiss V8" />
                                        </div>
                                        
                                        <div class="text-card-promo">
                                            <h4>Tênis</h4>
                                            <h2>K-Swiss V8 - Masculino</h2>
                                            <div class="valores">
                                                <h2 class="preco-antigo">$200</h2><h2 class="preco-atual">$100</h2>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="card-produto">
                                    <a class="link" href="/view">
                                        <div class="produto-img">
                                            <img src="src\assets\Layer 1aa 2.png" alt="K-Swiss V8" />
                                        </div>
                                        
                                        <div class="text-card-promo">
                                            <h4>Tênis</h4>
                                            <h2>K-Swiss V8 - Masculino</h2>
                                            <div class="valores">
                                                <h2 class="preco-antigo">$200</h2><h2 class="preco-atual">$100</h2>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="card-produto">
                                    <a class="link" href="/view">
                                        <div class="produto-img">
                                            <img src="src\assets\Layer 1aa 2.png" alt="K-Swiss V8" />
                                        </div>
                                        
                                        <div class="text-card-promo">
                                            <h4>Tênis</h4>
                                            <h2>K-Swiss V8 - Masculino</h2>
                                            <div class="valores">
                                                <h2 class="preco-antigo">$200</h2><h2 class="preco-atual">$100</h2>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="card-produto">
                                    <a class="link" href="/view">
                                        <div class="produto-img">
                                            <img src="src\assets\Layer 1aa 2.png" alt="K-Swiss V8" />
                                        </div>
                                        
                                        <div class="text-card-promo">
                                            <h4>Tênis</h4>
                                            <h2>K-Swiss V8 - Masculino</h2>
                                            <div class="valores">
                                                <h2 class="preco-antigo">$200</h2><h2 class="preco-atual">$100</h2>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="card-produto">
                                    <a class="link" href="/view">
                                        <div class="produto-img">
                                            <img src="src\assets\Layer 1aa 2.png" alt="K-Swiss V8" />
                                        </div>
                                        
                                        <div class="text-card-promo">
                                            <h4>Tênis</h4>
                                            <h2>K-Swiss V8 - Masculino</h2>
                                            <div class="valores">
                                                <h2 class="preco-antigo">$200</h2><h2 class="preco-atual">$100</h2>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="card-produto">
                                    <a class="link" href="/view">
                                        <div class="produto-img">
                                            <img src="src\assets\Layer 1aa 2.png" alt="K-Swiss V8" />
                                        </div>
                                        
                                        <div class="text-card-promo">
                                            <h4>Tênis</h4>
                                            <h2>K-Swiss V8 - Masculino</h2>
                                            <div class="valores">
                                                <h2 class="preco-antigo">$200</h2><h2 class="preco-atual">$100</h2>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="card-produto">
                                    <a class="link" href="/view">
                                        <div class="produto-img">
                                            <img src="src\assets\Layer 1aa 2.png" alt="K-Swiss V8" />
                                        </div>
                                        
                                        <div class="text-card-promo">
                                            <h4>Tênis</h4>
                                            <h2>K-Swiss V8 - Masculino</h2>
                                            <div class="valores">
                                                <h2 class="preco-antigo">$200</h2><h2 class="preco-atual">$100</h2>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="card-produto">
                                    <a class="link" href="/view">
                                        <div class="produto-img">
                                            <img src="src\assets\Layer 1aa 2.png" alt="K-Swiss V8" />
                                        </div>
                                        
                                        <div class="text-card-promo">
                                            <h4>Tênis</h4>
                                            <h2>K-Swiss V8 - Masculino</h2>
                                            <div class="valores">
                                                <h2 class="preco-antigo">$200</h2><h2 class="preco-atual">$100</h2>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="card-produto">
                                    <a class="link" href="/view">
                                        <div class="produto-img">
                                            <img src="src\assets\Layer 1aa 2.png" alt="K-Swiss V8" />
                                        </div>
                                        
                                        <div class="text-card-promo">
                                            <h4>Tênis</h4>
                                            <h2>K-Swiss V8 - Masculino</h2>
                                            <div class="valores">
                                                <h2 class="preco-antigo">$200</h2><h2 class="preco-atual">$100</h2>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="card-produto">
                                    <a class="link" href="/view">
                                        <div class="produto-img">
                                            <img src="src\assets\Layer 1aa 2.png" alt="K-Swiss V8" />
                                        </div>
                                        
                                        <div class="text-card-promo">
                                            <h4>Tênis</h4>
                                            <h2>K-Swiss V8 - Masculino</h2>
                                            <div class="valores">
                                                <h2 class="preco-antigo">$200</h2><h2 class="preco-atual">$100</h2>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                    </section>
                </section>
                
            </ProductListingContainer>
        </>
     );
}
 
export default ProductListing;