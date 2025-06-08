import styled from "styled-components";

import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from "primereact/inputtext";
import { useState } from "react";

const CartContainer = styled.main`
    display: flex;
    padding: 3rem;
    gap: 1rem;

    & .ocultar-sem-mw{
        display: none;
        color: #474747;
    }

    & .meu-carrinho{
        display: flex;
        flex-direction: column;
        background-color: #FFFFFF;
        width: 70%;
        padding: 1.5rem;
        border-radius: 0.25rem;
    }

    & .titulos{
        display: flex;
        justify-content: space-between;
        color: #474747;
    }

    & .titulos-para-valores{
        display: flex;
        gap: 1rem;
    }

    & .produto-no-carrinho{
        display: flex;
        padding-top: 1rem;
        justify-content: space-between;
    }

    & .img-info{
        display: flex;
        gap: 1rem;
    }

    & .img-produto{
        display: flex;
        justify-content: center;
        justify-items: center;
        padding: 2rem 1rem;
        border-radius: 0.5rem;
        background-color: #E2E3FF;
        height: 25%;
    }

    & .info-produto{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    & .cinza{
        color: #8F8F8F;
    }

    & .cor{
        display: flex;
        gap: 0.5rem;

        & h4{
            font-weight: 100;
        }
    }

    & .tamanho{
        display: flex;
        gap: 0.5rem;

        & h4{
            font-weight: 100;
        }
    }

    & .valor-quantidade{
        display: flex;
        gap: 2.5rem;
        color: #474747;
    }

    & .adicionar-remover-area{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
    }

    & .div-ad-su{
        border: #CCCCCC solid 0.1rem;
        padding: 0.5rem;
        font-size: 0.5rem;
        cursor: pointer;
    }

    & .adicionar-remover-area > p > a{
            font-size: small;
            color: #474747;
    }

    & .adicionar-remover{
        display: flex;
        align-items: center;
        gap: 1rem;
        color: #474747;
    }

    & .preco-antigo{
        color: #8F8F8F;
        text-decoration: line-through;
        font-weight: 100;
    }

    & .frete-cupom{
        display: flex;
        justify-content: space-between;
    }

    & .cupom{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        color: #474747;
    }

    & .frete{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        color: #474747;
    }

    & .input-text{
        border: none;
        border-radius: 0.5rem;
        color: #474747;
        background-color: #F5F5F5;
        padding: 1rem;
        width: 20vw;
    }

    & .botao-ok{
        margin-left: 1rem;
        padding: 1rem 2rem;
        border-radius: 0.5rem;
        border: none;
        background-color: #F5F5F5;
        color: #C92071;
    }

    & .linha{
        margin: 0.5rem 0;
        color: #CCCCCC;
    }

    & .linha-ocultar{
        margin: 0.5rem 0;
        color: #CCCCCC;
    }

    & .resumo{
        background-color: #FFFFFF;
        padding: 1rem;
        border-radius: 0.5rem;
        width: 20%;
    }

    & .resumo > h4{
        color: #474747;
    }

    & .valores-resumo{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    & .valor-resumo{
        display: flex;
        justify-content: space-between;
        font-weight: 100;
        margin-top: 0.5rem;
    }

    & .div-total > p{
        text-align: end;
        font-size: x-small;
        margin-top: 0.25rem;
    }

    & .valor-total{
        display: flex;
        justify-content: space-between;
        margin-top: 1rem;
        
        & h4{
            font-size: 1.25rem;
        }
    }

    & .preco-total{
        color: #EE4266;
    }

    & .continuar{
        background-color: #F6AA1C;
        color: #FFFFFF;
        border: none;
        border-radius: 0.5rem;
        padding: 1rem 5rem;
        margin: 2rem 0rem 0rem 1.25rem;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        text-align: center;

        & .ocultar-sem-mw{
            display: flex;
            background-color: #FFFFFF;
            border-radius: 0.5rem;
        }

        & .titulos{
            justify-content: center;
        }

        & .meu-carrinho{
            width: 95%;
            padding: 1.5rem;
        }

        & .titulos-para-valores{
            display: none;
        }

        & .produto-no-carrinho{
            flex-direction: column;
            gap: 1rem;
        }

        & .info-produto{
            gap: 0.5rem;
            font-size: small;
        }

        & .valor-quantidade{
            flex-direction: column;
            gap: 0.5rem;
        }

        & .adicionar-remover-area{
            gap: 1rem;
            padding-right: 0rem;
        }

        & .adicionar-remover-area > h4 {
            align-self: flex-start;
        }

        & .div-ad-su{
            padding: 0.75rem;
            width: 3rem;
        }

        & .adicionar-remover{
            gap: 4rem;
        }

        & .preco{
            display: flex;
            justify-content: space-between;
        }

        & .mais-espaco{
            padding-right: 1.75rem;
        }

        & .frete-cupom{
            display: none;
        }

        & .cupom{
            padding: 0.75rem;
            width: 80vw;
        }

        & .frete{
            padding: 0.75rem;
            width: 80vw;
        }

        & .input-text{
            width: 80%;
        }

        & .botao-ok{
            margin-left: 0rem;
            margin-top: 0.75rem;
            padding: 0.75rem;
            width: 90%;
        }

        & .linha-ocultar{
            display: none;
        }

        & .resumo{
            width: 95%;
            padding: 0.5rem 1.5rem;
        }

        & .resumo > h4{
            display: none;
        }

        & .valores-resumo{
            display: none;
        }

        & .continuar{
            margin: 2rem 0rem 0rem 0rem;
            padding: 1rem 6rem;
            width: 100%;
        }
    }
`;

const BuyBox = () => {

    const [quantidade, setQuantidade] = useState(1);

    const aumentarQuantidade = () => setQuantidade(prev => prev + 1);
    const diminuirQuantidade = () => {
        if (quantidade > 1) setQuantidade(prev => prev - 1);
    };

    return ( 
        <>
            <CartContainer>
                <section class="meu-carrinho">
                    <div class="titulos">
                        <h4>MEU CARRINHO</h4>
                        <div class="titulos-para-valores">
                            <h4>QUANTIDADE</h4>
                            <h4>UNITÁRIO</h4>
                            <h4>TOTAL</h4>
                        </div>
                    </div>
                    <hr class="linha" />
                    <div class="produto-no-carrinho">
                        <div class="img-info">
                            <div class="img-produto">
                                <img src="src/assets/White-Sneakers-PNG-Clipart 2 (2).png" alt="White-Sneakers" />
                            </div>
                            <div class="info-produto">
                                <h4>Tênis Nike Revolution 6 Next Nature Masculine</h4>
                                <div class="cor"><h4 class="cinza">Cor:</h4><h4>Vermelho / Branco</h4></div>
                                <div class="tamanho"><h4 class="cinza">Tamanho:</h4><h4>42</h4></div>
                            </div>
                        </div>
                        <div class="valor-quantidade">
                            <div class="adicionar-remover-area">
                                <h4 class="ocultar-sem-mw">QUANTIDADE</h4>
                                <div class="adicionar-remover">
                                    <IconField class="div-ad-su" onClick={diminuirQuantidade}>
                                        <InputIcon className="pi pi-minus"/>
                                    </IconField>

                                    <h5>{quantidade}</h5>

                                    <IconField class="div-ad-su" onClick={aumentarQuantidade}>
                                        <InputIcon className="pi pi-plus" />
                                    </IconField>
                                </div>

                                <p><a href="">Remover Item</a></p>
                            </div>
                            <div class="preco">
                                <h4  class="ocultar-sem-mw">UNITÁRIO</h4>
                                <h4 class="preco-antigo">R$ 210</h4>
                                <h4>R$ 219</h4>
                            </div>
                            <div class="preco">
                                <h4  class="ocultar-sem-mw mais-espaco">TOTAL</h4>
                                <h4 class="preco-antigo">R$ 210</h4>
                                <h4>R$ 219</h4>
                            </div>
                        </div>
                    </div>
                    <hr class="linha-ocultar" />
                    <div class="frete-cupom">
                        <div class="cupom">
                            <h5>Cupom de desconto</h5>
                            <div>
                                <InputText class="input-text" placeholder="Insira seu código"/>
                                <button class="botao-ok">OK</button>
                            </div>
                        </div>
                        <div class="frete">
                            <h5>Calcular frete</h5>
                            <div>
                                <InputText class="input-text" placeholder="Insira seu CEP"/>
                                <button class="botao-ok">OK</button>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="ocultar-sem-mw">
                    <div class="cupom">
                        <h5>Cupom de desconto</h5>
                        <div>
                            <InputText class="input-text" placeholder="Insira seu código"/>
                            <button class="botao-ok">OK</button>
                        </div>
                    </div>
                </section>

                <section  class="ocultar-sem-mw">
                    <div class="frete">
                        <h5>Calcular frete</h5>
                        <div>
                            <InputText class="input-text" placeholder="Insira seu CEP"/>
                            <button class="botao-ok">OK</button>
                        </div>
                    </div>
                </section>

                <section class="resumo">
                    <h4>RESUMO</h4>
                    <hr class="linha-ocultar" />
                    <div class="valores-resumo">
                        <div class="valor-resumo"><h5 class="cinza">Subtotal:</h5><h5>R$ 219,00</h5></div>
                        <div class="valor-resumo"><h5 class="cinza">Frete:</h5><h5>R$ 0,00</h5></div>
                        <div class="valor-resumo"><h5 class="cinza">Desconto:</h5><h5>R$ 30,00</h5></div>
                    </div>
                    <div class="div-total">
                        <div class="valor-total"><h4>Total</h4><h4 class="preco-total">R$ 219,00</h4></div>
                        <p class="cinza">ou 10x de R$ 21,00 sem juros</p>
                    </div>

                    <a href="/comprar"><button class="continuar">Continuar</button></a>
                </section>
            </CartContainer>
        </>
     );
}
 
export default BuyBox;