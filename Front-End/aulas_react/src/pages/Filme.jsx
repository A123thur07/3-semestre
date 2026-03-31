import { Link, useParams } from "react-router-dom"

function Filme() {
    const { id } = useParams();
    return(
        <div>
            <h1>Exibindo dados do filme: {id}</h1>
            <Link to='/inicio'>Inicio</Link>
        </div>
    )
}

export default Filme