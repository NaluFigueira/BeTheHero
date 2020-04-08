import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import './styles.css';

export default function NewIncident() {
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero"/>

          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar o herói para resolver isso.</p>

          <Link to="/Profile" className="back-link">
            <FiLogIn size={16} color="#E02041" />
            Voltar para home
          </Link>
        </section>
        
        <form>
          <input placeholder="Título do caso"/>
          <textarea placeholder="Descrição"/>

          <input placeholder="Valor (R$)"/>

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
  </div>
  );
}
