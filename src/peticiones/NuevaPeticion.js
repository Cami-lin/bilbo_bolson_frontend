const NuevaPeticion = () => {
    return (
        <div className="container">
            <form class="row g-3">
                <div class="col-md-6">
                    <label for="nombre" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="nombre" />
                </div>
                <div class="col-md-6">
                    <label for="apellido" class="form-label">Apellidos</label>
                    <input type="text" class="form-control" id="apellido" />
                </div>
                <div class="col-6">
                    <label for="email" class="form-label">E-mail</label>
                    <input type="text" class="form-control" id="email" />
                </div>
                <div class="col-6">
                    <label for="contraseña" class="form-label">Contraseña</label>
                    <input type="text" class="form-control" id="contraseña" />
                </div>
                <div class="col-md-6">
                    <label for="contraseña" class="form-label">Ciudad (dirección y/o barrio)</label>
                    <input type="text" class="form-control" id="ciudad" />
                </div>
                <div class="col-md-3">
                    <label for="inputState" class="form-label">Número telefónico</label>
                    <input type="text" class="form-control" id="numero" />
                </div>
                <div class="col-md-3">
                    <label for="id" class="form-label">ID</label>
                    <input type="text" class="form-control" id="id" />
                </div>
                
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Registrarme</button>
                </div>
            </form>
        </div>
    );
}

export default NuevaPeticion;