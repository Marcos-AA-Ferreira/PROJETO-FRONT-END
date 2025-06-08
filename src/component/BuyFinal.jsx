import styled from "styled-components";

import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";


const ComprarContainer = styled.section`
    display: flex;
    padding: 2rem;
    gap: 2rem;

    & .area-infor-comprar{
        display: flex;
        flex-direction: column;
        width: 70%;
        gap: 1rem;
    }

    & .div-input{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        color: #474747;
        background-color: #FFFFFF;
        padding: 1rem;
        border-radius: 0.5rem;
    }

    & .div-input > div{
        display: flex;
        flex-direction: row;
        gap: 1rem;
        padding: 1rem 0;
    }

    & .div-input > div > div > .input-text{
        width: 27.25vw;
        margin-top: 1rem;
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

    & .resumo{
        background-color: #FFFFFF;
        padding: 1rem;
        border-radius: 0.5rem;
        height: 50%;
        width: 30%;
    }

    & .resumo > h4{
        color: #474747;
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
        padding: 5% 30%;
        white-space: nowrap;
        margin-top: 1rem;
    }

    & .pagar{
        background-color: #F6AA1C;
        color: #FFFFFF;
        border: none;
        border-radius: 0.5rem;
        padding: 5% 35%;
        margin: 1rem 0;
        white-space: nowrap;
    }

    & .finalizar-desktop{
        width: 60.5vw;

        & .pagar{
            padding: 1% 43%;
        }
    }

    & .finalizar-mobile{
        display: none;
    }

    & .opcoes-pagamento{
        display: flex;
        gap: 1rem;
        margin: 1rem 0;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 0;

        & .div-input{
            padding: 0.75rem;
            width: 80vw;
        }

        & .div-input > div{
            flex-direction: column;
            gap: 2rem;
            padding: 1rem 0;
        }

        & .div-input > div > div > .input-text{
            width: 72vw;
            margin-top: 1rem;
        }

        & .input-text{
            width: 90%;
        }

        & .resumo{
            width: 87%;
            padding: 0.5rem 1.5rem;
        }

        & .resumo > h4{
            margin-top: 0.5rem;
        }

        & .continuar{
            margin: 2rem 0rem 0rem 0rem;
            padding: 1rem 6rem;
            width: 100%;
        }

        & .finalizar-mobile{
            display: flex;
            flex-direction: column;
            width: 90vw;
            position: relative;
            right: 2rem;
            top: 2rem;
        }

        & .finalizar-desktop{
            display: none;
        }

        & .opcoes-pagamento{
            flex-direction: column;
        }
    }

    @media (max-width: 400px) {
        & .pagar{
            padding: 5% 30%;
        }
    }
`;

const RadioButton = ({ label, checked }) => (
    <Label>
        <input type="radio" name="estado" defaultChecked={checked} />
        <span>{label}</span>
    </Label>
);

const Label = styled.label`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    margin: 0.3rem 0;
    color: #474747;
    cursor: pointer;

    input[type="radio"] {
        appearance: none;
        width: 1rem;
        height: 1rem;
        border: 1px solid #666666;
        border-radius: 3px;
        position: relative;
        cursor: pointer;
    }

    input[type="radio"] {
        border-radius: 50%;
    }


    input[type="radio"]:checked {
        background-color: #c11574;
        border: 3px solid white;
        box-shadow: 0 0 0 2px #c11574;
    }

    span {
        font-size: small;
        color: #474747;
    }
`;

const BuyFinal = ({ onFinalizar }) => {

    const dadosConta = JSON.parse(localStorage.getItem("dadosConta"));

    const [formData, setFormData] = useState({
        nome: "",
        cpf: "",
        email: "",
        celular: "",
        endereco: "",
        bairro: "",
        cidade: "",
        cep: "",
        complemento: "",
        nomeCartao: "",
        numeroCartao: "",
        validadeCartao: "",
        cvv: ""
        });

        const validarCampos = () => {
            const camposObrigatorios = [
                "nome", "cpf", "email", "celular",
                "endereco", "bairro", "cidade", "cep", "complemento",
                "nomeCartao", "numeroCartao", "validadeCartao", "cvv"
            ];

            for (let campo of camposObrigatorios) {
                if (!formData[campo] || formData[campo].trim() === "") {
                    alert("Por favor, preencha todos os campos obrigatórios.");
                    return false;
                }
            }
            return true;
        };

        useEffect(() => {
        const dadosConta = JSON.parse(localStorage.getItem("dadosConta"));
        if (dadosConta) {
            setFormData(prevFormData => ({
            ...prevFormData,
            nome: dadosConta.nome || "",
            cpf: dadosConta.cpf || "",
            email: dadosConta.email || "",
            celular: dadosConta.celular || "",
            endereco: dadosConta.endereco || "",
            bairro: dadosConta.bairro || "",
            cidade: dadosConta.cidade || "",
            cep: dadosConta.cep || "",
            complemento: dadosConta.complemento || "",
            }));
        }
        }, []);

    const handleChange = (e, campo) => {
        setFormData({ ...formData, [campo]: e.target.value });
    };

    return ( 
        <>
            <ComprarContainer>
                <section class="area-infor-comprar">
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

                    <section  class="input-area">
                        <div class="div-input">
                            <h5>Informações de Pagamento</h5>
                            <hr class="linha"/>

                            <section class="pagamento">
                                <h5 class="subtitle">Forma de Pagamento</h5>
                                <div class="opcoes-pagamento">
                                    <RadioButton label="Cartão de Crédito" checked />
                                    <RadioButton label="Cartão de Débito" />
                                    <RadioButton label="Boleto Bancário" />
                                    <RadioButton label="PIX" />
                                </div>
                            </section>

                            <h5>Nome do Cartão *</h5>
                            <InputText className="input-text" placeholder="Insira o nome do Cartão" value={formData.nomeCartao} onChange={(e) => handleChange(e, "nomeCartao")}/>

                            <div>
                                <div>
                                   <h5>Número do Cartão *</h5>
                                    <InputText className="input-text" placeholder="Insira o número do Cartão" value={formData.numeroCartao} onChange={(e) => handleChange(e, "numeroCartao")}/> 
                                </div>

                                <div>
                                    <h5>Data de validade do Cartão *</h5>
                                    <InputText className="input-text" placeholder="Insira a validade do Cartão" value={formData.validadeCartao} onChange={(e) => handleChange(e, "validadeCartao")}/>
                                </div>
                            </div>

                            <h5>CVV*</h5>
                            <InputText className="input-text" placeholder="CVV *" value={formData.cvv} onChange={(e) => handleChange(e, "cvv")}/>
                        </div>
                    </section>

                    <section class="resumo finalizar-desktop">
                        <h4>Finalizar Compra</h4>
                        <hr class="linha" />
                        <div class="div-total">
                            <div class="valor-total"><h4>Total</h4><h4 class="preco-total">R$ 219,00</h4></div>
                            <p class="cinza">ou 10x de R$ 21,00 sem juros</p>
                        </div>

                        <button className="pagar" onClick={() => {if (validarCampos()) {  onFinalizar(formData); }}}>Realizar Pagamento</button>
                    </section>
                </section>

                <section class="resumo">
                    <h4>RESUMO</h4>
                    <hr class="linha" />
                    <div class="img-nome">
                        <div class="img-produto">
                            <img src="src/assets/White-Sneakers-PNG-Clipart 2 (2).png" alt="White-Sneakers" />
                        </div>    
                        <h4>Tênis Nike Revolution 6 Next Nature Masculino</h4>
                    </div>
                    <hr class="linha" />
                    <div class="valores-resumo">
                        <div class="valor-resumo"><h5 class="cinza">Subtotal:</h5><h5>R$ 219,00</h5></div>
                        <div class="valor-resumo"><h5 class="cinza">Frete:</h5><h5>R$ 0,00</h5></div>
                        <div class="valor-resumo"><h5 class="cinza">Desconto:</h5><h5>R$ 30,00</h5></div>
                    </div>
                    <div class="div-total">
                        <div class="valor-total"><h4>Total</h4><h4 class="preco-total">R$ 219,00</h4></div>
                        <p class="cinza">ou 10x de R$ 21,00 sem juros</p>
                    </div>

                    <button className="continuar" onClick={() => {if (validarCampos()) {  onFinalizar(formData); }}}>Realizar Pagamento</button>
                </section>

                <section class="resumo finalizar-mobile">
                    <h4>Finalizar Compra</h4>
                    <hr class="linha" />
                    <div class="div-total">
                        <div class="valor-total"><h4>Total</h4><h4 class="preco-total">R$ 219,00</h4></div>
                        <p class="cinza">ou 10x de R$ 21,00 sem juros</p>
                    </div>

                    <button className="pagar" onClick={() => {if (validarCampos()) {  onFinalizar(formData); }}}>Realizar Pagamento</button>
                </section>
            </ComprarContainer>
        </>
     );
}
 
export default BuyFinal;