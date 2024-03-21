import React, { useState } from 'react';
import './index.css'; // Importando os estilos CSS
import Slideshow from './Slideshow.jsx';
import Rodape from './Rodape.jsx'; // Importando o componente Rodape
import História from './História'; // Importando o componente História
import Galeria from './Galeria'; // Importando o componente Galeria

const Topo = () => {
  const [linkContato, setLinkContato] = useState("https://api.whatsapp.com/send?phone=5575991271507");
  const [cartItems, setCartItems] = useState(0); // Estado para manter a contagem de itens no carrinho
  const [secaoAtual, setSecaoAtual] = useState('home');

  const handleContatoClick = () => {
    window.open(linkContato, '_blank');
  }

  const handleAddToCart = () => {
    setCartItems(cartItems + 1); // Incrementar a contagem de itens no carrinho
  };

  const handleSobreNosClick = () => {
    setSecaoAtual('sobre');
  };

  const handleProdutosClick = () => {
    setSecaoAtual('produtos');
  };

  const handleHomeClick = () => {
    setSecaoAtual('home');
  };

  return (
    <div>
      <header className="topo">
      <div className='logo-container'>
        <img src="./public/logo.png" alt="Logo da Oficina do Pão" className="logo" />
        </div>
        <div className="container">
          <h1>OFICINA DO PÃO</h1>
          <div className="botoes"> {/* Container para os botões */}
            <button onClick={handleHomeClick} className="botao botao-sobre">Home</button>
            <button onClick={handleProdutosClick} className="botao botao-sobre">Produtos</button>
            <button onClick={handleContatoClick} className="botao botao-contato">Contato</button>
            <button onClick={handleSobreNosClick} className="botao botao-sobre">Sobre Nós</button>
          </div>
          <Slideshow /> {/* Adicionando o Slideshow */}
          <div className="carrinho-container">
            <span className="carrinho-contagem">{cartItems}</span> {/* Exibir a contagem de itens no carrinho */}
            <div className="carrinho" onClick={handleAddToCart}>
              <img src="./carrinho.png" alt="Ícone do carrinho" />
            </div>
          </div>
        </div>
      </header>
      {/* Verifica se a seção atual é 'sobre' e renderiza a seção de História */}
      {secaoAtual === 'sobre' && <História />}
      {/* Verifica se a seção atual é 'produtos' e renderiza a seção de Galeria */}
      {secaoAtual === 'produtos' && <Galeria />}
      {/* Rodapé */}
      <Rodape />
    </div>
  );
}

export default Topo;

