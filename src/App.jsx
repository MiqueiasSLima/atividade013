import useListar  from './components/listar.jsx'
import Mostrar from './pages/Mostrar.jsx';
import styled from "styled-components";
import './components/estilos014.css'
import { ProdutosContexts } from './contexts/ProdutosContexts';

function App() {

    const Principal = styled.main`
        max-width: 60%;
        margin: 40px auto;
        text-align: center;
        padding: 2rem;
        background-color: #1b47a5;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        border-radius: 0px;
        font-family: Arial, sans-serif;

        @media (max-width: 501px) {
          margin: 1rem;
          padding: 1rem;
          max-width: 100%;
          max-height: 100%;
        }
    `;

    const { listaProdutos, setListaProdutos } = useListar();
  
    return (
      <>
        <Principal>
          <ProdutosContexts.Provider value={{ listaProdutos, setListaProdutos }}>
              <Mostrar listaProdutos={listaProdutos}/>
          </ProdutosContexts.Provider>
        </Principal>
      </>
    )
}

export default App;
