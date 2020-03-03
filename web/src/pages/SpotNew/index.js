import React, { useState, useMemo } from 'react';
import api from '../../services/api';

import camera from '../../assets/camera.svg';

import './styles.css';

export default function SpotNew({ history }) {
  const [thumbnail, setThumbnail] = useState(null);
  const [company, setCompany] = useState('');
  const [nome, setNome] = useState('');
  const [raca, setRaca] = useState('');
  const [porte, setPorte] = useState('');
  // const [filhote, setFilhote] = useState('');
  const [idade, setIdade] = useState('');
  // const [castrado, setCastrado] = useState('');
  // const [sexo, setSexo] = useState('');
  const [contato, setContato] = useState('');
  const [endereco, setEndereco] = useState('');
  const [outros, setOutros] = useState('');
  const [descricao, setDescricao] = useState('');

  function inputRadio() {
    // setFilhote(document.querySelector('form').filhote.value);
    // console.log(document.querySelector('form').filhote.value);
  }

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null
  }, [thumbnail]);

  async function handleSubmit(event) {
    event.preventDefault();console.log(document.querySelector('form').filhote.value, 
    document.querySelector('form').castrado.value, document.querySelector('form').sexo.value);
    
    if (company && nome && raca && porte 
      && document.querySelector('form').filhote.value 
      && idade && document.querySelector('form').castrado.value 
      && document.querySelector('form').sexo.value && contato && endereco) {
        const data = new FormData();
        const user_id = localStorage.getItem('user');

        data.append('thumbnail', thumbnail);
        data.append('company', company);
        data.append('nome', nome);
        data.append('raca', raca);
        data.append('porte', porte);
        data.append('filhote', document.querySelector('form').filhote.value);
        data.append('idade', idade);
        data.append('castrado', document.querySelector('form').castrado.value);
        data.append('sexo', document.querySelector('form').sexo.value);
        data.append('contato', contato);
        data.append('endereco', endereco);
        data.append('outros', outros);
        data.append('descricao', descricao);

        await api.post('/spots', data, {
          headers: { user_id }
        });

        history.push('/dashboard');
    } else {
      alert('Atenção preencha todos os campos!');
    }
  }

  return(
    <form onSubmit={handleSubmit}>
      <label 
        id="thumbnail" 
        style={{ backgroundImage: `url(${preview})` }}
        className={thumbnail ? 'has-thumbnail' : ''}
      >
        <input type="file" onChange={event => setThumbnail(event.target.files[0])}/>
        <img src={camera} alt="Select img" />
      </label>
      <label htmlFor="company">EMPRESA *</label>
      <input
        id="company" 
        placeholder="Sua empresa incrivel" 
        value={company} 
        onChange={event => setCompany(event.target.value)}
      />

      <label htmlFor="nome">NOME * <span>(separadas por virgula)</span></label>
      <input
        id="nome" 
        placeholder="O animal tem um nome?" 
        value={nome} 
        onChange={event => setNome(event.target.value)}
      />

      <label htmlFor="raca">RAÇA * <span>(em branco para GRATUITO)</span></label>
      <input
        id="raca" 
        placeholder="Raça do animal" 
        value={raca} 
        onChange={event => setRaca(event.target.value)}
      />

      <label htmlFor="porte">PORTE * <span>(em branco para GRATUITO)</span></label>
      <input
        id="porte" 
        placeholder="Porte do animal" 
        value={porte} 
        onChange={event => setPorte(event.target.value)}
      />

      <label htmlFor="filhote">FILHOTE * <span>(em branco para GRATUITO)</span></label>
      <div className="radio"> <label style={{ display: "flex", color: '#999' }}>
        <input type="radio" name="filhote" value="Sim" /> Sim
        <input type="radio" name="filhote" value="Não" /> Não
        <input type="radio" name="filhote" value="Indefinido" /> Indefinido </label>
      </div>

      <label htmlFor="idade">IDADE * <span>(em branco para GRATUITO)</span></label>
      <input
        id="idade" 
        placeholder="Qual a idade do animal" 
        value={idade} 
        onChange={event => setIdade(event.target.value)}
      />

      <label htmlFor="castrado">CASTRADO * <span>(em branco para GRATUITO)</span></label>
      <div className="radio"> <label style={{ display: "flex", color: '#999' }}>
        <input type="radio" name="castrado" value="Sim" /> Sim
        <input type="radio" name="castrado" value="Não" /> Não </label>
      </div>

      <label htmlFor="sexo">GÊNERO * <span>(em branco para GRATUITO)</span></label>
      <div className="radio"> <label style={{ display: "flex", color: '#999' }}>
        <input type="radio" name="sexo" value="Macho" /> Macho
        <input type="radio" name="sexo" value="fêmea" /> fêmea </label>
      </div>

      <label htmlFor="contato">CONTATO * <span>(em branco para GRATUITO)</span></label>
      <input
        id="contato" 
        placeholder="Contato do dono do animal" 
        value={contato} 
        onChange={event => setContato(event.target.value)}
      />

      <label htmlFor="endereco">LOCAL * <span>(em branco para GRATUITO)</span></label>
      <input
        id="endereco" 
        placeholder="Endereço do animal" 
        value={endereco} 
        onChange={event => setEndereco(event.target.value)}
      />

      <label htmlFor="outros">OUTROS * <span>(em branco para GRATUITO)</span></label>
      <input
        id="outros" 
        placeholder="Outras caracteristicas do animal" 
        value={outros} 
        onChange={event => setOutros(event.target.value)}
      />

      <label htmlFor="descricao">DESCRIÇÂO * <span>(em branco para GRATUITO)</span></label>
      <input
        id="descricao" 
        placeholder="Descrição" 
        value={descricao} 
        onChange={event => setDescricao(event.target.value)}
      />

      <button type="submit" className="btn">Cadastrar</button>
    </form>
  );
}