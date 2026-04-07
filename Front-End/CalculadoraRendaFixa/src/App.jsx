import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Calculadora from './pages/Calculadora'
import Sobre from './pages/Sobre'

function App() {
  return (
    <div>
      {/* Habilita o sistema de navegação por rotas */}
      <BrowserRouter>
        {/* Barra de navegação, para aparecer em todas as páginas */}
        <NavBar />
        {/* Area do conteúdo principal */}
        <main className='conteudo-principal'>
          <Routes>
            <Route path="/" element={<Calculadora />} />
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App