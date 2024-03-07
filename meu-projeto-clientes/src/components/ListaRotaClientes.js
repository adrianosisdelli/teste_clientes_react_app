import React, { useState, useEffect } from 'react';
import api from "../services/api";
import Modal from 'react-modal';

const ListaRotaClientes = ( {isOpen, closeModal} ) => {

    const [ clientes, setClientes ] = useState([])

    useEffect(() => {
        async function fetchClientes() {
          try {
            const response = await api.get("/rota_ordenada");
            setClientes(response.data);
            console.log(response)
          } catch (error) {
            console.error("Erro ao buscar clientes:", error);
          }
        }
    
        fetchClientes();
      }, []);
  
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Rota de clientes (por distância)"
      >
      <div className="lista-rota-clientes">
      <table className="table">
        <thead>
          <tr className="tr">
            <th>ID</th>
            <th>Nome</th>
            <th>Distância</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { clientes
          .map((cliente) => (
            <tr key={cliente.id}>
              <td>{cliente.cliente.id}</td>
              <td>{cliente.cliente.nome}</td>
              <td>{cliente.distancia.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </Modal>
    );
  };
  
  export default ListaRotaClientes;
  