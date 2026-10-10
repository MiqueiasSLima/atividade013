import React, { useState } from 'react';
import styled from 'styled-components';
import CardProduto from './CardProduto.jsx';

const BotaoCompra = styled.button`
    padding: 1rem;
    margin-left: 10rem;
    width: 10rem;
    height 1rem;
    border: none;
    color: ${({ $adicionado }) => ($adicionado ? "#fcf7f7" : "#000")};
    background-color: ${({ $adicionado }) => ($adicionado ? "#6c757d" : "#198754")};
    border-radius: 4px;
    cursor: pointer;

    &:hover{
        background-color: ${({ $adicionado }) => ($adicionado ? "#98a5b1" : "#20c40a")};
        font-style: bold;
    }
    
    @media (max-width: 501px) {
        padding: 0;
        margin: 0;
    }
`;

const Titulo = styled.h1`
    color: white;
    margin: 1rem;
    font-style: bold;
`;

const Items = styled.ul`
    display: block;
    align-items: center;
    list-style: none;
`;


function Mostrar({ listaProdutos }) {
    
    const [adicionados, setAdicionados] = useState({});

    const alternarAdicionada = (id) => {
        setAdicionados(estadoAnterior => ({
            ...estadoAnterior,
            [id]: !estadoAnterior[id] 
        }));
    };
    
    return(
        <>
            <Titulo>Produtos Disponíveis</Titulo>
            <Items>
                {listaProdutos.map(produto => {
                    const estaAdicionado = adicionados[produto.id] || false;

                    return (
                        <CardProduto 
                            key={produto.id} 
                            nome={produto.nome} 
                            preco={produto.preco} 
                            botaoAdicionar={
                                <BotaoCompra $adicionado={estaAdicionado} onClick={() => alternarAdicionada(produto.id)}>
                                    {estaAdicionado ? "ADICIONADO!" : "Adicionar ao carrinho"}
                                </BotaoCompra>
                            }
                        />
                    );
                })}
            </Items>
        </>
    );
}

export default Mostrar;