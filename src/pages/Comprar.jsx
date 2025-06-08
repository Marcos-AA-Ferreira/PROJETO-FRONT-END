import styled from "styled-components";

import { useState } from "react";

import BuyFinal from "../component/BuyFinal";
import CompraFinalizada from "../component/CompraFinalizada";

const ComprarContainer = styled.section`
    display: flex;
    flex-direction: column;
    background-color: #f5f0f5;
    padding: 2rem;

    @media (max-width: 768px) {
    }
`;

const Comprar = () => {
    const [compraConcluida, setCompraConcluida] = useState(false);
    const [dadosCompra, setDadosCompra] = useState(null);

    const handleFinalizarCompra = (dados) => {
        setDadosCompra(dados);
        setCompraConcluida(true);
    };

    return ( 
        <>
            <ComprarContainer>
                {!compraConcluida ? (
                    <BuyFinal onFinalizar={handleFinalizarCompra} />
                ) : (
                    <CompraFinalizada dadosCompra={dadosCompra} />
                )}
            </ComprarContainer>
        </> 
    );
}
 
export default Comprar;


