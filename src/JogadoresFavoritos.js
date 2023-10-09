import React from 'react';
import CardJogador from './CardJogador';

function JogadoresFavoritos({ favoritos }) {
  return (
    <div className="favorites-container">
      <h1>Painel de Favoritos</h1>
      <div className="favorite-list">
        {favoritos.map((jogador, index) => (
          <div key={index} className="favorite-card">
            <CardJogador jogador={jogador} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default JogadoresFavoritos;
