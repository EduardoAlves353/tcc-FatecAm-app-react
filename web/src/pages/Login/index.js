import React, { useState } from 'react';
import api from '../../services/api';

export default function Login({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function cadastra() {
    history.push('/usernew');
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const responce = await api.post('/session', {
      email
    });

    if (responce.data) {
      const { senha } = responce.data;
      
      if (responce.data && (password === senha)) {
        const { _id } = responce.data;

        localStorage.setItem('user', _id);

        history.push('/dashboard');
      } else {
        alert("SENHA incorretas!")
      }
    } else {
      alert("E-MAIL não cadastrado!")
    }
  }
  return (
    <>
      <p>
          Ofereça <strong>spots</strong> para pessoas dispostas a 
          <strong> adotar</strong> pets
        </p>

        <form onSubmit={handleSubmit}>
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
          <a href="" onClick={cadastra} 
          style={{marginBottom: 10, cursor: "pointer", alignSelf: "center"}}
          >Cadastrar-se</a>

            <button className="btn" type="submit">Entrar</button>
        </form>
    </>
  );
}