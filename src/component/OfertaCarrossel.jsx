import styled from "styled-components";

const OfertaCarrosselContainer = styled.section`
    & .ofertas-principal{
        background-color: #F5F5F5;
        display: flex;
        padding: 7rem;
        height: 20rem;
    }

    & .textos-ofertas{
        display: flex;
        flex-direction: column;
        width: 27%;
        height: auto;
        gap: 1rem;
        flex-grow: 1;
        flex-shrink: 0;
        flex-basis: 30%;
    }        

    & .textos-ofertas > p{
        color: #474747;
    }

    & .texto-1{
        color: #F6AA1C;
    }

    & .texto-titulo{
        font-weight: 900;
        font-size: 3rem;
    }

    & .botao-oferta {
        background-color: #C92071;
        border: none;
        padding: 0.5rem;
        width: 60%;
        height: auto;
        border-radius: 0.5rem;

        & a{
            text-decoration: none;
            color: #F5F5F5;
        }
    }
        
    & .ofertas1{
        position: relative;
        top: -7rem;
        right: 4rem;
        height: 40rem;
    }

    & .descoracao{
        height: 10rem;
        position: relative;
        right: 8rem;
    }

    @media (max-width: 768px) {
        & .ofertas-principal {
            flex-direction: column-reverse;
            align-items: center;
            position: relative;
            padding: 2rem;
            height: 35rem;
        }

        & .textos-ofertas {
            width: 100%;
            text-align: center;
            align-items: center;
        }

        & .texto-titulo {
            font-size: 2rem;
        }

        & .botao-oferta {
            width: 80%;
        }

        & .ofertas1 {
            position: static;
            height: 20rem;
            margin-top: 2rem;
        }

        & .descoracao {
            position: relative;
            height: 7rem;
            margin-top: 1rem;
            top: 8rem;
            left: 55%;
        }
    }
`;

const OfertaCarrossel = () => {
    return ( 
        <>
            <OfertaCarrosselContainer>
                <section class="ofertas-principal">
                    <div class="textos-ofertas">
                        <h3 class="texto-1">Melhores ofertas personalizadas</h3>
                        <h1 class="texto-titulo">Queima de Estoque Nike 🔥</h1>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident modi iusto, quam ullam blanditiis porro odio rerum at pariatur quidem. Ratione fugit laborum iusto maiores repellat tempora nostrum deserunt molestiae!
                        </p>
                        <button class="botao-oferta"><a href="/view">Ver Ofertas</a></button>
                    </div>
                    <img class="ofertas1" src="src\assets\White-Sneakers-PNG-Clipart 1.png" alt="oferta" />
                    <img class="descoracao" src="src\assets\Ornament 11.png" alt="" />
                </section>
            </OfertaCarrosselContainer>
        </>
     );
}
 
export default OfertaCarrossel;