import React, { useState } from 'react';
import './index.css'; // Importando os estilos CSS

const Galeria = () => {
  const [cartItems, setCartItems] = useState([]); // Estado para armazenar os itens no carrinho

  const handleAddToCart = (productName) => {
    // Adicionar o item ao carrinho
    setCartItems([...cartItems, productName]);
  };

  return (
    <section id="galeria" className="galeria">
      <div className="container">
        <h2>Nossos Produtos</h2>
        <div className="grid-container">
          <div>
          <div className="circle"></div> {/* Círculo branco */}
            <img src="pao1.png" alt="Imagem 1" className='img' />
            <h1>Pão Francês</h1>
            <button className="botao-adicionar" onClick={() => handleAddToCart("Pão Francês")}>
              Adicionar ao Carrinho
            </button>
          </div>
          <div>
            <img src="pao2.png" alt="Imagem 2" />
            <h1>Pão de Hamburguer</h1>
            <button className="botao-adicionar" onClick={() => handleAddToCart("Pão de Hamburguer")}>
              Adicionar ao Carrinho
            </button>
          </div>
          <div>
            <img src="pao3.png" alt="Imagem 3" />
            <h1>Pão de Forma</h1>
            <button className="botao-adicionar" onClick={() => handleAddToCart("Pão de Forma")}>
              Adicionar ao Carrinho
            </button>
          </div>
          <div>
          <img src="bolo choc.png" alt="Imagem 3" />
            <h1>Bolo de Chocolate</h1>
            <button className="botao-adicionar" onClick={() => handleAddToCart("Bolo de Chocolate")}>
              Adicionar ao Carrinho
            </button>
          </div>
          <div>
            <img src="coxinha.png" alt="Imagem do Produto" />
            <h1>Coxinha</h1>
            <button className="botao-adicionar" onClick={() => handleAddToCart("Coxinha")}>
              Adicionar ao Carrinho
            </button>
          </div>
          <div>
            <img src="kibe.png" alt="Imagem do Produto" />
            <h1>Kibe</h1>
            <button className="botao-adicionar" onClick={() => handleAddToCart("Kibe")}>
              Adicionar ao Carrinho
            </button>
          </div>
          <div>
            <img src="empada.png" alt="Imagem do Produto" />
            <h1>Empada</h1>
            <button className="botao-adicionar" onClick={() => handleAddToCart("Empada")}>
              Adicionar ao Carrinho
            </button>
          </div>
          <div>
            <img src="empada doce.png" alt="Imagem do Produto" />
            <h1>Empada Doce</h1>
            <button className="botao-adicionar" onClick={() => handleAddToCart("Empada Doce")}>
              Adicionar ao Carrinho
            </button>
          </div>
          <div>
            <img src="pasteldc.png" alt="Imagem do Produto" />
            <h1>Pastel Doce</h1>
            <button className="botao-adicionar" onClick={() => handleAddToCart("Pastel Doce")}>
              Adicionar ao Carrinho
            </button>
          </div>
          <div>
            <img src="sequilho.png" alt="Imagem do Produto" />
            <h1>Sequilho</h1>
            <button className="botao-adicionar" onClick={() => handleAddToCart("Sequilho")}>
              Adicionar ao Carrinho
            </button>
          </div>
          <div>
            <img src="cuscuz.png" alt="Imagem do Produto" />
            <h1>Cuscuz</h1>
            <button className="botao-adicionar" onClick={() => handleAddToCart("Cuscuz")}>
              Adicionar ao Carrinho
            </button>
          </div>
          <div>
            <img src="cocacola.png" alt="Imagem do Produto" />
            <h1>Coca-Cola</h1>
            <button className="botao-adicionar" onClick={() => handleAddToCart("Coca-Cola")}>
              Adicionar ao Carrinho
            </button>
          </div>
          <div>
            <img src="iogurte.png" alt="Imagem do Produto" />
            <h1>Iogurte</h1>
            <button className="botao-adicionar" onClick={() => handleAddToCart("Iogurte")}>
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      </div>
      <div className="carrinho-container">
        <h2>Carrinho</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p>Total de itens: {cartItems.length}</p>
      </div>
    </section>
  );
}

export default Galeria;
