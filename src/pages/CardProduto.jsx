import { useState } from 'react'
import styled from "styled-components";

const ItemIndividual = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: azure;
    border-bottom: 0.5rem solid #94ac2c;
    list-style: none;

    @media (max-width: 501px) {
        display: block;
        margin: 1rem;
        justify-content: center;
    }
`;

const Linha = styled.p`
    font-size: 1.5rem;

    @media (max-width: 501px) {
        font-size: 1rem;
    }
`;

function CardProduto({ nome, preco, botaoAdicionar }){

    return (
        <>
            <ItemIndividual>
                <Linha>Produto: {nome}</Linha>
                <Linha>Preço: R${preco}</Linha>
                {botaoAdicionar}
            </ItemIndividual>
        </>        
    );
}


export default CardProduto;