import axios from 'axios';

function PesquisaJogadores({ favoritarJogador }) {
  const [nomeJogador, setNomeJogador] = useState('');
  const [resultadoPesquisa, setResultadoPesquisa] = useState(null);

  const apiKey = 'https://www.thesportsdb.com/api/v1/json/{APIKEY}/searchplayers.php?t={TeamName}&p={Playername}';
  const apiUrl = `https://www.thesportsdb.com/api/v1/json/${apiKey}/searchplayers.php?p=`;

  const handlePesquisa = async () => {
    try {
      const response = await axios.get(apiUrl + nomeJogador);

      if (response.status === 200) {
        const jogador = response.data.player[0];
        setResultadoPesquisa(jogador);
      } else {
        throw new Error('Erro ao buscar jogador');
      }
    } catch (error) {
      console.error('Erro ao buscar jogador:', error);
    }
  }

function PesquisaJogadores({ favoritarJogador }) {
  
    return (
      <div>
        <h1>Pesquisar Jogadores</h1>
        <input
        type="text"
        placeholder="Nome do Jogador"
        value={nomeJogador}
        onChange={(e) => setNomeJogador(e.target.value)}
      />
      <button onClick={handlePesquisa}>Pesquisar</button>
        {resultadoPesquisa && (
          <div>
            <CardAtleta jogador={resultadoPesquisa} />
            <button onClick={() => favoritarJogador(resultadoPesquisa)}>Adicionar aos favoritos</button>
          </div>
        )}
      </div>
    );
  }
  