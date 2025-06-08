import styled from "styled-components";

const MenuFlutuante = styled.section`
    color: #1F1F1F;

    & .cinza-escuro{
        color: #474747;
    }
    
    & .menu{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    & .img-nome{
        display: flex;
        gap: 1rem;
    }

    & .img-produto{
        display: flex;
        justify-content: center;
        justify-items: center;
        padding: 1rem;
        border-radius: 0.5rem;
        background-color: #E2E3FF;
    }

    & .img-produto > img{
        height: 1.5rem;
    }

    & .nome-valor{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    & .valores{
        display: flex;
        gap: 1rem;
    }

    & .valor-antigo{
        color: #CCCCCC;
        font-weight: 100;
        font-size: small;
        text-decoration: line-through;
    }

    & .valor-total{
        display: flex;
        justify-content: space-between;
    }

    & .total{
        color: #EE4266;
    }

    & .botoes{
        display: flex;
        justify-content: space-between;
    }

    & .botao-vazio{
        border: none;
        background-color: transparent;
        padding: 0.5rem 0;
        color: #474747;
        text-decoration: underline;
    }

    & .botao-carrinho{
        background-color: #EE4266;
        color: #FFFFFF;
        border: none;
        border-radius: 0.5rem;
        padding: 0.5rem;
    }
`;

const CartFlutuante = () => {
    return ( 
        <>
            <MenuFlutuante>
                <section class="menu">
                    <h4 class="cinza-escuro">Meu Carrinho</h4>
                    <hr />
                    <div class="img-nome">
                        <div class="img-produto">
                            <img src="src/assets/White-Sneakers-PNG-Clipart 2 (2).png" alt="White-Sneakers" />
                        </div>
                        <div class="nome-valor">
                            <h4>Tênis Nike Revolution 6 Next Nature Masculino</h4>
                        <div class="valores"><h4 class="cinza-escuro">R$ 219,00</h4><h4 class="valor-antigo">R$ 210,00</h4></div>
                        </div>
                    </div>
                    <hr />
                    <div class="valor-total">
                        <h4>Valor total:</h4><h4 class="total">R$ 219,00</h4>
                    </div>
                    <div class="botoes">
                        <a href=""><button class="botao-vazio">Esvaziar</button></a>
                        <a href="/carrinho"><button class="botao-carrinho">Ver Carrinho</button></a>
                    </div>
                </section>
            </MenuFlutuante>
        </>
     );
}
 
export default CartFlutuante;