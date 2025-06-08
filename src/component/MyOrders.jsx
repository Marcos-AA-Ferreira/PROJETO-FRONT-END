import styled from "styled-components";
import MyProfileMenu from "./MyProfileMenu";

const PedidosContainer = styled.main`
    display: flex;
    gap: 2rem;

    & .meu-pedidos{
        background-color: #FFFFFF;
        border-radius: 0.5rem;
        padding: 1.5rem;
        width: 70vw;
    }

    & .titulos{
        display: flex;
        justify-content: space-between;
        color: #474747;
    }

    & .status{
        font-weight: 100;
        padding-right: 0.5rem;
    }

    & .linha{
        margin: 1rem 0;
        color: #CCCCCC;
    }

    & .img-nome-situacao{
        display: flex;
        gap: 1rem;
        justify-content: space-between;
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

    & .nome-produto{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    & .nome-produto > p{
        color: #8F8F8F;
        font-size: small;
    }

    & .situacao{
        display: flex;

        & .status{
            color: #474747;
            display: none;
        }
    }

    & .transito{
        color: #F6AA1C;
    }

    & .finalizado{
        color: #8F8F8F;
    }

    & .cancelado{
        color: #EE4266;
    }

    @media (max-width: 768px){
        & .menu-perfil{
            display: none;
        }

        & .titulos{
            & .status{
                display: none;
            }
        }

        & .img-nome-situacao{
            flex-direction: column;
        }

        & .situacao{
            justify-content: space-between;
            & .status{
                display: flex;
            }
        }

        & .meu-pedidos{
            padding: 1.5rem;
            width: 90vw;
        }

        & .titulos > h3{
            display: none;
        }
    }
`;

const MyOrders = () => {
    return ( 
        <>
            <PedidosContainer>
                <MyProfileMenu/>

                <section class="meu-pedidos">
                    <div class="titulos">
                        <h4>Meus Pedidos</h4><h4 class="status">STATUS</h4>
                    </div>
                    <hr class="linha" />
                    <div class="img-nome-situacao">
                        <div class="img-nome">
                            <div class="img-produto">
                                <img src="src/assets/White-Sneakers-PNG-Clipart 2 (2).png" alt="White-Sneakers" />
                            </div>
                            <div class="nome-produto">
                                <p>Pedido nº 2234981932</p>
                                <h4>Tênis Nike Revolution 6 Next Nature Masculino</h4>
                            </div>
                        </div>
                        
                        <div class="situacao"><h4 class="status">STATUS</h4><h4 class="transito">Produto em trânsito</h4></div>
                    </div>

                    <hr class="linha" />
                    <div class="img-nome-situacao">
                        <div class="img-nome">
                            <div class="img-produto">
                                <img src="src/assets/White-Sneakers-PNG-Clipart 2 (2).png" alt="White-Sneakers" />
                            </div>
                            <div class="nome-produto">
                                <p>Pedido nº 4495810492</p>
                                <h4>Tênis Nike Revolution 6 Next Nature Masculino</h4>
                            </div>
                        </div>
                        
                        <div class="situacao"><h4 class="status">STATUS</h4><h4 class="finalizado">Finalizado</h4></div>
                    </div>

                    <hr class="linha" />
                    <div class="img-nome-situacao">
                        <div class="img-nome">
                            <div class="img-produto">
                                <img src="src/assets/White-Sneakers-PNG-Clipart 2 (2).png" alt="White-Sneakers" />
                            </div>
                            <div class="nome-produto">
                                <p>Pedido nº 4495810492</p>
                                <h4>Tênis Nike Revolution 6 Next Nature Masculino</h4>
                            </div>
                        </div>
                        
                        <div class="situacao"><h4 class="status">STATUS</h4><h4 class="cancelado">Cancelado</h4></div>
                    </div>

                    <hr class="linha" />
                    <div class="img-nome-situacao">
                        <div class="img-nome">
                            <div class="img-produto">
                                <img src="src/assets/White-Sneakers-PNG-Clipart 2 (2).png" alt="White-Sneakers" />
                            </div>
                            <div class="nome-produto">
                                <p>Pedido nº 4495810492</p>
                                <h4>Tênis Nike Revolution 6 Next Nature Masculino</h4>
                            </div>
                        </div>
                        
                        <div class="situacao"><h4 class="status">STATUS</h4><h4 class="finalizado">Finalizado</h4></div>
                    </div>

                    <hr class="linha" />
                    <div class="img-nome-situacao">
                        <div class="img-nome">
                            <div class="img-produto">
                                <img src="src/assets/White-Sneakers-PNG-Clipart 2 (2).png" alt="White-Sneakers" />
                            </div>
                            <div class="nome-produto">
                                <p>Pedido nº 4495810492</p>
                                <h4>Tênis Nike Revolution 6 Next Nature Masculino</h4>
                            </div>
                        </div>
                        
                        <div class="situacao"><h4 class="status">STATUS</h4><h4 class="finalizado">Finalizado</h4></div>
                    </div>
                </section>
            </PedidosContainer>
        </> 
    );
}
 
export default MyOrders;