
import React, { useState, useEffect } from "react";
import api from "../services/api";
import "./ClientesList.css";


function ClientesList() {
  const [clientes, setClientes] = useState([]);
  const [filtroNomes, setFiltroNomes] = useState('');
  const [filtroTelefones, setFiltroTelefones] = useState('');
  const [filtroEmails, setFiltroEmails] = useState('');
  const [filtroEndereco, setFiltroEndereco] = useState('');

  const [ contador, setContador ] = useState(0);

  async function handleExcluirClick(cliente) {
    try {
      const response = await api.delete("/clientes/" + cliente.id);
      alert('Cliente ' + cliente.nome + ' excluído.');
      window.location.reload();
    } catch (error) {
      console.error("Erro ao buscar clientes:", error);
    }
  }

  useEffect(() => {
    async function fetchClientes() {
      try {
        const response = await api.get("/clientes");
        setClientes(response.data);
        console.log(response)
      } catch (error) {
        console.error("Erro ao buscar clientes:", error);
      }
    }

    fetchClientes();
  }, []);

  return (
    <div>
      <table className="table">
        <thead>
          <tr className="tr">
            <th>ID</th>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Email</th>
            <th>Endereço</th>
            <th>X (coordenada)</th>
            <th>Y (coordenada)</th>
            <th></th>
          </tr>
          <tr>
            <td>
            <img className="img_filtro" src='filtro.png' alt="Minha Imagem" />
            </td>
            <td><input
        type="text"
        value={filtroNomes}
        onChange={(e) => setFiltroNomes(e.target.value)}
        placeholder="Filtrar por nome do cliente:"
      /></td>
            <td><input
        type="text"
        value={filtroTelefones}
        onChange={(e) => setFiltroTelefones(e.target.value)}
        placeholder="Filtrar por telefone:"
      /></td>
            <td><input
        type="text"
        value={filtroEmails}
        onChange={(e) => setFiltroEmails(e.target.value)}
        placeholder="Filtrar por email:"
      /></td>
            <td><input
        type="text"
        value={filtroEndereco}
        onChange={(e) => setFiltroEndereco(e.target.value)}
        placeholder="Filtrar por endereço:"
      /></td>
          </tr>
        </thead>
        <tbody>
          { clientes
          .filter((cliente) => cliente.nome.toLowerCase().includes(filtroNomes.toLowerCase()))
          .filter((cliente) => cliente.telefone.toLowerCase().includes(filtroTelefones.toLowerCase()))
          .filter((cliente) => cliente.email.toLowerCase().includes(filtroEmails.toLowerCase()))
          .filter((cliente) => cliente.endereco.toLowerCase().includes(filtroEndereco.toLowerCase()))
          .map((cliente) => (
            <tr key={cliente.id}>
              <td>{cliente.id}</td>
              <td>{cliente.nome}</td>
              <td>{cliente.telefone}</td>
              <td>{cliente.email}</td>
              <td>{cliente.endereco}</td>
              <td>{cliente.x}</td>
              <td>{cliente.y}</td>
              <td>
                <button className="btnExclusao" onClick={() => handleExcluirClick(cliente)}>
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClientesList;
