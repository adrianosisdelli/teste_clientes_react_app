import React, { useState } from "react";
import ClientesList from "./components/ClientesList";
import CadastroCliente from "./components/CadastroCliente";
import ListaRotaClientes from "./components/ListaRotaClientes";
import './App.css';

function App() {

  const [ contador, setContador ] = useState(0);
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const [ isModalDistanciaOpen, setIsModalDistanciaOpen ] = useState(false);

  function handleUpdate() {
    setContador(contador + 1);
  }

  const handleOpenModal = () => {
    setIsModalOpen(true);
  }

  const handleCloseModal = () => {

    setIsModalOpen(false);

  }

  const handleOpenModalDistancia = () => {
    setIsModalDistanciaOpen(true);
  }

  const handleCloseModalDistancia = () => {

    setIsModalDistanciaOpen(false);

  }

  return (
    
    <div className="App">
      <div class="barraOpcoes">
        <button onClick={handleOpenModal}>Cadastrar novo</button>
        <button onClick={handleOpenModalDistancia}>Exibir rota</button>
        <button onClick={handleUpdate}>Atualizar</button>
      </div>
      { isModalOpen && <CadastroCliente isOpen={isModalOpen} closeModal={handleCloseModal}></CadastroCliente>}
      { isModalDistanciaOpen && <ListaRotaClientes isOpen={isModalDistanciaOpen} closeModal={handleCloseModalDistancia}></ListaRotaClientes>}
      <ClientesList key={contador}></ClientesList>
      
    </div>
  );
}

export default App;
