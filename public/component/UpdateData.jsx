import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useConta } from "../contexts/ContaContext";

const UpdateDataContainer = styled.section`
    background-color: #f5f0f5;
    padding-left: 2%;

    & .area-infor-atualizar {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90vw;
        gap: 1rem;
    }

    & .div-input {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        color: #474747;
        background-color: #FFFFFF;
        padding: 1rem;
        border-radius: 0.5rem;
        width: 50vw;
    }

    & .input-text {
        border: none;
        border-radius: 0.5rem;
        color: #474747;
        background-color: #F5F5F5;
        padding: 1rem;
        width: 100%;
    }

    & .linha {
        margin: 0.5rem 0;
        color: #CCCCCC;
    }

    & .atualizar{
        background-color: #C92071;
        color: #FFFFFF;
        border: none;
        border-radius: 0.5rem;
        padding: 1% 20%;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        

        & .div-input {
            padding: 0.75rem;
            width: 80vw;
        }

        & .input-text {
            width: 100%;
        }

        & .atualizar{
            padding: 3% 40%;
        }
    }
`;

const UpdateData = () => {
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

    useEffect(() => {
        const dadosConta = JSON.parse(localStorage.getItem("dadosConta"));
        if (dadosConta) {
            setFormData({
                nome: dadosConta.nome || "",
                cpf: dadosConta.cpf || "",
                email: dadosConta.email || "",
                celular: dadosConta.celular || "",
                endereco: dadosConta.endereco || "",
                bairro: dadosConta.bairro || "",
                cidade: dadosConta.cidade || "",
                cep: dadosConta.cep || "",
                complemento: dadosConta.complemento || ""
            });
        }
    }, []);

    const handleChange = (e, campo) => {
        setFormData(prev => ({ ...prev, [campo]: e.target.value }));
    };

    const handleAtualizarDados = () => {
        localStorage.setItem("dadosConta", JSON.stringify(formData));

        const camposVazios = Object.values(formData).some(valor => String(valor).trim() === "");

        if (camposVazios) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        setDadosConta(formData);
        navigate(0);
    };

    return (
        <UpdateDataContainer>
            <section className="area-infor-atualizar">
                <section className="input-area">
                    <div className="div-input">
                        <h5>Informações Pessoais</h5>
                        <hr className="linha" />

                        <h5>Nome Completo *</h5>
                        <InputText className="input-text" placeholder="Insira seu nome" value={formData.nome} onChange={(e) => handleChange(e, "nome")} />

                        <h5>CPF *</h5>
                        <InputText className="input-text" placeholder="Insira seu CPF" value={formData.cpf} onChange={(e) => handleChange(e, "cpf")} />

                        <h5>E-mail *</h5>
                        <InputText className="input-text" placeholder="Insira seu email" value={formData.email} onChange={(e) => handleChange(e, "email")} />

                        <h5>Celular *</h5>
                        <InputText className="input-text" placeholder="Insira seu celular" value={formData.celular} onChange={(e) => handleChange(e, "celular")} />
                    </div>
                </section>

                <section className="input-area">
                    <div className="div-input">
                        <h5>Informações de Entrega</h5>
                        <hr className="linha" />

                        <h5>Endereço *</h5>
                        <InputText className="input-text" placeholder="Insira seu endereço" value={formData.endereco} onChange={(e) => handleChange(e, "endereco")} />

                        <h5>Bairro *</h5>
                        <InputText className="input-text" placeholder="Insira seu bairro" value={formData.bairro} onChange={(e) => handleChange(e, "bairro")} />

                        <h5>Cidade *</h5>
                        <InputText className="input-text" placeholder="Insira sua cidade" value={formData.cidade} onChange={(e) => handleChange(e, "cidade")} />

                        <h5>CEP *</h5>
                        <InputText className="input-text" placeholder="Insira seu CEP" value={formData.cep} onChange={(e) => handleChange(e, "cep")} />

                        <h5>Complemento *</h5>
                        <InputText className="input-text" placeholder="Insira complemento" value={formData.complemento} onChange={(e) => handleChange(e, "complemento")} />
                    </div>
                </section>

                <button class="atualizar" onClick={handleAtualizarDados}>Atualizar</button>
            </section>
        </UpdateDataContainer>
    );
};

export default UpdateData;