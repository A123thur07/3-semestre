import { Link, useNavigate } from "react-router-dom"
import { estilos } from "../style/Estilos"

const Aula14 = () => {
    return (
        <div style={estilos.cardAula}>
            <h2>Aula 14 - React Router - Navagação em React</h2>
            <h3>Biblioteca que permite criar e gerenciar rotas em React</h3>
            <hr />
            <h3>Navegação com Link</h3>
            {/* <a href='/'>Página Principal</a> */}
            <Link to='/'>Página Principal</Link>
            <br />
            <Link to='/sobre'>Página Sobre</Link>
            <br />
            <Link to='/blablabla' >Página Não Encontrada </Link>
            <br />
            <h3>Navegação com programação utilizando o useNavigate</h3>
            <button onClick={() => navigate('/sobre')}>Sobre</button>
            <hr />
            <h3>Rotas dinâmicas / Rotas com Prâmetros(useParams)</h3>
            <button onClick={() => navigate('/perfil/Douglas')}>Douglas</button>
            <button onClick={() => navigate('/perfil/Ricardo')}>Ricardo</button>
            <h3>Menu de navegação - Exercício </h3>
            <Link to='/contato'>Contato</Link>
            <br />
            <Link to='/detalhes'>Detalhes</Link>
            <br />
            <Link to='/inicio'>Inicio</Link>
            <br />
            <Link to='/filme/La la land'>Filme</Link>
            <br />
        </div>
    )
}

export default Aula14

