import React, { useState } from 'react';
import './App.css';

function App() {
  const [cidade, setCidade] = useState(null);

  const cidades = [
    {
      id: 1,
      nome: 'Cidade 1',
      foto: './images/cidade1.jpg',
      descricao: `Fundada em 1769, Cidade 1 é uma encantadora metrópole com uma rica história e cultura.
      Com uma população atual de 2 milhões habitantes, é a capital do estado de Estado 1.
      A cidade é famosa por seus belos edifícios em conexão com bonitas paisagens naturais.
      Além disso, Cidade 1 é um centro cultural, lar de muitos museus, teatros e festivais ao longo do ano.
      Os visitantes podem desfrutar de uma variedade de atividades, desde explorar a cidade antiga até saborear a culinária local única.
      É um destino turístico popular e um ótimo lugar para morar e trabalhar.
      `
    },
    {
      id: 2,
      nome: 'Cidade 2',
      foto: './images/cidade2.jpg',
      descricao: `A cidade 2 foi fundada no ano de 1698.
      Sua população atual é de 1,2 milhão de habitantes.
      Cidade 2 é conhecida por sua impressionante paisagem urbana, marcada por altos prédios que se erguem contra o céu.
      Seu horizonte é um espetáculo à parte, iluminado durante a noite, criando uma vista deslumbrante.
      A atração principal da cidade é o seu exuberante parque, que oferece um refúgio tranquilo no coração da agitação urbana.
      O parque é famoso por seu lindo lago, onde visitantes podem fazer passeios de barco e apreciar as águas calmas.
      À sua volta, você encontrará belas árvores que proporcionam sombra nos dias ensolarados e uma sensação de serenidade.
      Além disso, Cidade 2 é um centro cultural vibrante, com uma cena artística florescente, museus de renome e uma variedade de restaurantes que servem pratos locais e internacionais deliciosos.
      É um destino imperdível para amantes da arquitetura, amantes da natureza e entusiastas da cultura.
      `
    },
    {
      id: 3,
      nome: 'Cidade 3',
      foto: './images/cidade3.jpg',
      descricao: `Fundada em 1806, a Cidade 3 tem uma rica história e proporciona aos seus moradores uma excelente qualidade de vida.
      Sua população atual é de 800.000 habitantes.
      Cidade 3 é uma cidade que combina o verde da natureza com o cinza da urbanização.
      Ela é conhecida por suas árvores frondosas, seus gramados bem cuidados e seus parques ecológicos.
      Cidade 3 também tem uma infraestrutura moderna, com edifícios altos, ruas largas e transporte público eficiente.
      É uma cidade que oferece qualidade de vida, cultura e lazer para seus moradores e visitantes.
      `
    },
  ];

  const mostrarCidade = (cidadeSelecionada) => {
    setCidade(cidadeSelecionada);
  };


  const fecharCidade = () => {
    setCidade(null);
  };

  return (
    <div className="App">
      <h1>Lista de Cidades</h1>
      <ul>
        {cidades.map((cidade) => (
          <li key={cidade.id} onClick={() => mostrarCidade(cidade)}>
            {cidade.nome}
          </li>
        ))}
      </ul>

      {cidade && (
        <div>
          <h2>{cidade.nome}</h2>
          <img src={cidade.foto} alt={cidade.nome} />
          <p>{cidade.descricao}</p>
          <button onClick={fecharCidade}>Fechar</button>
        </div>
      )}
    </div>
  );
}

export default App;
