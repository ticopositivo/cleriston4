import React from 'react';
import Topo from './Topo'; // Importando o componente Topo
import Galeria from './Galeria'; // Importando o componente Galeria
import História from './História'; // Importando o componente História
import Rodape from './Rodape'; // Importando o componente Rodape
import './index.css'; // Importando os estilos CSS

const App = () => {
  return (
    <div>
      <Topo />
      <Galeria />
      <História />
      <Rodape />
    </div>
  );
}

export default App;
