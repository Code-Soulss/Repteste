import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import PesquisaJogadores from './PesquisaJogadores';
import JogadoresFavoritos from './JogadoresFavoritos';

function App() {
  const [favoritos, setFavoritos] = useState([]);
  const [resultadoPesquisaJogador, setResultadoPesquisaJogador] = useState(null);
  const [resultadoPesquisaFotos, setResultadoPesquisaFotos] = useState(null);

  const favoritarJogador = (jogador) => {
    setFavoritos([...favoritos, jogador]);
  };

  useEffect(() => {
    // Função para buscar informações do jogador de uma API (substitua pela URL da API real)
    const buscarInformacoesDoJogador = async (nomeDoJogador) => {
      try {
        const response = await axios.get(`https://transfermarkt-api.vercel.app/players/search/${nomeDoJogador}`);
        if (response.status === 200) {
          setResultadoPesquisaJogador(response.data.results[0]); // Define o resultado da pesquisa de informações dos jogadores
        } else {
          throw new Error('Erro ao buscar informações do jogador');
        }
      } catch (error) {
        console.error('Erro ao buscar informações do jogador:', error);
      }
    };

    // Função para buscar fotos do jogador de outra API (substitua pela URL da API real)
    const buscarFotosDoJogador = async () => {
      const apiKey = 'lhzDkS-85ACsMYTns9xm9OmC_R_GfCfskvNr6eLsor8';
      const searchTerm = 'jogador'; // Termo de pesquisa
      // URL da API do Unsplash
      const apiUrl = `urn:ietf:wg:oauth:2.0:oob`;
    };

    // Chama as funções para buscar informações e fotos do jogador ao montar o componente
    buscarInformacoesDoJogador('cristiano%20ronaldo');
    buscarFotosDoJogador();
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Pesquisar e Favoritar Jogadores</h1>
      </header>
      <PesquisaJogadores favoritarJogador={favoritarJogador} setResultadoPesquisaJogador={setResultadoPesquisaJogador} />
      <JogadoresFavoritos favoritos={favoritos} />
    </div>
  );
}

export default App;
