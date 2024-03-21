import React, { useState, useEffect } from 'react';
import './index.css';

const Rodape = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight; // Altura total do documento
      const windowHeight = window.innerHeight; // Altura da janela de visualização
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop; // Posição do scroll vertical

      // Verifica se o usuário fez scroll suficiente para mostrar o rodapé
      if (scrollTop + windowHeight === scrollHeight) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Remove o listener do evento quando o componente é desmontado
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className={showFooter ? "rodape rodape-show" : "rodape"}>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Oficina do Pão. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Rodape;
