import React from 'react';

function CardJogador({ jogador }) {
  console.log('jogador:', jogador); // Adicione este log

  if (!jogador || !jogador.name || !jogador.nationality || !jogador.club) {
    return null;
  }

  return (
    <div className="card">
      <h2>Nome: {jogador.name}</h2>
      <p>Nacionalidade: {jogador.nationality[0]}</p>
      <p>Clube: {jogador.club.name}</p>
      <img src={jogador.imagem} alt={jogador.name} />
    </div>
  );
}

export default CardJogador;
