const TipoPeticiones = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="dropdown col-4">
                    <a className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" href="/">
                        Tipo de consulta
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/">Petición</a></li>
                        <li><a className="dropdown-item" href="/">Reclamo </a></li>
                        <li><a className="dropdown-item" href="/">Felicitación</a></li>
                    </ul>
                </div>

                <div class="col-2">
                    <button class="btn btn-outline-success" type="submit" href="/peticiones/ListaPeticion.js">Buscar</button>
                </div>
            </div>
        </div>
    );
}

export default TipoPeticiones;