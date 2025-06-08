import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import styled from "styled-components";

import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Button } from 'primereact/button';

import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { Context } from "../contexts/AuthContext";
import { useConta } from "../contexts/ContaContext";


const LoginContainer = styled.div`
        background-image: linear-gradient(to bottom, #b5b6f2, #cccdf0);
        width: 100%;
        display: flex;
        flex-direction: column;

        & .img-semi-cabecalho {
            background-color: #F5F5F5;
        }

        & .img-semi-cabecalho > img {
            height: 1.5rem;
            width: auto;
            margin: 1rem;
        }

        & .div-login {
            display: flex;
            justify-content: space-evenly;
            padding: 5rem 3rem;
        }

        & .fazer-login {
            display: flex;
            width: 30%;
            height: auto;
            background-color: #F5F5F5;
            color: #1F1F1F;
            padding: 1rem;
            gap: 1rem;
            justify-items: center;
            border-radius: 0.25rem;
        }

        & .fazer-login > form {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }

        & .link {
            color: #1F1F1F;
            font-weight: 400;
        }

        & .cabecalho-login {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        & .cabecalho-login > h2{
            font-weight: 700;
        }

        & .cabecalho-login > h4{
            font-weight: 400;
        }

        & .area-input {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        & .label {
            font-weight: 700;
        }

        & .input {
            width: 100%;
            height: 2.5rem;
            border: none;
            border-radius: 0.5rem;
            padding: 1rem;
        }

        & .pi{
            position: relative;
            top: -1.75rem;
            left: 94%;
        }

        & .botao-acessar {
            background-color: #C92071;
            color: #F5F5F5;
            border: none;
            width: 100%;
            height: 2rem;
            border-radius: 0.5rem;
        }

        & .outras-opcao {
            text-align: center;
            display: flex;
            justify-content: center;
            gap: 1rem;
        }

        & .outras-opcao > h4{
            font-weight: 400;
        }

        & .outras-opcao > a > img{
            height: 1rem;
        }

        & .im1 {
            width: 18rem;
            position: relative;
            left: 5rem;
            top: -3rem;
        }

        & .im2 {
            width: 20rem;
            position: relative;
            top: 6rem;
        }

        @media (max-width: 768px) {
            & .div-login {
                flex-direction: column;
                align-items: center;
                padding: 2rem 1rem;
            }

            & .fazer-login {
                width: 80%;
            }

            & .im1,
            & .im2 {
                display: none;
            }
        }

    `;


const Login = () => {

    const { dadosConta } = useConta();

    const [mostrarSenha, setMostrarSenha] = useState(false);

    const {register, handleSubmit} = useForm();
    /*const [senha, setSenha] = useState('');*/
    const {setLogado} = useContext(Context);
    const navigate = useNavigate();

    function logan (dados){
        if(dados.email == dadosConta?.email){
            setLogado(true);
            navigate('/home');
        }
    }

    return ( 
        <>
            <LoginContainer>
                <div className="img-semi-cabecalho">
                    <img src="src/assets/DIGITAL STORE - LOGO COR.png" alt="LOGO" />
                </div>

                <div className="div-login">
                    
                    <main className="fazer-login">
                        <form onSubmit={handleSubmit(logan)}>
                            <div class="cabecalho-login">
                                <h2>Acesse sua conta</h2>
                                <h4>Novo cliente? Então registre-se <a class="link" href="/criarconta">aqui</a>.</h4> 
                            </div>

                            <div class="area-input">
                                <label className="label" htmlFor="email">E-mail: *</label>
                                <InputText 
                                    className="input" 
                                    id="email" 
                                    type="email" 
                                    placeholder="Insira seu login ou email" 
                                    {...register('email', {required: true})}
                                />
                            </div>
                            
                            <div class="area-input">
                                <label className="label" htmlFor="senha">Senha: *</label>
                                <IconField>
                                    <InputText 
                                        className="input" 
                                        id="password" 
                                        type={mostrarSenha ? 'text' : 'password'} 
                                        placeholder="Insira sua senha" 
                                        {...register('password', {required: true})}
                                        /*value={senha} onChange={(e) => setSenha(e.target.value)}*/ 
                                    />
                                    <InputIcon 
                                        className={mostrarSenha ? "pi pi-eye" : "pi pi-eye-slash"} 
                                        onClick={() => setMostrarSenha(!mostrarSenha)} 
                                        style={{ cursor: 'pointer' }} 
                                    />
                                </IconField>

                            <h6><a class="link" href="/nao-implementado">Esqueci minha senha</a></h6>    
                            </div>

                            

                            <Button className="botao-acessar" label="Acessar conta" type="submit" />

                            <div class="outras-opcao">
                                <h4>Ou faça login com: </h4>
                                <a href="/nao-implementado"><img src="src\assets\gmail 1.png" alt="gmail" /></a>
                                <a href="/nao-implementado"><img src="src\assets\Original.png" alt="facebook" /></a>
                            </div>
                            
                        </form>
                    </main>

                    <div>
                        <img className="im1" src="src/assets/pexels-melvin-buezo-2529148 1.png" alt="p" />
                        <img className="im2" src="src/assets/pexels-melvin-buezo-2529148 2.png" alt="b" />
                    </div>
                </div>
            </LoginContainer>
        </>
    );
}

export default Login;