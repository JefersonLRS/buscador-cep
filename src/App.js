import { FiSearch } from 'react-icons/fi';
import './styles.css';
import { useState } from 'react';
import { api } from './services/api'

function App() {

  const [input, setInput] = useState('');
  const [cep, setCep] = useState({})

  async function handleSearchButton() {
    // 72152002/json/

    (input === '' && alert("Preencha com algum CEP"))

    try {
      const response = await api.get(`${input}/json/`)
      setCep(response.data)
      setInput('')
    }
    catch {
      alert("Ops, algo deu errado... Tente novamente :)")
      setInput('')
    }
  }

  return (
    <div className="container">
      <h1 className="title">Buscar CEP</h1>
      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite algum CEP..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSearchButton} className="buttonSearch">
          <FiSearch size={25} color='#FFF' />
        </button>
      </div>

      {Object.keys(cep).length > 0 && (
        <main className='main'>
          <h2>CEP: {cep.cep}</h2>

          <span>Localidade: {cep.localidade} - {cep.uf}</span>
          <span>Bairro: {cep.bairro}</span>
          <span>Rua: {cep.logradouro}</span>
        </main>
      )}
      <footer>
        Site desenvolvido por <a target='_blank' href="https://github.com/httpjef">Jeferson Luís</a>
      </footer>
    </div>
  );
}

export default App;
