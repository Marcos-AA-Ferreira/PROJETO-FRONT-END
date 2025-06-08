import styled from "styled-components";

import { InputText } from "primereact/inputtext";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useConta } from "../contexts/ContaContext";

const CriarContaContainer = styled.main`
    background-color: #f5f5f5;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    & .img-semi-cabecalho {
        background-color: #FFFFFF;
    }

    & .img-semi-cabecalho > img {
        height: 1.5rem;
        width: auto;
        margin: 1rem;
    }

    & .area-infor-conta{
        display: flex;
        flex-direction: column;
        width: 60vw;
        margin: 0 auto;
    }

    & .div-input{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        color: #474747;
        background-color: #FFFFFF;
        padding: 1rem;
        border-radius: 0.5rem;
        margin-top: 2rem;
    }

    & .input-text{
        border: none;
        border-radius: 0.5rem;
        color: #474747;
        background-color: #F5F5F5;
        padding: 1rem;
        width: 58vw;
    }

    & .linha{
        margin: 0.5rem 0;
        color: #CCCCCC;
    }

    & .checkbox-label {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;
        color: #474747;
        font-size: 0.95rem;
    }

    & .checkbox-input {
        appearance: none;
        width: 1.1rem;
        height: 1rem;
        border: 2px solid #C92071;
        border-radius: 0.25rem;
        position: relative;
        cursor: pointer;
        transition: background-color 0.2s;
    }

    & .checkbox-input:checked {
        background-color: #C92071;
        //border-color: #C92071;
    }

    & .checkbox-input:checked::after {
        content: "";
        position: absolute;
        top: 2px;
        left: 35%;
        width: 3px;
        height: 6px;
        border: solid white;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
    }

    & .termos{
        width: 60vw;
        margin: 0 auto;
    }

    & .text-termo{
        color: #474747;
    }

    & .criar-conta{
        width: 60vw;
        margin: 2rem auto;
        margin-top: 0;
        background-color: #C92071;
        color: #FFFFFF;
        padding: 0.5rem;
        border: none;
        border-radius: 0.5rem;
    }

    @media (max-width: 768px) {
        & .area-infor-conta{
            width: 85vw;
        }

        & .div-input{
            padding: 0.75rem;
            width: 80vw;
        }

        & .input-text{
            width: 100%;
        }

        & .termos{
            width: 85vw;
        }

        & .criar-conta{
            width: 85vw;
        }

        & .checkbox-label {
            font-size: 0.85rem;
            flex-direction: row;
            align-items: flex-start;
        }

        & .checkbox-input {
            width: 2rem;
            height: 1rem;
        }
    }
`;

const CriarConta = () => {

    const navigate = useNavigate();
    const { setDadosConta } = useConta();

    const [formData, setFormData] = useState({
        nome: "",
        cpf: "",
        email: "",
        celular: "",
        endereco: "",
        bairro: "",
        cidade: "",
        cep: "",
        complemento: ""
    });

    const [aceitoTermos, setAceitoTermos] = useState(false);

    const handleChange = (e, campo) => {
        setFormData({ ...formData, [campo]: e.target.value });
    };

    const handleCheckboxChange = (e) => {
        setAceitoTermos(e.target.checked);
    };

    const handleCriarConta = () => {
        const camposVazios = Object.values(formData).some(valor => String(valor).trim() === "");

        if (camposVazios || !aceitoTermos) {
            alert("Por favor, preencha todos os campos obrigatórios e aceite os termos.");
            return;
        }

        setDadosConta(formData); 
        localStorage.setItem("dadosConta", JSON.stringify(formData));

        setDadosConta(formData);

        navigate('/');
    };
    

    return ( 
        <>
            <CriarContaContainer>
                <div className="img-semi-cabecalho">
                    <img src="src/assets/DIGITAL STORE - LOGO COR.png" alt="LOGO" />
                </div>

                <section class="area-infor-conta">
                    <section class="input-area">
                        <div class="div-input">
                            <h5>Informações Pessoais</h5>
                            <hr class="linha"/>

                            <h5>Nome Completo *</h5>
                            <InputText className="input-text" placeholder="Insira seu nome" value={formData.nome} onChange={(e) => handleChange(e, "nome")}/>

                            <h5>CPF *</h5>
                            <InputText className="input-text" placeholder="Insira seu CPF" value={formData.cpf} onChange={(e) => handleChange(e, "cpf")}/>

                            <h5>E-mail *</h5>
                            <InputText className="input-text" placeholder="Insira seu email" value={formData.email} onChange={(e) => handleChange(e, "email")}/>

                            <h5>Celular *</h5>
                            <InputText className="input-text" placeholder="Insira seu celular" value={formData.celular} onChange={(e) => handleChange(e, "celular")}/>
                        </div>
                    </section>

                    <section  class="input-area">
                        <div class="div-input">
                            <h5>Informações de Entrega</h5>
                            <hr class="linha"/>

                            <h5>Endereço *</h5>
                            <InputText className="input-text" placeholder="Insira seu endereço" value={formData.endereco} onChange={(e) => handleChange(e, "endereco")}/>

                            <h5>Bairro *</h5>
                            <InputText className="input-text" placeholder="Insira seu bairro" value={formData.bairro} onChange={(e) => handleChange(e, "bairro")}/>

                            <h5>Cidade *</h5>
                            <InputText className="input-text" placeholder="Insira sua cidade" value={formData.cidade} onChange={(e) => handleChange(e, "cidade")}/>

                            <h5>CEP *</h5>
                            <InputText className="input-text" placeholder="Insira seu CEP" value={formData.cep} onChange={(e) => handleChange(e, "cep")}/>

                            <h5>Complemento *</h5>
                            <InputText className="input-text" placeholder="Insira complemento" value={formData.complemento} onChange={(e) => handleChange(e, "complemento")}/>
                        </div>
                    </section>
                </section>

                <div className="termos">
                    <label className="checkbox-label">
                        <input
                            type="checkbox"
                            className="checkbox-input"
                            checked={aceitoTermos}
                            onChange={handleCheckboxChange}
                        />
                        Quero receber por email ofertas e novidades das lojas da Digital Store. A frequência de envios pode variar de acordo com a interação do cliente.
                    </label>
                </div>

                <button class="criar-conta" onClick={handleCriarConta}>Criar Conta</button>
                
            </CriarContaContainer>
        </>
     );
}
 
export default CriarConta;