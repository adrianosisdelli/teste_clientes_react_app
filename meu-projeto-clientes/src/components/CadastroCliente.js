
import React, { useState } from 'react';
import './CadastroCliente.css';
import api from "../services/api";
import Modal from 'react-modal';


const CadastroCliente = ( {isOpen, closeModal} ) => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [endereco, setEndereco] = useState('');
  const [x, setX] = useState(null);
  const [y, setY] = useState(null);

  const handleCadastrar = () => {
    
    const novo_cliente = {
        'nome': nome,
        'telefone': telefone,
        'email': email,
        'endereco': endereco,
        'x': x,
        'y': y
    };

    api.post('/clientes/', novo_cliente)
    .then((response) => {
        window.location.reload();
        alert('Cadastro realizado com sucesso!');
      })
      .catch((error) => {
        alert('Erro ao cadastrar cliente:', error.message);
      });
  };

  const handleLimparCampos = () => {
    setNome('');
    setTelefone('');
    setEmail('');
    setEndereco('x');
    setX(null);
    setY(null);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Formulário de Cadastro"
    >
    <div className="cadastro-form modal">
      <h2>Cadastro de Cliente</h2>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="text"
        placeholder="Telefone"
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Endereço"
        value={endereco}
        onChange={(e) => setEndereco(e.target.value)}
      />
      <input
        type="text"
        placeholder="Coordenada X"
        value={x}
        onChange={(e) => setX(e.target.value)}
      />
      <input
        type="text"
        placeholder="Coordenada Y"
        value={y}
        onChange={(e) => setY(e.target.value)}
      />
      <button className="botao-cadastrar" onClick={handleCadastrar}>
        Cadastrar
      </button>
      <button className="botao-limpar" onClick={handleLimparCampos}>
        Limpar Campos
      </button>
    </div>
    </Modal>
  );
};

export default CadastroCliente;
