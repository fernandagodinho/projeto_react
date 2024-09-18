// src/App.tsx
import React from 'react';
import Calculator from './components/Calculator';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Minha Primeira Calculadora em React</h1>
      <Calculator />
      <p>"Codifique seus Sonhos"</p>
      <p>Feito com amor por <a href="https://github.com/fernandagodinho">Fernanda Alves Godinho da Silva</a></p>
    </div>
  );
};

export default App;
