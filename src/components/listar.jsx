import { useState } from 'react'

function useListar() {

    const [listaProdutos, setListaProdutos] = useState([ 
        { id: 1, nome: 'Chuveiro elétrico', preco: 250.00},
        { id: 2, nome: 'Ferro de passar roupa', preco: 100.00},
        { id: 3, nome: 'Geladeira', preco: 2500.00},
        { id: 4, nome: 'Forno elétrico', preco: 250.00},
        { id: 5, nome: 'Secador de cabelo', preco: 110.00}
    ]);
  
    return {
        listaProdutos,
        setListaProdutos
    }
}

export default useListar;
