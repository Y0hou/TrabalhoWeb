import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CadastroItem from './components/CadastroItem';
import Listagem from './components/Listagem';
import RelatorioItens from './components/ItemsReport';
import GeneralReport from './components/GeneralReport'; // Importa o novo componente
import Login from './components/Login';
import './assets/css/login.css';
import './assets/css/home.css';
import './assets/css/listagem.css';
import './assets/css/cadastroItem.css';
import './assets/css/itemsReport.css';
import './assets/css/GeneralReport.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <div className="App">
        {!isAuthenticated ? (
          <Login onLoginSuccess={handleLoginSuccess} />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro-item" element={<CadastroItem />} />
            <Route path="/listagem" element={<Listagem />} />
            <Route path="/relatorio-Mensal" element={<RelatorioItens />} />
            <Route path="/relatorio-Geral" element={<GeneralReport />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
