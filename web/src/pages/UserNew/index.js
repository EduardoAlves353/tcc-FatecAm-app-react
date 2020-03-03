import React, { useState } from 'react';
import api from '../../services/api';

export default function Login({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nome, setNome] = useState('');
  const [contato, setContato] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    let responce;

    if (email === '' || password === '' || nome === '' || contato === '') {
      alert("Campo vazio!")
    } else {
      responce = await api.post('/sessions', {
        email, senha: password, nome, contato
      });console.log(responce.data);
    }

    if (!responce.data) {
      alert("E-MAIL já cadastrado!")
    } else {
      history.push('/');
    }
  }
  return (
    <>
        <form onSubmit={handleSubmit}>
          <label style={{ fontSize: 24, fontWeight: "bold", marginBottom: 15 }}>CADASTRA-SE</label>
          <label htmlFor="name">NOME *</label>
          <input 
            type="name" 
            id="name" 
            placeholder="Seu Nome" 
            value={nome}
            onChange={event => setNome(event.target.value)}  
          />
          <label htmlFor="fone">CONTATO *</label>
          <input 
            type="fone" 
            id="fone" 
            placeholder="Seu contato" 
            value={contato}
            onChange={event => setContato(event.target.value)}  
          />
          <label htmlFor="email">E-MAIL *</label>
          <input 
            type="email" 
            id="email" 
            placeholder="Seu e-mail cadastrado" 
            value={email}
            onChange={event => setEmail(event.target.value)}  
          />
          <label htmlFor="password">SENHA *</label>
          <input 
            type="password" 
            id="password" 
            placeholder="Sua senha" 
            value={password}
            onChange={event => setPassword(event.target.value)}  
          />

            <button className="btn" type="submit">Cadastrar</button>
        </form>
    </>
  );
}