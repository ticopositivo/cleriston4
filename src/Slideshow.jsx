import React, { useState, useEffect } from 'react';
import './index.css'; // Importando o arquivo CSS

function Slideshow() {
  const imagens = ['lanches.png', 'lanches 2.png', 'lanches 3.png', 'lanches 4.png', 'lanches 5.png', 'lanches 6.png'];
  const [indiceAtual, setIndiceAtual] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndiceAtual((prevIndice) => (prevIndice + 1) % imagens.length);
    }, 5000); // Altera o slide a cada 5 segundos

    return () => clearInterval(intervalId);
  }, [indiceAtual, imagens.length]);

  const proximoSlide = () => {
    setIndiceAtual((prevIndice) => (prevIndice + 1) % imagens.length);
  };

  const voltarSlide = () => {
    setIndiceAtual((prevIndice) => (prevIndice - 1 + imagens.length) % imagens.length);
  };

  return (
    <div className="slideshow-container">
      <img src={imagens[indiceAtual]} alt={`Imagem ${indiceAtual + 1}`} className="slide-image" />

      <button onClick={voltarSlide} className="prev">&#10094;</button>
      <button onClick={proximoSlide} className="next">&#10095;</button>
    </div>
  );
}

export default Slideshow;
