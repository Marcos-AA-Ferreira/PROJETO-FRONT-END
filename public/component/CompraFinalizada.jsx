import styled from "styled-components";

const Recibo = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f5f0f5;
    color: #1F1F1F;

    & .recibo{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        background-color: #FFFFFF;
        padding: 2rem;
        margin: 2rem;
        border-radius: 0.5rem;
        width: 50vw;
    }

    & .h1s{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        font-size: larger;
    }

    & .titulo{
        padding: 0 30%;
    }

    & .emote{
        font-size: 5rem;
    }

    & .info-em-linha{
        display: flex;
        gap: 1rem;
    }

    & .cinza-claro{
        color: #8F8F8F;
        font-weight: 200;
    }

    & .cinza-escuro{
        color: #474747;
        font-size: 1.25rem;
    }

    & .linha{
        color: #CCCCCC;
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

    & .div-total{
        display: flex;
        flex-direction: column;
        margin: 1rem 0;
        padding: 1rem;
        background-color: #F6AA1C26;
        border-radius: 0.5rem;
    }

    & .end{
        text-align: end;
        font-size: smaller;
        margin-top: 0.25rem;
    }

    & .valor-total{
        display: flex;
        justify-content: space-between;
        font-size: x-large;
    }

    & .imprimir{
        text-align: center;
        color: #474747;
        border: none;
        background-color: transparent;
        text-decoration: underline;
    }

    & .volta-home{
        background-color: #F6AA1C;
        color: #FFFFFF;
        padding: 1rem;
        width: 50vw;
        border: none;
        border-radius: 0.5rem;
        margin: 0 0 2rem 0;
    }

    @media (max-width: 768px) {
        & .recibo{
            width: 80vw;
        }

        & .titulo{
            padding: 0 11%;
        }

         & .volta-home{
            width: 90vw;
        }
    }

    @media print {
        body * {
            visibility: hidden;
        }

        & .h1s{
            display: none;
        }

        .recibo, .recibo * {
            visibility: visible;
        }

        .recibo {
            position: absolute;
            left: 0;
            top: 0;
            width: 80vw;
        }

        .volta-home {
            display: none;
        }

        & .imprimir{
            display: none;
        }
    }
`;

const CompraFinalizada = ({ dadosCompra }) => {
    return ( 
        <>
            <Recibo>
                <section class="recibo">
                    <div class="h1s">
                        <h1 class="emote">🎉</h1>
                        <h1 class="titulo">Compra Realizada com sucesso!</h1> 
                    </div>
                    

                    <hr class="linha" />
                    <h2 class="cinza-escuro">Informações Pessoais</h2>

                    <div class="info-em-linha"><h4 class="cinza-claro">Nome:</h4><p>{dadosCompra.nome}</p></div>
                    <div class="info-em-linha"><h4 class="cinza-claro">CPF:</h4><p>{dadosCompra.cpf}</p></div>
                    <div class="info-em-linha"><h4 class="cinza-claro">Email:</h4><p>{dadosCompra.email}</p></div>
                    <div class="info-em-linha"><h4 class="cinza-claro">Celular:</h4><p>{dadosCompra.celular}</p></div>

                    <hr class="linha" />
                    <h2 class="cinza-escuro">Informações de Entrega</h2>

                    <div class="info-em-linha"><h4 class="cinza-claro">Endereço:</h4><p>{dadosCompra.endereco}</p></div>
                    <div class="info-em-linha"><h4 class="cinza-claro">Bairro:</h4><p>{dadosCompra.bairro}</p></div>
                    <div class="info-em-linha"><h4 class="cinza-claro">Cidade:</h4><p>{dadosCompra.cidade}</p></div>
                    <div class="info-em-linha"><h4 class="cinza-claro">CEP:</h4><p>{dadosCompra.cep}</p></div>
                    <div class="info-em-linha"><h4 class="cinza-claro">Complemento:</h4><p>{dadosCompra.complemento}</p></div>

                    <hr class="linha" />
                    <h2 class="cinza-escuro">Informações de Pagamento</h2>

                    <div class="info-em-linha"><h4 class="cinza-claro">Titular do Cartão:</h4><p>{dadosCompra.nomeCartao}</p></div>
                    <div class="info-em-linha"><h4 class="cinza-claro">Final:</h4><p>{dadosCompra.numeroCartao}</p></div>

                    <hr class="linha" />
                    <h2 class="cinza-escuro">Resumo da compra</h2>

                    <section class="resumo">
                        <div class="img-nome">
                            <div class="img-produto">
                                <img src="src/assets/White-Sneakers-PNG-Clipart 2 (2).png" alt="White-Sneakers" />
                            </div>    
                            <h4>Tênis Nike Revolution 6 Next Nature Masculino</h4>
                        </div>
                        <div class="div-total">
                            <div class="valor-total"><h4>Total</h4><h4 class="preco-total">R$ 219,00</h4></div>
                            <p class="cinza-claro end">ou 10x de R$ 21,00 sem juros</p>
                        </div>
                    </section>

                    <button className="imprimir" onClick={() => window.print()}>Imprimir Recibo</button>
                </section>

                <a href="/home"><button class="volta-home">Voltar para Home</button></a>
            </Recibo>
        </> 
    );
}
 
export default CompraFinalizada;