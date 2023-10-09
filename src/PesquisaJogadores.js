import React, { useState } from 'react';
import CardJogador from './CardJogador';

function PesquisaJogadores({ favoritarJogador, setResultadoPesquisaJogador }) {
  const [nomeJogador, setNomeJogador] = useState('');
  const [resultadoPesquisa, setResultadoPesquisa] = useState(null);

  const handlePesquisa = async () => {
    try {
    
      const jogador = { nome: nomeJogador, imagem: 'urn:ietf:wg:oauth:2.0:oob' };
      setResultadoPesquisa(jogador);

      setResultadoPesquisaJogador(jogador); 
    } catch (error) {
      console.error('Erro ao buscar jogador:', error);
    }
  }

  const handleFavoritar = () => {
    if (resultadoPesquisa) {
      favoritarJogador(resultadoPesquisa);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Nome do Jogador"
        value={nomeJogador}
        onChange={(e) => setNomeJogador(e.target.value)}
      />
      <button onClick={handlePesquisa} className="search-button">
        Pesquisar
      </button>

      {resultadoPesquisa && (
        <div className="search-result">
          <CardJogador jogador={resultadoPesquisa} />
          <button onClick={handleFavoritar} className="favorite-button">
            Adicionar aos favoritos
          </button>
        </div>
      )}
    </div>
  );
}

export default PesquisaJogadores;
