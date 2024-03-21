import React from 'react';
import './index.css'; // Importando os estilos CSS

const Secoes = () => {
  return (
    <div>
      {/* Seção de Produtos */}
      <a href="#produtos">
        <section id="produtos" className="secao">
          <div className="container">
            <h2>Nossos Produto</h2>
            {/* Adicione aqui o conteúdo da seção de produtos */}
          </div>
        </section>
      </a>

      {/* Seção Sobre Nós */}
      <a href="#sobre">
        <section id="sobre" className="secao">
          <div className="container">
            <h2>Sobre Nós</h2>
            {/* Adicione aqui o conteúdo da seção sobre nós */}
          </div>
        </section>
      </a>

      {/* Seção de Contato */}
      <a href="#contato">
        <section id="contato" className="secao">
          <div className="container">
            <h2>Contato</h2>
            {/* Adicione aqui o conteúdo da seção de contato */}
          </div>
        </section>
      </a>
    </div>
  );
}

export default Secoes;
