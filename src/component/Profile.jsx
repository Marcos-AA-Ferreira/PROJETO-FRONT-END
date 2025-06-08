import styled from "styled-components";
import MyProfileMenu from "../component/MyProfileMenu";

const ProfilePageContainer = styled.main`
    display: flex;
    background-color: #f5f0f5;
    gap: 2rem;

    & .section-info{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 60vw;
        padding: 1rem 2rem;
        border-radius: 0.5rem;
        background-color: #FFFFFF;
    }

    & .info-em-linha{
        display: flex;
        gap: 1rem;
    }

    & .info-em-linha > p{
        font-weight: 400;
    }

    & .cinza-claro{
        color: #8F8F8F;
        font-weight: 300;
    }

    & .cinza-escuro{
        color: #474747;
        font-size: 1.25rem;
        font-weight: 600;
    }

    & .linha{
        color: #CCCCCC;
    }

    & .info-edite{
        display: flex;
        justify-content: space-between;

        & h3{
            font-size: 1rem;
        }
    }

    & .editar{
        color: #C92071;
        text-decoration: underline;
        border: none;
        background-color: transparent;
        font-weight: 400;
        cursor: pointer;
    }

    @media (max-width: 768px){
        padding-left: 2%;
        font-size: 0.85rem;

        & .menu-perfil{
            display: none;
        }

        & .cinza-escuro{
            font-size: 1rem;
        }

        & .section-info{
            display: flex;
            flex-direction: column;
            gap: 1rem;
            width: 75vw;
            padding: 1rem 2rem;
            border-radius: 0.5rem;
            background-color: #FFFFFF;
        }
    }

    @media (max-width: 400px){
        padding-left: 0%;
    }
`;

const Profile = ({ onFinalizar }) => {
    const dadosConta = JSON.parse(localStorage.getItem("dadosConta"));

    return ( 
        <>
            <ProfilePageContainer>
                <MyProfileMenu/>
                <section class="section-info">
                    <div class="info-edite">
                        <h3 class="cinza-escuro">Minhas Informações</h3>
                        <button class="editar" onClick={() => onFinalizar()}>Editar</button>
                    </div>

                    <hr class="linha" />
                    <h2 class="cinza-escuro">Informações Pessoais</h2>

                    <div class="info-em-linha"><h4 class="cinza-claro">Nome:</h4><p>{dadosConta.nome}</p></div>
                    <div class="info-em-linha"><h4 class="cinza-claro">CPF:</h4><p>{dadosConta.cpf}</p></div>
                    <div class="info-em-linha"><h4 class="cinza-claro">Email:</h4><p>{dadosConta.email}</p></div>
                    <div class="info-em-linha"><h4 class="cinza-claro">Celular:</h4><p>{dadosConta.celular}</p></div>

                    <hr class="linha" />
                    <h2 class="cinza-escuro">Informações de Entrega</h2>

                    <div class="info-em-linha"><h4 class="cinza-claro">Endereço:</h4><p>{dadosConta.endereco}</p></div>
                    <div class="info-em-linha"><h4 class="cinza-claro">Bairro:</h4><p>{dadosConta.bairro}</p></div>
                    <div class="info-em-linha"><h4 class="cinza-claro">Cidade:</h4><p>{dadosConta.cidade}</p></div>
                    <div class="info-em-linha"><h4 class="cinza-claro">CEP:</h4><p>{dadosConta.cep}</p></div>
                    <div class="info-em-linha"><h4 class="cinza-claro">Complemento:</h4><p>{dadosConta.complemento}</p></div>
                </section>
            </ProfilePageContainer>
        </>
     );
}
 
export default Profile;