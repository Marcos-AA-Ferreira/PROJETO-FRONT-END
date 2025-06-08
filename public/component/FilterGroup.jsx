import styled from "styled-components";

import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";

const Container = styled.div`
    padding: 1rem;
    font-family: sans-serif;
    background-color: #FFFFFF;
    border-radius: 0.5rem;

    & .filtrarPor{
        display: flex;
        justify-content: space-between;
    }

    & .title{
        font-size: 1rem;
        font-weight: bold;
        margin-bottom: 0.5rem;  
        color: #474747;
    }

    & .x{
        display: none;
        color: #474747;
    }

    & .linha{
        border: none;
        border-top: 1px solid #474747;
        margin-bottom: 1rem;
    }

    & .opcoes-section{
        margin-bottom: 1.5rem;
    }

    & .subtitle{
        font-size: 0.9rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
        color: #474747;
    }

    @media (max-width: 768px) {
        & .x{
            display: flex;
        }
    }
`;

const Label = styled.label`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 0.3rem 0;
    color: #474747;
    cursor: pointer;

    input[type="checkbox"],
    input[type="radio"] {
        appearance: none;
        width: 1rem;
        height: 1rem;
        border: 1px solid #666;
        border-radius: 3px;
        position: relative;
        cursor: pointer;
    }

    input[type="radio"] {
        border-radius: 50%;
    }

    input[type="checkbox"]:checked {
        background-color: #c11574;
        border: none;
        position: relative;
    }

    input[type="checkbox"]:checked::after {
        content: "✔";
        font-size: 0.7rem;
        color: white;
        position: absolute;
        top: 0.1rem;
        left: 0.2rem;
    }

    input[type="radio"]:checked {
        background-color: #c11574;
        border: 3px solid white;
        box-shadow: 0 0 0 2px #c11574;
    }

    span {
        font-size: 0.9rem;
        color: #333;
    }
`;

const Checkbox = ({ label, checked }) => (
    <Label>
        <input type="checkbox" defaultChecked={checked} />
        <span>{label}</span>
    </Label>
);

const RadioButton = ({ label, checked }) => (
    <Label>
        <input type="radio" name="estado" defaultChecked={checked} />
        <span>{label}</span>
    </Label>
);


const FilterGroup = ({ fecharMenu }) => {
    return (
        <Container>
            <div class="filtrarPor">
                <h3 class="title">Filtrar por</h3>
                <IconField class="x">
                    <InputIcon className="pi pi-times" style={{ cursor: "pointer" }} onClick={fecharMenu}/>
                </IconField>
            </div>
            <hr class="linha"/>

            <section class="opcoes-section">
                <h4 class="subtitle">Marka</h4>
                <Checkbox label="Adiddas" />
                <Checkbox label="Calenciaga" />
                <Checkbox label="K-Swiss" />
                <Checkbox label="Nike" />
                <Checkbox label="Puma" />
            </section>

            <section class="opcoes-section">
                <h4 class="subtitle">Categoria</h4>
                <Checkbox label="Esporte e lazer" />
                <Checkbox label="Casual" />
                <Checkbox label="Utilitário" />
                <Checkbox label="Corrida" />
            </section>

            <section class="opcoes-section">
                <h4 class="subtitle">Gênero</h4>
                <Checkbox label="Masculino" />
                <Checkbox label="Feminino" />
                <Checkbox label="Unisex" />
            </section>

            <section class="opcoes-section">
                <h4 class="subtitle">Estado</h4>
                <RadioButton label="Novo" checked />
                <RadioButton label="Usado" />
            </section>
        </Container>
    );
};

export default FilterGroup;